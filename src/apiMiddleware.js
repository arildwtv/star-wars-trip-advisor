import fetch from './fetch';

function tap(func) {
  return arg => {
    func(arg);
    return arg;
  }
}

const apiMiddleware = ({ dispatch }) => next => action => {
  const {
    types,
    call,
    onSuccess = () => undefined,
    onError = () => undefined
  } = action;

  if (!types) {
    return next(action);
  }

  if (!Array.isArray(types) ||
    types.length !== 3 || !types.every(type => typeof type === 'string')) {
    throw new Error('Expected an array of three string types');
  }

  const [requestType, successType, failureType] = types;

  const fetchCall = typeof call === 'object'
    ? fetch => fetch(call.url, call.options)
    : call;

  if (typeof fetchCall !== 'function') {
    throw new Error('Expected call to be a function');
  }

  const failureAction = payload => ({
    type: failureType,
    payload
  });

  dispatch({
    type: requestType
  });

  fetchCall(fetch)
    .then(tap(response => {
      if (response.status < 200 || response.status > 299) {
        throw new Error('HTTP response status was ' + response.status);
      }
    }))
    .then(response => response.status === 204
      ? response
      : response.json().then(parsedBody =>
          Object.assign({}, response, { parsedBody })))
    .then(tap(response => {
      dispatch({
        type: successType,
        payload: response
      });
      onSuccess(dispatch, response);
    }))
    .catch(err => {
      onError(dispatch, err);
      dispatch(failureAction(err));
    });
};

export default apiMiddleware;

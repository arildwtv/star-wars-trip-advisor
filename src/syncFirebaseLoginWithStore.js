export default function syncFirebaseLoginWithStore(store, firebase) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      store.dispatch({ type: 'LOGIN_SUCCEEDED', payload: {
        email: user.email,
        uid: user.uid
      }})
    } else {
      store.dispatch({ type: 'LOGOUT_SUCCEEDED' })
    }
  });
}

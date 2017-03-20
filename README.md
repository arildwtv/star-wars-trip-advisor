# Star Wars Trip Advisor

## Case-beskrivelse

Galaksene i Star Wars-universet er mangfoldige, og det er mange intergalaktiske turister som nå har begynt å etterlyse en uttømmende turguide for å kunne orientere seg i alle severdighetene. Du har fått i oppdrag å lage en app for nettopp dette.

Star Wars Trip Advisor gir brukerne mulighet til å orientere seg i alle planetene som kan besøkes.

* De skal kunne velge en enkel planet og lese om typiske planetariske fakta.
* Hver planet skal også vise informasjon om:
  * hvilke filmer som er spilt inn der, og
  * hvilke beboere som bor eller har bodd der.
* De som har besøkt planeten, skal kunne skrive en anmeldelse av oppholdet. En anmeldelse består av en kommentar og en rating på opptil fem stjerner.
* Brukere skal kunne lese tidligere anmeldelser som er skrevet om planeten.
* Brukere skal kunne se en gjennomsnittlig rating for en planet basert på anmeldelsene.

## Oppstart

Kjør følgende kommandoer i prosjektmappen:

```
npm i
npm start
```

## Forslag til state

```
{
  planets: { // modul namespace
    planets, // Planeter som vises i listevisningen
    planet, // Planet som vises i enkeltvisningen
    review, // anmeldelse som bruker skriver/har skrevet i enkeltvisningen
    rating // antall stjerner bruker har valgt i enkeltvisningen
  }
}
```

## Forslag til actions

* `FETCH_PLANETS_REQUESTED` - Ved henting av planeter fra API
* `FETCH_PLANETS_SUCCEEDED` - Når planeter er hentet fra API-et
* `FETCH_PLANETS_FAILED` - Når API-forespørsel for å hente planeter feiler
* `POST_COMMENT_REQUESTED` - Ved posting av kommentar til API
* `POST_COMMENT_SUCCEEDED` - Når kommentar er postet til API-et
* `POST_COMMENT_FAILED` - Når API-forespørsel for å poste kommentar feiler

## API-er

### Alle planeter
`GET https://starwarstripadvisor.firebaseio.com/planets.json`

### Enkelt planet
`GET https://starwarstripadvisor.firebaseio.com/planets/1.json`

## Poste kommentar på planet
`PUT https://starwarstripadvisor.firebaseio.com/planets/1/reviews/{uid}`

## Oppgave 1

Lag visningen av en enkel planet (route: `planets/:planetId`). For å vise komponenten under den gjeldende routen, må du registrere dette i `index.js` (se kommentar i filen).

Vis bildet av planeten og typiske planetariske fakta, som:

* navn
* klima
* diameter
* antall beboere

Vis også gjerne flere fakta når du først er i gang.

## Oppgave 2

Lag listevisningen av planeter (route: `planets`). For hver enkel planet, vis bildet av og navnet til planeten.

## Oppgave 3

Gjør hvert enkelt punkt i listen over planeter klikkbare, og la lenken {hint: ReactRouter sin `Link`} føre til enkeltvisningen av den gjeldende planeten, som du lagde i oppgave 1.

## Oppgave 4

I enkeltvisningen av en planet, lag en liste over alle anmeldelser som er skrevet om planeten.

## Oppgave 5

I enkeltvisningen av en planet, vis gjennomsnittlig rating for planet basert på ratingen i alle anmeldelsene.

## Oppgave 6

I enkeltvisningen av en planet, la bruker kunne skrive sin egen anmeldelse. Bruk API-et som beskrevet under API-er.
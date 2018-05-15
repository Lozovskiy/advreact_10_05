import firebase from 'firebase'

export const appName = 'advancedreact-f31cd'

export const config = {
    apiKey: 'AIzaSyC4HchzzCItq1dPJRY_B-InXmnkIasqMVw',
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: "",
    messagingSenderId: "71475877514"
}

firebase.initializeApp(config)
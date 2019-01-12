import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyCyLBC9HPiOxAi7LxlNAq9akiFL6FW3sj4',
    authDomain: 'vuetify-project-47a41.firebaseapp.com',
    databaseURL: 'https://vuetify-project-47a41.firebaseio.com',
    projectId: 'vuetify-project-47a41',
    storageBucket: 'vuetify-project-47a41.appspot.com',
    messagingSenderId: '865745334762'
};
firebase.initializeApp(config);

// Initialize firebase connection
const database = firebase.firestore();

database.settings({ timestampsInSnapshots: true });

export default database;

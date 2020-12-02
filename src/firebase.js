import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBNd8akyfEyQieIWoEFivcuXPEEfT8ON5c",
    authDomain: "myreact-d05a5.firebaseapp.com",
    databaseURL: "https://myreact-d05a5.firebaseio.com",
    projectId: "myreact-d05a5",
    storageBucket: "myreact-d05a5.appspot.com",
    messagingSenderId: "138309033183",
    appId: "1:138309033183:web:18118146609182981a9d6a",
    measurementId: "G-5ZCJVRMV4G"
};

firebase.initializeApp(config);
export default firebase;
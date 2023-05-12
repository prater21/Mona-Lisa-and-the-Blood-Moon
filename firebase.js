const { initializeApp } = require("firebase/app");
const { getDatabase } = require( "firebase/database");
// // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsKAf_UfdquTlFZhizqCD7kQED77R0yxI",
    authDomain: "mona-lisa-and-the-blood-4a6d2.firebaseapp.com",
    databaseURL: "https://mona-lisa-and-the-blood-4a6d2-default-rtdb.firebaseio.com",
    projectId: "mona-lisa-and-the-blood-4a6d2",
    storageBucket: "mona-lisa-and-the-blood-4a6d2.appspot.com",
    messagingSenderId: "82057173682",
    appId: "1:82057173682:web:070a560011980b163747ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.exports.database = getDatabase(app);
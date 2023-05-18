/**
 * firebase config
 */
const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "summer-mountain-384923.firebaseapp.com",
    databaseURL: "https://summer-mountain-384923-default-rtdb.firebaseio.com",
    projectId: "summer-mountain-384923",
    storageBucket: "summer-mountain-384923.appspot.com",
    messagingSenderId: "389097798784",
    appId: "1:389097798784:web:10f04ed547ad921e143a65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.exports.database = getDatabase(app);

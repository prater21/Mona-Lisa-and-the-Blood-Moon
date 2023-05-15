import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
    authDomain: "summer-mountain-384923.firebaseapp.com",
    databaseURL: "https://summer-mountain-384923-default-rtdb.firebaseio.com",
    projectId: "summer-mountain-384923",
    storageBucket: "summer-mountain-384923.appspot.com",
    messagingSenderId: "389097798784",
    appId: "1:389097798784:web:10f04ed547ad921e143a65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
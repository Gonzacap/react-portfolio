// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
//import * as dotenv from 'dotenv' 

// dotenv.config()
// console.log('dot env', process.env) // remove this after you've confirmed it is working


// Initialize Firebase
const app = initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  });

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export {app, database}; 
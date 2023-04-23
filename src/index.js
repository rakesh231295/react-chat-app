import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBU0urIYJ2jGwIIJmw6edwQrYduD3qmmV8",

  authDomain: "react-chat-app-30fd5.firebaseapp.com",

  databaseURL: "https://react-chat-app-30fd5-default-rtdb.firebaseio.com",

  projectId: "react-chat-app-30fd5",

  storageBucket: "react-chat-app-30fd5.appspot.com",

  messagingSenderId: "493754828339",

  appId: "1:493754828339:web:d1ce60ecfb34cb95738546"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

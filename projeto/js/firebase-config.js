// firebase-config.js
//import { initializeApp } from "firebase/app";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js'

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBUBpOHK7rTVj7V5KxH0m8ApA9wxRMxoyk",
  authDomain: "edificio-back01.firebaseapp.com",
  projectId: "edificio-back01",
  storageBucket: "edificio-back01.firebasestorage.app",
  messagingSenderId: "657186507275",
  appId: "1:657186507275:web:6d3881c1d7f7a305d6550e",
  measurementId: "G-FR66PXJY5F"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

export default app;

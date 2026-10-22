import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDfiMmXMNWMezFXQiFgTrVXkISxjaNKo9A",
    authDomain: "login-c9c27.firebaseapp.com",
    projectId: "login-c9c27",
    storageBucket: "login-c9c27.firebasestorage.app",
    messagingSenderId: "201531230211",
    appId: "1:201531230211:web:2952008005ae928cc5a636",
    measurementId: "G-QCLBHW5R5P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
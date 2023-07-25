import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyCxExX4t03tN1VcLn78fRCByii3CLMBKEc",
    authDomain: "fir-f12c5.firebaseapp.com",
    projectId: "fir-f12c5",
    storageBucket: "fir-f12c5.appspot.com",
    messagingSenderId: "142810604449",
    appId: "1:142810604449:web:fd11a31dd9901bfdb961e0",
    measurementId: "G-0LCWWHT0RM"
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;
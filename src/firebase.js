import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBJGumwax6e0RkRdppvkf0JxqelqAPUyBU",
    authDomain: "desafio-5045b.firebaseapp.com",
    projectId: "desafio-5045b",
    storageBucket: "desafio-5045b.appspot.com",
    messagingSenderId: "713428102480",
    appId: "1:713428102480:web:a924eb44c4aa2c9fab9055",
    measurementId: "G-LD99N8JLKZ"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;
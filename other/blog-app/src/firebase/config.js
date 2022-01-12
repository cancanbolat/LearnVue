import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfEoA1VmfK4tyWxMTeKReG_64q9rGjV0M",
    authDomain: "vue-blog-153f2.firebaseapp.com",
    projectId: "vue-blog-153f2",
    storageBucket: "vue-blog-153f2.appspot.com",
    messagingSenderId: "911648010317",
    appId: "1:911648010317:web:e9d67572fe1b9baca02c04",
    measurementId: "G-SV6QRLHB0B"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp }
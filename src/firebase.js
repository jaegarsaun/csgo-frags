import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJET_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseApp);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
};

export const signOut = () => {
    return auth.signOut();
};

// Get Firestore instance
export const db = getFirestore(app);

// // Enable offline persistence
// enableIndexedDbPersistence(db)
//   .then(() => {
//     console.log('Offline persistence enabled.');
//   })
//   .catch((error) => {
//     if (error.code === 'failed-precondition') {
//       console.log('Multiple tabs open, offline persistence cannot be enabled.');
//     } else if (error.code === 'unimplemented') {
//       console.log('Offline persistence is not supported in this browser.');
//     }
//   });
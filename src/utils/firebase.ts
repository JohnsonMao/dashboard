import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const viteEnv = import.meta.env;
const firebaseConfig = {
    apiKey: viteEnv.VITE_APP_KEY,
    authDomain: viteEnv.VITE_AUTH_DOMAIN,
    projectId: viteEnv.VITE_PROJECT_ID,
    storageBucket: viteEnv.VITE_STORAGE_BUCKET,
    messagingSenderId: viteEnv.VITE_MESSAGING_SENDER_ID,
    appId: viteEnv.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

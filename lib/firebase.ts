import { initializeApp, type FirebaseOptions } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
  projectId: process.env.FIREBASE_PROJECT_ID!,
  apiKey: process.env.FIREBASE_API_KEY!,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN!,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET!,
  // messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID!,
  // appId: process.env.FIREBASE_APP_ID!,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

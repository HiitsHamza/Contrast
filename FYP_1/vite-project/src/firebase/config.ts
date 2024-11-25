import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    "AIzaSyByHd6uCKbv9L76_QDs51Q6n5NGCioaD2Q",
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    "webdev-login-5521f.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "webdev-login-5521f",
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    "webdev-login-5521f.firebasestorage.app",
  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "405968528883",
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ||
    "1:405968528883:web:f9688bf9db3f46dfb0de86",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-ZHTMPMR1QJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };

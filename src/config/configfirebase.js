
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBEuLIcKiPrkYSLYzJpNKheJB4jw4D-fYQ",
  authDomain: "relojes-react.firebaseapp.com",
  projectId: "relojes-react",
  storageBucket: "relojes-react.appspot.com",
  messagingSenderId: "110804044028",
  appId: "1:110804044028:web:59bdda45498156ca532f79",
  measurementId: "G-2Q6H8LL19H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, firebaseConfig }; 
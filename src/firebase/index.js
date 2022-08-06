// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics"; //new ver
import { getAuth } from "firebase/auth"; //old ver

const firebaseConfig = {
  apiKey: "AIzaSyDBjxzAEULCwVAFcc4N_CgVte9REROaoo4",
  authDomain: "fir-react-au.firebaseapp.com",
  projectId: "fir-react-au",
  storageBucket: "fir-react-au.appspot.com",
  messagingSenderId: "492032371213",
  appId: "1:492032371213:web:0ed9d16e2ece5f49f04344",
  measurementId: "G-67WSBPG3QC"
};


const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app); //new ver

export const auth = getAuth(app); //old ver
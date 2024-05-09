// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCymckcLI1nJZSfta4K6TeqmyxUORzT7Dk",
  authDomain: "lb-mernbatch.firebaseapp.com",
  databaseURL: "https://lb-mernbatch-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lb-mernbatch",
  storageBucket: "lb-mernbatch.appspot.com",
  messagingSenderId: "77939297481",
  appId: "1:77939297481:web:92df1700a158f123279118",
  measurementId: "G-84BZ1C339M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
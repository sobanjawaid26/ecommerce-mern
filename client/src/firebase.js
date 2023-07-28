// import * as firebase from "firebase";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDniyhK46KyCVzN4PkypDIKjMEZLfTUx64",
//   authDomain: "ecommerce-225c8.firebaseapp.com",
//   databaseURL: "https://ecommerce-225c8.firebaseio.com",
//   projectId: "ecommerce-225c8",
//   storageBucket: "ecommerce-225c8.appspot.com",
//   messagingSenderId: "593746841585",
//   appId: "1:593746841585:web:f0090fc9296a27f7c67e50",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // export
// export const auth = firebase.auth();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmFHtewACnhZe8m_8YfQvlK1Oukh4uk0c",
    authDomain: "ecommerce-7d9f7.firebaseapp.com",
    projectId: "ecommerce-7d9f7",
    storageBucket: "ecommerce-7d9f7.appspot.com",
    messagingSenderId: "734404608328",
    appId: "1:734404608328:web:b5fccea53778730dd8737d"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  // export 
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
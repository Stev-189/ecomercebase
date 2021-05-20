import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDDz2CL5h9tA76YzgqmW3ss1FS9Xwr2I3E",
  authDomain: "ecomerce2021-4f60d.firebaseapp.com",
  projectId: "ecomerce2021-4f60d",
  storageBucket: "ecomerce2021-4f60d.appspot.com",
  messagingSenderId: "343232626340",
  appId: "1:343232626340:web:13a5734c9f95e3756cf031"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth= firebase.auth();

export {auth};
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDaCpQFpHenLAfxHZaWJEoemfO57BMwCmU",
    authDomain: "clone-bf2ba.firebaseapp.com",
    projectId: "clone-bf2ba",
    storageBucket: "clone-bf2ba.appspot.com",
    messagingSenderId: "120480603803",
    appId: "1:120480603803:web:8da95761a0f10de2cdb03e"
  };


  initializeApp(firebaseConfig)

  export const db = getFirestore()
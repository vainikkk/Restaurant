import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCAR8q8KTnZySzMtcdSFNYCekNZTlai6XE",
    authDomain: "restaurant-app-2f475.firebaseapp.com",
    databaseURL: "https://restaurant-app-2f475.firebaseio.com",
    projectId: "restaurant-app-2f475",
    storageBucket: "",
    messagingSenderId: "1041895345542",
    appId: "1:1041895345542:web:325ff6914b60fe2b84f007",
    measurementId: "G-CLW3QLGT5N"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;


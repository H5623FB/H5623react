import firebase from "firebase";

var config = {
apiKey: "AIzaSyCAwjqx9VXwTmUNoCTS7KenpL1N_E9xLSg",
authDomain: "sheet-b7292.firebaseapp.com",
databaseURL: "https://sheet-b7292.firebaseio.com",
projectId: "sheet-b7292",
storageBucket: "sheet-b7292.appspot.com",
messagingSenderId: "642513919721"
};
//firebase.initializeApp(config);
var fire = firebase.initializeApp(config);
export default fire;
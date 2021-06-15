import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCIhMHGk4o6aWYuHFmwYrUVg35qejywCyw",
  authDomain: "fileupload-cc423.firebaseapp.com",
  projectId: "fileupload-cc423",
  storageBucket: "fileupload-cc423.appspot.com",
  messagingSenderId: "121987798417",
  appId: "1:121987798417:web:be6c04c6c3fd5fe2e13630"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;
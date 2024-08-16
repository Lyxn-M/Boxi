// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGTUb7ggDaGKHzN-m9OmX21RH-JPMo9gk",
  authDomain: "boxi-for-it.firebaseapp.com",
  projectId: "boxi-for-it",
  storageBucket: "boxi-for-it.appspot.com",
  messagingSenderId: "166081574527",
  appId: "1:166081574527:web:58e9e2fbcbc47757a0714a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//submit button
Submit.addEventListener("click", function(event){
    event.preventDefault()

//inputs
const email = document.getElementById(email2).value
const password = document.getElementById(password2).value
const text = document.getElementById(name2).value

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
const user = userCredential.user;
    }  )
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
})

})

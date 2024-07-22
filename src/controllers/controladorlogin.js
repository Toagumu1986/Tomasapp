  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";

  import {getAuth,signInWithPopup,GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCxDsNuC5wYfxrKGuDrDFUvT2pw-lTNe7k",
    authDomain: "loginsuradualtsam.firebaseapp.com",
    projectId: "loginsuradualtsam",
    storageBucket: "loginsuradualtsam.appspot.com",
    messagingSenderId: "736885373650",
    appId: "1:736885373650:web:8cb7d63f349ff800154b0b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app)


  //rutina para detectar clic en el boton de google 
  let botonLogin=document.getElementById("ingresoGmail")

  botonLogin.addEventListener("click",function(){
    const auth = getAuth();
    const provider=new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    window.location.href="../../index.html"
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorMessage)
  });
  })


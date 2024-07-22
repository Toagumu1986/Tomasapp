import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";

import {getAuth, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyCxDsNuC5wYfxrKGuDrDFUvT2pw-lTNe7k",
    authDomain: "loginsuradualtsam.firebaseapp.com",
    projectId: "loginsuradualtsam",
    storageBucket: "loginsuradualtsam.appspot.com",
    messagingSenderId: "736885373650",
    appId: "1:736885373650:web:8cb7d63f349ff800154b0b"
  };

  const app = initializeApp(firebaseConfig);


  let avatar=document.getElementById("avatar")
  let botonSalida=document.getElementById("botonsalir")

  const auth=getAuth()
  onAuthStateChanged(auth,(user)=>{
    avatar.classList.remove("invisible")
    avatar.textContent=user.email
  })


  botonSalida.addEventListener("click",function(){
    
    signOut(auth).then(()=>{
        avatar.classList.add("invisible")
        window.location.href=("./views/login.html")
    })

  })
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDNc5WBZO8diURgSrpAfZ4ozFc7mZkZ9Ow",
  authDomain: "salon-953ce.firebaseapp.com",
  projectId: "salon-953ce",
  storageBucket: "salon-953ce.appspot.com",
  messagingSenderId: "1087144430985",
  appId: "1:1087144430985:web:a8c99f0371c76e57dba558",
  measurementId: "G-4G9M78L2FC"
}

const app = initializeApp(firebaseConfig)
export const auth =  getAuth(app)
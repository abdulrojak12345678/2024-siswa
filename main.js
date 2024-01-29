import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCGdCQI2D46xXf8OkhL4YziDWMHyrGEfjM",
  authDomain: "ibrahim-235d7.firebaseapp.com",
  projectId: "ibrahim-235d7",
  storageBucket: "ibrahim-235d7.appspot.com",
  messagingSenderId: "935701641604",
  appId: "1:935701641604:web:ec49facd57c9a56445c5d1",
  measurementId: "G-0FQ7VSDM4E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export async function ambilDaftarsiswa() {
  const siswaRef = collection(db,"siswa");
  const q = query(siswaRef, orderBy("nama"));
  const querysnapshot = await getDocs(q);
  
  let retval = [];
  querysnapshot.forEach((doc) => {
    retval.push({  id: doc.id, nama: doc.data().nama});
})

return retval;
}
import { useEffect, useState } from 'react'
import DateBar from './components/DateBar';
import DateBar from './components/DateBar';
import yggdrasilLogo from '/src/assets/512x512.png'
import './App.css'
import {request} from '@octokit/request';
import FirebaseApp from '../fb_config';
import {key} from '../githubCreds.js'
import {query, where, getFirestore, collection, addDoc, getDoc, getDocs, snapshotEqual,doc} from 'firebase/firestore';
import FirebaseApp from '../fb_config';
import {key} from '../githubCreds.js'
import {query, where, getFirestore, collection, addDoc, getDoc, getDocs, snapshotEqual,doc} from 'firebase/firestore';



function App() {
  const [commitData, setCommitData] = useState([])
  const startDate = new Date("2025-01-01T12:00:00-08:00");
  const currentDate = new Date();
  const [lastCheckDate,setLastCheckDate] = useState(startDate);
  console.log("dates:"+ startDate.toLocaleDateString() +" - "+ currentDate.toLocaleDateString());
  const updateMetadata = (db, date) => {
    
  }
  useEffect(()=>{
    const db = getFirestore(FirebaseApp);
    let docRef  = doc(db, "appmetadata", "metaDoc");
    getDoc(docRef).then((doc) => {
      setLastCheckDate(doc.data().date);
      console.log("last check date: "+ lastCheckDate.toLocaleDateString());
    })
  /*

    const q = query(collection(db, "appmetadata"));
    let firstSnapshot = false;
    getDocs(q,where("doc.id", "==", "lastCheck")).then(
      (querySnapshot) =>{ 
      if (firstSnapshot === false){
        firstSnapshot = true;
        console.log("first snapshot");
        querySnapshot.docs.forEach((doc) => {console.log(doc.data().date)});
      }
      console.log("snapshot data")
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${new Date(doc.data().date).toLocaleString()}`);
          console.log("stored value")
          console.log(doc.data().date)});
          
        }) 
    */
    if (currentDate !== lastCheckDate){
      //check github for new commits
      request('GET /repos/{owner}/{repo}/commits/', {
        owner: 'sbusenba',
        repo: 'yggdrasil',
        since: lastCheckDate,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          authorization: `token ${key}`
        }}).then(response => {
          setCommitData(response.data);
          console.log("response data");
          console.log(response.data);
        });
      //update last check date


      //update commit numbers in firebase
    }

    },[]);

  return (
    <>
      <div>
        <a href="" target="">
          <img src={yggdrasilLogo} className="logo yggdrasil-logo" alt="yggdrasil logo" />
        </a>

      </div>
      <h1>Yggdrasil</h1>
      <div className="card">
      
          <DateBar />
        <p>
          commits: {commitData.length}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

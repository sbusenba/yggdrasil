import { useEffect, useState } from 'react'
import yggdrasilLogo from '/src/assets/512x512.png'
import './App.css'
import {request} from '@octokit/request';



function App() {
  const [count, setCount] = useState(0)
  const [commitData, setCommitData] = useState([])
  

  useEffect(()=>{
    request('GET /repos/{owner}/{repo}/commits/', {
      owner: 'sbusenba',
      repo: 'yggdrasil',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }}).then(response => setCommitData(response.data))
    },[])

  return (
    <>
      <div>
        <a href="" target="">
          <img src={yggdrasilLogo} className="logo yggdrasil-logo" alt="yggdrasil logo" />
        </a>

      </div>
      <h1>Yggdrasil</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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

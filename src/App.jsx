import { useState } from 'react'
import reactLogo from './assets/react.svg'
import yggdrasilLogo from '/src/assets/512x512.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

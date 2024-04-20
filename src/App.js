import './App.css'
import './index.css'
import {useState} from 'react'
function App() {
  const [count, setcount] = useState(0)
  function Countin(){
    setcount(count+1)
  }
  return <div className="container">
     <h1>Count</h1>
     <label>{count}</label>
     <br></br>
     <div className="in">
     <button onClick={Countin}>Click</button>
     <button onClick={()=>setcount(0)}>Reset</button>
     </div>
   </div>
}

export default App

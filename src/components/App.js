import React, {useState} from "react"
import Bird from "./Bird";
import Pipes from "./Pipes";
import './index.css'

function App() {

  const [birdPosition, setBirdPosition] = useState(325)
  const [ani, setAni] = useState(false)
  

  function handleFall(){
    if (!ani){
      setTimeout(function(){
        setBirdPosition((birdPosition) => birdPosition - 1)
      }, 10)
      
    }
  }
  function handleFlap(e){
    if (e.key === " "){
      setAni(true)
      setTimeout(function(){
        setAni(false)
      }, 10)
    }
  }
  document.onkeydown = handleFlap

  return (
    <div>
      <Bird bird={birdPosition} setBird={setBirdPosition} ani={ani}/>
    </div>
  );
}

export default App;

import React, {useEffect, useState} from "react"
import Bird from "./Bird";
import Pipes from "./Pipes";
import './index.css'

function App() {
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom]= useState(screenHeight / 2)
  const [obstaclesLeft, setObstaclesLeft]= useState(screenWidth)
  const [obstaclesLeftTwo, setObstaclesLeftTwo]= useState(screenWidth + screenWidth/2 + 30)
  const [obstaclesNegHeight, setObstaclesNegHeight]= useState(0)
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo]= useState(0)
  const [isGameOver, setIsGameOver]= useState(false)
  const [score, setScore]= useState(0)
  const gravity = 3
  let obstacleWidth = 60
  let obstacleHeight = 300
  let gap = 200
  let gameTimerId
  let obstaclesTimerId
  let obstaclesTimerIdTwo
  
//start bird falling
useEffect(() => {
  if (birdBottom > 0) {
    gameTimerId = setInterval(() => {
      setBirdBottom(birdBottom => birdBottom - gravity)
    },30)

    return () => {
      clearInterval(gameTimerId)
    }
  }
  //if i dont have birdBottom as a dependecy, it wont stop
}, [birdBottom])
console.log(birdBottom)
  

// document.onkeydown = handleFlap

  return (
    <div>
      <Bird birdBottom={birdBottom} birdLeft={birdLeft}/>
    </div>
  );
}

export default App;

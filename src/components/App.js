import React, {useEffect, useState} from "react"
import Bird from "./Bird";
import Pipes from "./Pipes";
import './index.css'

function App() {
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight
  const birdLeft = screenWidth / 2
  const [difficulty, setDifficulty] = useState("Easy")
  const [birdBottom, setBirdBottom]= useState(screenHeight / 2)
  const [obstaclesLeft, setObstaclesLeft]= useState(-50)
  const [obstaclesLeftTwo, setObstaclesLeftTwo]= useState(screenWidth + screenWidth/2 + 30)
  const [obstaclesNegHeight, setObstaclesNegHeight]= useState(screenHeight/2 - 50)
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo]= useState(screenHeight/2 - 50)
  const [isGameOver, setIsGameOver]= useState(false)
  const [score, setScore]= useState(0)


  const [randomPipeOne, setRandomePipeOne] = useState({
    topHeight: null,
    bottomHeight: null,
  })


  let gravity = 3;
  const difCheck = (difficulty === "Easy" ? gravity : gravity = 6);
  let obstacleWidth = 60
  let obstacleHeight = 300
  let gap = 200
  let randomNum;
  let pipeMovement
  let gameTimerId
  let obstaclesTimerId
  let obstaclesTimerIdTwo

  // difficulty variety (changing speed/gravity)
  
//start bird falling
useEffect(() => {
  if (birdBottom > 0) {
    pipeMovement = setInterval(() => {
      setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5.5)
    }, 30)
    gameTimerId = setInterval(() => {
      setBirdBottom(birdBottom => birdBottom - gravity)
    }, 30)

    return () => {
      clearInterval(gameTimerId)
      clearInterval(pipeMovement)
    }
  }
  //if i dont have birdBottom as a dependecy, it wont stop
}, [birdBottom])

useEffect(() => {
  if (obstaclesLeft < -50) {
    randomPipe();
    clearInterval(pipeMovement)
    setObstaclesLeft(screenWidth)
  }
}, [obstaclesLeft])


function randomPipe(){
  let bottomPipeHeight = screenHeight*Math.random()
  let topPipeHeight = screenHeight-bottomPipeHeight-50
  setRandomePipeOne({
    bottomHeight: bottomPipeHeight,
    topHeight: topPipeHeight
  })
  console.log(bottomPipeHeight)
  console.log(topPipeHeight)
}
  
function handleFlap(){
  console.log('flap')
  // oppTimer = setInterval(() => {
  //   setBirdBottom(birdBottom => birdBottom + 60)
  // }) handle fluid animation
  setBirdBottom(birdBottom + 60)
}

//if(birdBottom <= 0) setIsGameOver(true);

// spacebar keycode = 32
console.log('obstacleLeft', obstaclesLeft)
console.log('birdBottom', birdBottom)
document.body.onkeyup = (e) => {
  if (e.key === " " ||
      e.code ==="Space"          
  ) {
    handleFlap();
  }
}

  return (
    <div style={{
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,

    }}>
      <Bird birdBottom={birdBottom} birdLeft={birdLeft}/>
      <Pipes isGameOver={isGameOver} obstaclesLeft={obstaclesLeft} screenHeight={screenHeight} randomPipeOne={randomPipeOne}/>
    </div>
  );
}

export default App;

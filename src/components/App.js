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


  // console.log(screenHeight)

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

// Resets Fist Obstacle when it goes off screen & calls randomPipe to generate random numbers for next obstacle
useEffect(() => {
  if (obstaclesLeft < -50) {
    randomPipe();
    clearInterval(pipeMovement)
    setObstaclesLeft(screenWidth)
  }
}, [obstaclesLeft])

// Gerates random top and bottom pipe heights for obstacles
function randomPipe(){
  let bottomPipeHeight = screenHeight*Math.random()
  let topPipeHeight = screenHeight-bottomPipeHeight

  // checking the topPipeHeight is not too tall
  if (topPipeHeight > 600){
    console.log('top pipe too tall')
    topPipeHeight = topPipeHeight - 120
  }

  //checking the bottomPipeHeight is not too tall 
  if (bottomPipeHeight > 650){
    console.log('bottom pipe too tall')
    bottomPipeHeight = bottomPipeHeight - 75
  }

  // setting the values into state
  setRandomePipeOne({
    bottomHeight: bottomPipeHeight,
    topHeight: topPipeHeight
  })
  console.log(bottomPipeHeight)
  console.log(topPipeHeight)
}
 
// flap functionality on spacebar press
function handleFlap(){
  console.log('flap')
  setBirdBottom(birdBottom + 60)
}

//   oppTimer = setInterval(() => {
//     setBirdBottom(birdBottom => birdBottom + 60)
//   }) handle fluid animation
// 
// if(birdBottom <= 0) setIsGameOver(true);

// if (birdBottom <= 0){
//   collisionCheck()
// }

// function collisionCheck(){
//   if (birdBottom <= 0){
//     setIsGameOver(true)
//   }
// }

// function addScore(){

// }

//  let gameOverDisplay = <div>
//     <h2>You Lose</h2>
//     <p>Score: {score}</p>
//     <button>Play again?</button>
//   </div>


 
// spacebar keycode = 32

// console.log('birdBottom', birdBottom)

// check if spacebar was pressed to initalize handleFlap
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

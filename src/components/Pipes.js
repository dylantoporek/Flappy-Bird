import React, { useEffect } from "react"
import '../components/pipes.css'

function Pipes({obstaclesLeft, screenHeight, isGameOver, randomPipeOne}) {


  const {topHeight, bottomHeight} = randomPipeOne

  console.log(obstaclesLeft)

  let randomPipeDisplay;
  if(randomPipeOne !== null){
    return randomPipeDisplay =  
        <div>
          <div className="pipe-top-random" style={{
            position: "relative",
            left: obstaclesLeft,
            backgroundColor: 'black',
            width: 50,
            height: topHeight
          }}></div>
          <div className="pipe-bottom-random" style={{
              position: "relative",
              left: obstaclesLeft,
              backgroundColor: 'green',
              top: 400,
              width: 50,
              height: bottomHeight,
            }}></div>
          </div>
  }

  return (
      <div className="pipe-container">
        <div className="pipes">
          <div className="pipe-top" style={{
            position: "relative",
            left: obstaclesLeft,
            backgroundColor: 'black',
            width: 50,
            height: screenHeight/3 - 50,
          }}></div>
          <div className="pipe-bottom" style={{
              position: "relative",
              left: obstaclesLeft,
              backgroundColor: 'green',
              top: 400,
              width: 50,
              height: screenHeight/3 - 50,
            }}></div>
        </div>
          {randomPipeOne ? {randomPipeDisplay} : null}
      </div>
  );
}

export default Pipes;
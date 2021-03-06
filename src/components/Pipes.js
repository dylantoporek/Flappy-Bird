import React, { useEffect } from "react"
import '../components/pipes.css'

function Pipes({obstaclesLeft, screenHeight, randomPipeOne}) {


  const {topHeight, bottomHeight} = randomPipeOne
  // console.log("topHeight", topHeight)
  // console.log('bottomHeight', bottomHeight)

  let randomPipe1Display;
  if(randomPipeOne !== null){
    return randomPipe1Display =  
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
              top: 150,
              width: 50,
              height: bottomHeight,
            }}></div>
          </div>
  }

  return (
      <div className="pipe-container">
        {/* <div className="pipes">
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
        </div> */}
          {randomPipeOne ? {randomPipe1Display} : null}
      </div>
  );
}

export default Pipes;
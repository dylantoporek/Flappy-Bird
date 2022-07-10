import React from "react"
import '../components/pipes.css'

function Pipes({obstaclesLeft}) {
  return (
      <div className="pipe-container">
        <div className="pipes">
          <div className="pipe-top" style={{

          }}></div>
          <div className="pipe-bottom" style={{
              position: "relative",
              left: obstaclesLeft,
              backgroundColor: 'black',
              width: 50,
              height: 100,
            }}></div>
        </div>
      </div>
  );
}

export default Pipes;
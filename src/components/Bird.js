import React from "react"

const Bird = ({birdBottom, birdLeft}) => {
  const birdWidth = 50
  const birdHeight = 50

  return (
      <div id='bird' style={{
          position: 'absolute',
          backgroundColor: 'blue',
          width: birdWidth,
          height: birdHeight,
          borderRadius: "50%",
          left: birdLeft - (birdWidth/2),
          bottom: birdBottom - (birdHeight/2),
      }}></div>
  )
}

export default Bird
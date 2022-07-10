import React from "react"


function Bird({bird, setBird, ani}) {

  return (
    <div className="bird" style={{
        animation: ani ? "jump 1s forwards" : "fall 5s forwards",
        top: bird,

    }}>
      
    </div>
  );
}

export default Bird;
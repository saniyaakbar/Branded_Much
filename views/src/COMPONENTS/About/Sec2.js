import React, { useEffect, useRef, useState } from 'react'
import vid1 from '../../assets/video1.mp4'

function Sec2() {

    const vidRef = useRef();
    const [flag, setflag] = useState(false)
   const playVid  = (e) => {
    if(!flag){
        vidRef.current.play();
        setflag(true);
        e.target.innerText = "Pause"
       console.log(e)
    }
    else{
        vidRef.current.pause();
        setflag(false);
        e.target.innerText = "Play"
    }
   
   }

  return (
    <div className='sec2'>
        <div className='centerAlign'>
        <h2>What we do?</h2>
        <p>Branded Much is a place where ideas meet stories and stories meet trends. 
We are a team of Industry experts who have built start-ups from scratch and are here to help your business get its right social presence established and managed through impeccable communication, visionary designs, flawless management and creative strategies.
</p>
        <video ref={vidRef} id='vid1' src={vid1}></video>
        <button onClick={(e) => playVid(e)} id='vid1Play'>Play</button>
        </div>
    </div>
  )
}

export default Sec2
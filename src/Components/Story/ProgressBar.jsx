import React, { useEffect, useState } from 'react'
import './ProgressBar.css';

const ProgressBar = ({index,currentIndex,duration}) => {
    const [progress,setProgress]=useState(0);
    const isActive=index===currentIndex;

    useEffect(()=>{
   
      const interval=setInterval(()=>{
        setProgress((prevProgress)=>{
          if(prevProgress<100){
            return prevProgress+1;
          }
          clearInterval(interval);
          return prevProgress;
        })
        return()=>{
          clearInterval(interval);
        }
      },duration/100);
    },[duration,currentIndex])

    useEffect(()=>{
      setProgress(0);
    },[currentIndex])
    
  return (
    <div className={`progress-bar-container ${isActive?"active":""} `}>
      <div className={`${isActive?"progess-bar":""}`} style={{width:`${progress}%`}}>

      </div>
    </div>
  )
}

export default ProgressBar

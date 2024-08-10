
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'

const StoryViewerContainer=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  background-color:black;
`

const StoryImage=styled.img`
 max-height:80vh;
 object-fit:contain;
`

const Storyviewer = ({stories}) => {

    const [currentIndex,setCurrentIndex]=useState(0);
    const [activeIndex,setActiveIndex]=useState(0);

    const handleNextstory=()=>{
        if(currentIndex<stories?.length-1){
            setCurrentIndex(currentIndex+1);
        }else{
            setCurrentIndex(0);
        }
    }

    useEffect(()=>{
       const interval=setInterval(()=>{
         handleNextstory();
       },3000);
       return ()=>clearInterval(interval);
    },[currentIndex])

  return (
    <div className='w-full relative'>
      <StoryViewerContainer>
        <StoryImage  src={stories?.[currentIndex]?.image}/>
        <div className="absolute top-0 flex w-full">
           {stories?.map((item,index)=><ProgressBar key={index} index={index} currentIndex={currentIndex} duration={3000} />)}
        </div>
      </StoryViewerContainer>
    </div>
  )
}

export default Storyviewer

import React from 'react'
import { useNavigate } from 'react-router'

const StoryCircle = () => {
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate("/Story");
    }
  return (
    <div
     onClick={handleNavigate}
     className='flex flex-col cursor-pointer items-center'
    >
      <img 
      className='w-16 h-16 rounded-full'
      src="https://images.pexels.com/photos/19549925/pexels-photo-19549925/free-photo-of-blooming-white-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
      alt="" 
      />
      <p>username</p>
    </div>
  )
}

export default StoryCircle

import React from 'react'

const SuggesstionUserCard = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className="flex items-center">
        <img 
        className='w-9 h-9 rounded-full'
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
        alt="" 
        />
        <div className="ml-2">
            <p className="text-sm font-semibold">username</p>
            <p className="text-sm font-semibold opacity-70">Follows You</p>
        </div>
      </div>
      <p className="text-blue-700 text-sm font-semibold cursor-pointer">follow</p>
    </div>
  )
}

export default SuggesstionUserCard

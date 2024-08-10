import React from 'react'

const SearchUserCard = ({searchUser}) => {
  return (
    <div className='py-2 cursor-pointer'>
      <div className="flex items-center">
        <img 
         className='w-10 h-10 rounded-full'
         src={searchUser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }
         alt="" 
        />
        <div className="ml-2">
            <p>{searchUser?.name}</p>
            <p className="opacity-50">{searchUser?.username}</p>
        </div>
      </div>
    </div>
  )
}

export default SearchUserCard

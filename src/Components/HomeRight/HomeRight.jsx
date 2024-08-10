import React from 'react'
import SuggesstionUserCard from './SuggesstionUserCard'
import { useSelector } from 'react-redux'

const HomeRight = () => {
  const {user}=useSelector(selector=>selector);
  return (
    <div className='border p-10'>
      <div>
        <div className="flex justify-between">
            <div className='flex items-center'>
              <div>
                <img 
                className='w-12 h-12 rounded-full'
                src={user.reqUser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} 
                alt="" 
                />
              </div>
              <div className="ml-3">
                <p>{user.reqUser?.name || "Full Name"}</p>
                <p className='opacity-60'>{user.reqUser?.username || "@username" }</p>
              </div>
            </div>

            <div>
                <p className="text-green-800 font-bold py-1 px-2 rounded-md hover:bg-slate-100 cursor-pointer">switch</p>
            </div>

        </div>

        <div className='space-y-5 mt-16'>
           {[1,1,1,1,1].map(()=>(<SuggesstionUserCard/>))}
        </div>

      </div>
    </div>
  )
}

export default HomeRight

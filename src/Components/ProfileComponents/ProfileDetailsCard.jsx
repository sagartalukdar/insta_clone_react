import React from 'react'
import { TbCircleDashed } from 'react-icons/tb'
import { useNavigate } from 'react-router'

const ProfileDetailsCard = ({user,isSelfProfile,isFollowingProfileUser}) => {
  const navigate=useNavigate();
  const handleNavigateToEdit=()=>{
    navigate("/account/edit");
  }
  return (
    <div className='py-10'>
      <div className="flex items-center space-x-5">

        <div className="w-[38%]">
            <img 
            className='w-32 h-32 rounded-full' 
            src={user?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} 
            alt="" />
        </div>

        <div className="space-y-5">
           <div className="flex space-x-10 items-center">
            <p>{user?.username}</p>
            {isSelfProfile &&  <button onClick={handleNavigateToEdit}>Edit Profile</button>}
            {isFollowingProfileUser ? <p className='text-blue-500 font-bold'>You Follows</p> :  <TbCircleDashed size={"1.5rem"}/>}
           </div>

           <div className="flex space-x-10 items-center">
            <div>
                <span className='font-semibold mr-2'>10</span>
                <span>posts</span>
            </div>
            <div>
                <span className='font-semibold mr-2'>{user?.follower?.length}</span>
                <span>followers</span>
            </div>
            <div>
                <span className='font-semibold mr-2'>{user?.following?.length}</span>
                <span>followings</span>
            </div>
           </div>

           <div>
            <p className="font-semibold">{user?.name}</p>
            <p className="font-thin text-sm">
            {user?.bio || "Alyssa is a Toronto-based creative writer and Content Marketer at Later. If you can’t reach her, she’s probably glueing gems to her face, rollerskating, or thrifting. Keep up with her nonsense on Instagram – @alygagliardi."}
            </p>
           </div>
        </div>

      </div>
    </div>
  )
}

export default ProfileDetailsCard

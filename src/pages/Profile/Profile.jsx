import React, { useEffect } from 'react'
import ProfileDetailsCard from '../../Components/ProfileComponents/ProfileDetailsCard'
import { useParams } from 'react-router'
import ReqUserPostPart from '../../Components/ProfileComponents/ReqUserPostPart';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByUsername } from '../../Redux/User/Action';
import { isFollowing, isReqUser } from '../../Redux/Config/Jsfunctions';

const Profile = () => {
  const {user}=useSelector(selector=>selector);
  const {username}=useParams();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("token");

  const isSelfProfile=isReqUser(user.reqUser?.id , user.userByUsername?.id);
  const isFollowingProfileUser=isFollowing(user.reqUser,user.userByUsername);

  useEffect(()=>{
    if(username){
     const data={
       jwt:jwt,
       username:username
     }
     dispatch(getUserByUsername(data));
    }
  },[username])
  return (
    <div className='px-20'>

      <div>
       <ProfileDetailsCard user={isSelfProfile?user.reqUser:user.userByUsername} isSelfProfile={isSelfProfile} isFollowingProfileUser={isFollowingProfileUser}/>
      </div>

      <div>
       <ReqUserPostPart user={isSelfProfile?user.reqUser:user.userByUsername}/>
      </div>

    </div>
  )
}

export default Profile

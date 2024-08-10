import React, { useEffect, useState } from 'react'
import StoryCircle from '../../Components/Story/StoryCircle'
import '../../App.css'
import HomeRight from '../../Components/HomeRight/HomeRight'
import PostCard from '../../Components/Post/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { findHomePosts } from '../../Redux/Post/Action'

const HomePage = () => {
  const token=localStorage.getItem("token");
  const dispatch=useDispatch();
  const {user,post,comment}=useSelector(selector=>selector);
  const [userIds,setUserIds]=useState([]);

  useEffect(()=>{
   if(user.reqUser){
    const newIds=user.reqUser?.following.map((item)=>item.id) || [] ;
    setUserIds([user.reqUser?.id,...newIds]);
    console.log(userIds);
   }
  },[user.reqUser])

  useEffect(()=>{
    if(userIds.length>0 && token){
      const data={
        jwt:token,
        userIds:userIds
      }
      dispatch(findHomePosts(data));
    }
  },[userIds,post.createdPost,post.likedPost,post.unlikePost,post.savePost,post.unsavePost,comment.createdComment])

  return (
    <div>
      <div className="mt-10 flex w-[100%] justify-center">
        
        <div className="w-[50%] px-10">
          
           <div className="scroll-hide flex space-x-5 border p-4 rounded-md justify-start w-full overflow-x-scroll">
             {[1,1,1,1,1,1,1].map(()=><StoryCircle/>)}
           </div>

           <div className='space-y-10 mt-10 w-full'> 
             {post.homePosts.length>0 && post.homePosts.map((item,index)=><PostCard item={item} key={index}/>)}
           </div>

        </div>

        <div className="w-[35%]">
           <HomeRight/>
        </div>

      </div>
    </div>
  )
}

export default HomePage

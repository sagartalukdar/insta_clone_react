import React, { useEffect, useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { LuBookMarked } from 'react-icons/lu'
import { RiVideoAddLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import ReqUserPostCard from './ReqUserPostCard'
import { getAllPostsByUserId } from '../../Redux/Post/Action'

const ReqUserPostPart = ({user}) => {
    const [activeTab,setActiveTab]=useState("Post");
    const dispatch=useDispatch();
    const {post}=useSelector(selector=>selector);
    const jwt=localStorage.getItem("token");
    const tabs=[
        {
            tabName:"Post",
            icon:<AiOutlineTable/>
        },
        {
            tabName:"Reels",
            icon:<RiVideoAddLine/>
        },
        {
            tabName:"Saved",
            icon:<LuBookMarked/>
        },
        {
            tabName:"Tagged",
            icon:<AiOutlineUser/>
        }
    ]
    useEffect(()=>{
      if(user){
        const data={
          jwt:jwt,
          userId:user?.id
        }
        dispatch(getAllPostsByUserId(data));
      }
    },[user])
  return (
    <div>
      <div className="flex space-x-14 border-t">
        {tabs.map((item)=>(
            <div 
            onClick={()=>setActiveTab(item.tabName)}
            className={`${activeTab===item.tabName? "border-t border-black font-semibold":"opacity-50"} flex items-center cursor-pointer py-2 text-sm`}>
              <p>{item.icon}</p>
              <p className='ml-2'>{item.tabName}</p>
            </div>
        ))}
      </div>
      <div>
        <div className='flex flex-wrap'>
           {activeTab==="Post" && post.allPostsByUserId?.map((item)=><ReqUserPostCard postObj={item} />)}
        </div>
      </div>
    </div>
  )
}

export default ReqUserPostPart

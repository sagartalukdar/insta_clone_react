import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import './Post.css';
import { useDisclosure } from '@chakra-ui/react';
import CommentModal from '../Comment/CommentModal';
import { useDispatch, useSelector } from 'react-redux';
import { likePostAction, savePostAction, unlikePostAction, unSavePostAction } from '../../Redux/Post/Action';
import { isPostLiked, isPostSaved, timeOfference } from '../../Redux/Config/Jsfunctions';
import { useNavigate } from 'react-router';

const PostCard = ({item}) => {
  const [showDropDown,setShowDropDown]=useState(false);
  const [isLikePost,setIsLikePost]=useState(false);
  const [isSavePost,setIsSavePost]=useState(false);
  const jwt=localStorage.getItem("token");
  const dispatch=useDispatch();
  const {user,post}=useSelector(selector=>selector);

  const navigate=useNavigate();

  const data={jwt:jwt,postId:item.id};

  const {isOpen,onOpen,onClose}=useDisclosure();

  const handleShowdropDown=()=>{
    setShowDropDown(!showDropDown);
  }

  const handleLikePost=()=>{
    dispatch(likePostAction(data));
  }
  const handleUnLikePost=()=>{
    dispatch(unlikePostAction(data));
  }

  const handleSavePost=()=>{
    setIsSavePost(true);
    dispatch(savePostAction(data));
  }

  const handleUnSavePost=()=>{
    setIsSavePost(false);
    dispatch(unSavePostAction(data));
  }

  const handleOpenCommentModal=()=>{
    navigate(`/post/${item?.id}`);
    onOpen();
  }

  useEffect(()=>{
    setIsLikePost(isPostLiked(item,user.reqUser?.id));
    setIsSavePost(isPostSaved(user.reqUser,item.id));
  },[item,user.reqUser])

  return (
    <div>
      <div className='border rounded-md w-full'>
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center">
            <img 
            className='w-12 h-12 rounded-full'
            src={item.user?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} 
            alt="" 
            />
            <div className='ml-2'>
               <p className="font-semibold text-sm">{item.user?.name}</p>
               <p className="font-semibold text-sm opacity-60">{timeOfference(item?.createdAt)}</p>
            </div>
          </div>

          <div className="dropDown">
            <BsThreeDots className='dot' onClick={handleShowdropDown}/>
            <div className="dropDownContent">
              {showDropDown && <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">delete</p> }
            </div>
          </div>
        </div>

        <div className="px-5 py-2 flex justify-start w-full">
           <p className="w-full">{item.caption}</p>
        </div>

        <div className="w-full">
          <img 
          className='w-full max-h-96'
          src={item.image} 
          alt="" 
          />
        </div>

        <div className='flex justify-between items-center w-full px-5 py-4'>
          <div className="flex items-center space-x-4">
            {isLikePost?<AiFillHeart className='text-red-500 text-2xl cursor-pointer' onClick={handleUnLikePost}/>:
            <AiOutlineHeart className='text-red-500 text-2xl cursor-pointer' onClick={handleLikePost}/>}
            
            <FaRegComment 
            className='text-xl hover:opacity-50 cursor-pointer'
            onClick={handleOpenCommentModal}
            />
            <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
          </div>

          <div className='cursor-pointer'>
            {isSavePost?<BsBookmarkFill className='text-xl hover:opacity-50 contain-paint' onClick={handleUnSavePost}/>:
            <BsBookmark className='text-xl hover:opacity-50 contain-paint' onClick={handleSavePost}/>
            }
          </div>
        </div>

        <div className="w-full px-5 py-2">
          {item?.likedByUsers.length>0 && <p>{item?.likedByUsers?.length} likes</p>}
          {item?.comments.length>0 && <p className="py-2 opacity-70 hover:font-semibold cursor-pointer">view {item?.comments?.length} comments</p>}
        </div>

        <div className="w-full border border-t">
          <div className="flex items-center w-full px-5">
            <BsEmojiSmile/>
            <input type="text" className="commentInput" placeholder='add comment here'/>
          </div>
        </div>

      </div>

      <CommentModal 
      isOpen={isOpen} 
      onClose={onClose}
      handleLikePost={handleLikePost}
      handleUnLikePost={handleUnLikePost}
      handleSavePost={handleSavePost}
      handleUnSavePost={handleUnSavePost}
      isLikePost={isLikePost}
      isSavePost={isSavePost}
      postItem={item}
      />

    </div>
  )
}

export default PostCard

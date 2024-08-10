import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { likeCommentAction, unlikeCommentAction } from '../../Redux/Comment/Action';
import { isCommentLikedByUser, timeOfference } from '../../Redux/Config/Jsfunctions';

const CommentCard = ({item}) => {
  const dispatch=useDispatch();
  const {comment,user}=useSelector(selector=>selector);

  const jwt=localStorage.getItem("token");
  const [isCommentLiked,setIsCommentLiked]=useState(false);

  const data={jwt,commentId:item?.id}

  const handleCommentLike=()=>{
    // setIsCommentLiked(true);
    dispatch(likeCommentAction(data));
  }

  const handleCommentDislike=()=>{
    // setIsCommentLiked(false);
    dispatch(unlikeCommentAction(data));
  }

  useEffect(()=>{
    if(item && user.reqUser){
      setIsCommentLiked(isCommentLikedByUser(item,user.reqUser?.id));
    }
  },[item,user.reqUser, comment.likedComment])

  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center">
            <div className="mr-2">
                <img 
                className='w-9 h-9 rounded-full'
                src={item?.user?.image || "http://res.cloudinary.com/dj2wdfbxm/image/upload/v1721552125/zs5qnhlcrsmj3lpullkq.jpg" }
                alt="" 
                />
            </div>
            <div>
                <p>
                    <span className='font-semibold'>{item?.user?.name}</span>
                    <span className='ml-2 text-sm'>{item?.content}</span>
                </p>
                <div className="flex items-center space-x-3 text-xs opacity-80 pt-1">
                   <span>{timeOfference(item.createdAt)}</span>
                   <span>{item.likedByUsers?.length} likes</span>
                </div>
            </div>
        </div>

        {!isCommentLiked ? <AiOutlineHeart className='text-sm hover:opacity-50 cursor-pointer text-red-600' onClick={handleCommentLike}/>
        : <AiFillHeart className='text-sm hover:opacity-50 cursor-pointer text-red-600' onClick={handleCommentDislike} />
        }
      </div>
    </div>
  )
}

export default CommentCard

import { Input, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import './Comment.css';
import CommentCard from './CommentCard';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../Redux/Comment/Action';
import { findPostByPostId } from '../../Redux/Post/Action';
import { useParams } from 'react-router';
import { timeOfference } from '../../Redux/Config/Jsfunctions';

const CommentModal = 
({isOpen,
  onClose,
  postItem,
  handleLikePost,
  handleUnLikePost,
  handleSavePost,
  handleUnSavePost,
  isLikePost,
  isSavePost
}) => {

  const {postId}=useParams();

  const [content,setContent]=useState("");
  const jwt=localStorage.getItem("token");
  const dispatch=useDispatch();
  const {post,comment}=useSelector(selector=>selector);

  useEffect(()=>{
    if(postId){
      const data={
        jwt:jwt,
        postId:postId
      }
      dispatch(findPostByPostId(data));
    }
  },[postId,comment.createdComment,comment.likedComment,comment.unlikedComment])

  return (
    <div>
      <Modal 
       size={"4xl"}
       isCentered
       isOpen={isOpen}
       onClose={onClose}
      >
        <ModalOverlay/>
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh]">
              <div className="w-[45%] flex flex-col justify-center items-center">
                <img 
                className='w-full max-h-full'
                src={postItem?.image}
                alt="" 
                />
              </div>
              <div className="w-[55%] pl-10 relative">
                <div className="flex justify-between py-5">
                  <div className="flex items-center">
                    <div>
                      <img 
                      className='w-9 h-9 rounded-full'
                      src={postItem?.user?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }
                      alt="" 
                      />
                    </div>
                    <div className='ml-3'>
                      <p>{postItem?.user?.name}</p>
                    </div>
                  </div>
                  <BsThreeDots/>
                </div>
                
                <hr />

                <div className='comment w-full'>
                  {post?.postByPostId?.comments?.map((item)=><CommentCard item={item} />)}
                </div>

                <div className="absolute bottom-2 w-[90%]">
                  
                  <div className="flex justify-between items-center w-full py-4">
                    <div className="flex items-center space-x-4">

                      {isLikePost ? <AiFillHeart className='text-2xl text-red-500 cursor-pointer' onClick={handleUnLikePost} />
                      : <AiOutlineHeart className='text-2xl text-red-500 cursor-pointer' onClick={handleLikePost}/>}

                      <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
                    </div>
                    <div>
                      {isSavePost?  <BsBookmarkFill onClick={handleUnSavePost}/>
                      : <BsBookmark onClick={handleSavePost}/>
                      }
                    </div>
                  </div>

                  <div className='w-full py-2'>
                    {postItem?.likedByUsers.length>0 && <p>{postItem?.likedByUsers?.length} likes</p>}
                    <p className='opacity-60 text-sm'>{timeOfference(post?.postByPostId?.createdAt)}</p>
                  </div>

                  <div className="w-full border border-t px-3">
                    <div className="flex items-center w-full">
                      <BsEmojiSmile/>
                      <input
                       className='commentInput'
                       type='text'
                       placeholder='add a comment'
                       onChange={(e)=>setContent(e.target.value)}
                       onKeyPress={(e)=>{
                        if(e.key==="Enter" && e.target.value){
                          const data={
                            jwt:jwt,
                            postId:postItem?.id,
                            data:{
                              content
                            }
                          }
                          dispatch(createComment(data));
                          e.target.value=null
                        }
                       }}
                      />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentModal

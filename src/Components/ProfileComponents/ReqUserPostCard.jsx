import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import './ReqUserPostCard.css';

const ReqUserPostCard = ({postObj}) => {
  return (
    <div className='p-0.5'>
      <div className="post w-60 h-60">
            <img
            className='cursor-pointer'
            src={postObj?.image || 
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrcZeZJkz0_ds5qZUrnVk0MNSrOvAZ-2LiTZ1WUYnrhRc-N4HOILWRIM74w&s"
            }
            alt=""
          />
        <div className="overlay">
            <div className="overlay-text flex justify-between">
                <div>
                    <AiFillHeart/>
                    <span>22</span>
                </div>
                <div>
                    <FaComment/>
                    <span>36</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ReqUserPostCard

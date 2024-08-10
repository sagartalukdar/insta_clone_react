import { Button, Modal, ModalBody, ModalContent, ModalOverlay, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPhotoVideo } from 'react-icons/fa'
import './CreatePostModal.css';
import { GrEmoji } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import { uploadToCloudinary } from '../../Redux/Config/UploadtoCloudinary';
import { useDispatch, useSelector } from 'react-redux';
import { createPostAction } from '../../Redux/Post/Action';

const CreatePostModal = ({isOpen,onClose}) => {
    const [caption,setCaption]=useState("");
    const [location,setLocation]=useState("");
    const [file,setFile]=useState();
    const [imgUrl,setImgUrl]=useState("");
    const [isDragOver,setIsDragOver]=useState(false);
    const token=localStorage.getItem("token");
    const dispatch=useDispatch();
    const {user}=useSelector(selector=>selector);

    const toast=useToast();

    const handleCaptionChange=(e)=>{
        setCaption(e.target.value);
    }

    const handleWriteLocation=(e)=>{
       setLocation(e.target.value);
    }

    const handleDragOver=(event)=>{
     event.preventDefault();
     event.dataTransfer.dropEffect="copy";
     setIsDragOver(true);
    }

    const handleDragLeave=()=>{
        setIsDragOver(false);
    }

    const handleDrop=async(event)=>{
      event.preventDefault();  
      const droppedFile=event.dataTransfer.files[0];
      if(droppedFile.type.startsWith('image/')||droppedFile.type.startsWith('video/')){
        setFile(droppedFile);
        const imgurl=await uploadToCloudinary(droppedFile);
        setImgUrl(imgurl);
        toast({
          title:'image uploaded',
          status:"success",
          isClosable:true,
          duration:3000
        })
      }
      
    }

    const handleImageSelect=async(e)=>{
      const selectedFile=e.target.files[0];
      if(selectedFile.type.startsWith("image/")|| selectedFile.startsWith('video/')){
        setFile(selectedFile);
        const imgUrl=await uploadToCloudinary(selectedFile);
        setImgUrl(imgUrl);
        toast({
          title:'image uploaded',
          status:"success",
          isClosable:true,
          duration:3000
        })
      }else{
        setFile(null);
        alert("please select any image of video only");
      }
    }

    const handleCreatePost=()=>{
      const data={
        jwt:token,
        data:{
          caption,
          location,
          image:imgUrl
        }
      }
      dispatch(createPostAction(data));
      setFile(null);
      setImgUrl("");
      onClose();
    }

  return (
    <div>
      <Modal
       size={"4xl"}
       isOpen={isOpen}
       onClose={onClose}
       isCentered
      >
        <ModalOverlay/>
        <ModalContent>
            <div className="flex justify-between py-1 px-10 items-center">
               <p>create new post</p>
               <Button
                variant={"ghost"}
                size={"sm"}
                colorScheme='blue'
                onClick={handleCreatePost}
               >
                Share
               </Button>
            </div>
            <hr />
            <ModalBody>
                <div className="h-[70vh] justify-between pb-5 flex">
                  <div className="w-[50%] h-full border-r-2">
                    {!file && 
                    <div 
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className='drag-drop h-full'>
                      <div className='flex flex-col items-center'>
                        <FaPhotoVideo className='text-3xl'/>
                        <p>Drag Photo or Video Here.</p>
                      </div>
                      <label htmlFor="file-upload" className='custom-file-upload'>Select from Computer</label>
                      <input type="file" onChange={handleImageSelect} id='file-upload' accept='image/*,video/*'/>
                    </div>}

                    {file && 
                    <img
                     className='max-h-full w-full'
                     src={URL.createObjectURL(file)}
                    />}
                  </div>

                  <div className="w-[50%] h-full">
                    <div className="flex items-center px-2">
                        <img 
                        className='w-7 h-7 rounded-full'
                        src={user.reqUser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} 
                        alt="" 
                        />
                        <p className='font-semibold ml-4'>{user.reqUser?.name || "username"}</p>
                    </div>
                    <div className="">
                        <textarea
                         placeholder='write a caption'
                         className='captionInput px-2'
                         rows={8}    
                         onChange={handleCaptionChange}                     
                        />
                    </div>
                    <div className="flex justify-between px-2 items-center py-3">
                        <GrEmoji/>
                        <p className="opacity-60">{caption?.length}/2,000</p>
                    </div>
                    <hr />
                    <div className="flex justify-between px-2 items-center py-3">
                        <input 
                        className='locationInput'
                        type="text" 
                        placeholder='add location'   
                        onChange={handleWriteLocation}                     
                        />
                        <GoLocation/>
                    </div>
                  </div>

                </div>
            </ModalBody>
        </ModalContent>

      </Modal>

      
    </div>
  )
}

export default CreatePostModal

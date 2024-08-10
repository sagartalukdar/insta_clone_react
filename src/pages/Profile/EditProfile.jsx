import { Button, FormControl, FormHelperText, FormLabel, Input, Stack, Textarea, Toast, useDisclosure, useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditProfileModal from '../../Components/ProfileComponents/EditProfileModal'
import { uploadToCloudinary } from '../../Redux/Config/UploadtoCloudinary'
import { updateUserAction } from '../../Redux/User/Action'

const EditProfile = () => {
  const {user}=useSelector(selector=>selector);
  const dispatch =useDispatch();
  const jwt=localStorage.getItem("token");
  const toast=useToast();

  const [imageFile,setImageFile]=useState("");

  const {isOpen,onOpen,onClose}=useDisclosure();

  const handleProfileImageChange=async(e)=>{
     const file=e.target.files[0];
     if(file){
      const imgUrl=await uploadToCloudinary(file);
      setImageFile(imgUrl);     

      const data={
        jwt:jwt,
        data:{image:imageFile,id:user.reqUser?.id}
      }

      console.log(data);

      dispatch(updateUserAction(data));
      onClose();
      toast({
        title:"Profile Photo Changed",
        status:"info",
        duration:5000,
        isClosable:true
      })
     }
  }

  const removeProfilePhoto=()=>{
    setImageFile("");
    onClose();
  }

  const [initialValue,setInitialValues]=useState({
    name:"",
    username:"",
    email:"",
    bio:"",
    website:"",
    mobile:"",
    gender:""
  })

  const formik=useFormik({
    initialValues:{...initialValue},
    onSubmit:(values)=>{
      const data={
        jwt:jwt,
        data:{...values,id:user.reqUser?.id}
      }
      console.log(data);
      dispatch(updateUserAction(data));
      toast({
        title:`${user.reqUser?.username} updated`,
        status:'success',
        duration:5000,
        isClosable:true
      })
    }

  })

  useEffect(()=>{
    if(user.reqUser){
      const newValues={};
      for(let item in initialValue){
        if(user.reqUser[item]){
          newValues[item]=user.reqUser[item];
        }
      }
      formik.setValues(newValues);
    }
  },[user.reqUser])

  return (
    <div className='rounded-md border p-10 lg:px-40'>
      <div className="flex pb-6 items-center">
        <div className="w-[15%]">
            <img 
            className='w-8 h-8 rounded-full'
            src=
            {
              imageFile ||
              user.reqUser?.image ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
            }
            alt="" 
            />
        </div>
        <div>
          <p>username</p>
          <p 
          onClick={()=>onOpen()}
          className="font-bold text-blue-500 cursor-pointer">
            change profile photo
          </p>
        </div>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={6}>
          <FormControl className='flex' id='name'>
            <FormLabel className='w-[15%]'>Name</FormLabel>
            <div className="w-full">
              <Input
                className='w-full'
                placeholder='Name'
                type='text'
                {...formik.getFieldProps("name")}
              />
              <FormHelperText className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, error sapiente ipsum libero unde consequuntur omnis necessitatibus repellat illum quod mollitia corrupti et.</FormHelperText>
              <FormHelperText className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nihil itaque id.</FormHelperText>
            </div>
          </FormControl>

          <FormControl className='flex' id='username'>
            <FormLabel className='w-[15%]'>Username</FormLabel>
            <div className="w-full">
              <Input
               className='w-full'
               type='text'
               placeholder='username'
               {...formik.getFieldProps('username')}
              />
              <FormHelperText
               className='text-xs w-full'
              >
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, molestiae! Consequatur, in?
              </FormHelperText>
            </div>
          </FormControl>

          <FormControl className='flex' id='website'>
            <FormLabel className='w-[15%]'>Website</FormLabel>
            <div className="w-full">
              <Input
               className='w-full'
               type='text'
               placeholder='Website'
               {...formik.getFieldProps('website')}
              />
              <FormHelperText className='text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non sunt dolor deleniti et labore necessitatibus nobis quo deserunt. Tempore, doloribus!
              </FormHelperText>
            </div>
          </FormControl>

          <FormControl className='flex' id='bio'>
            <FormLabel className='w-[15%]'>Bio</FormLabel>
            <div className="w-full">
              <Textarea
                className='w-full'
                rows={5}
                resize={'none'}
                type='text'
                placeholder='bio'
                {...formik.getFieldProps('bio')}
              />
            </div>
          </FormControl>

          <div className="py-10">
            <p className="text-sm font-bold">Personal Information</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, reiciendis necessitatibus, repellat ullam optio iusto omnis dolorum, fugiat voluptas incidunt perspiciatis eum debitis enim quaerat.
            </p>
          </div>

          <FormControl className='flex' id='email'>
            <FormLabel className='w-[15%]'>Email Address </FormLabel>
            <div className="w-full">
              <Input
                className='w-full'
                type='email'
                placeholder='email address'
                {...formik.getFieldProps('email')}
              />
            </div>
          </FormControl>

          <FormControl className='flex' id='mobile'>
             <FormLabel className='w-[15%]'>Mobile No.</FormLabel>
             <div className="w-full">
              <Input
               className='w-full'
               placeholder='Mobile Number'
               type='tel'
               {...formik.getFieldProps('mobile')}
              />
             </div>
          </FormControl>

          <FormControl className='flex' id='gender'>
            <FormLabel className='w-[15%]'>Gender</FormLabel>
            <div className="w-full">
              <Input
                className='w-full'
                placeholder='gender'
                type='text'
                {...formik.getFieldProps('gender')}
              />
            </div>
          </FormControl>

          <div>
            <Button colorScheme='blue' type='submit'>
              Edit
            </Button>
          </div>

        </Stack>
      </form>

      <EditProfileModal isOpen={isOpen} onClose={onClose} handleProfileImageChange={handleProfileImageChange} removeProfilePhoto={removeProfilePhoto}/>

    </div>
  )
}

export default EditProfile

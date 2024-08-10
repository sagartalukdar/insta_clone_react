import { Box, Button, FormControl, FormErrorMessage, Input, useToast } from '@chakra-ui/react'
import { Field, Form, Formik, validateYupSchema, } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import * as Yup from "yup";
import { signUpAction } from '../../Redux/Auth/Action';

const Register = () => {
  const location=useLocation();
  const dispatch=useDispatch();
  const {auth}=useSelector(selector=>selector);
  const navigate=useNavigate();
  const toast=useToast();

  const navigateLogin=()=>{
    navigate("/login");
  }

  const initialValues={
    email:"",
    password:"",
    username:"",
    name:""
  }
  const validationSchema=Yup.object().shape({
    email:Yup.string().email("invalid email").required("email is required"),
    password:Yup.string().min(4,"password must be atleast 4 character").required("password is required")
  })
  const handleSubmit=(value,action)=>{
   console.log(value);
   dispatch(signUpAction(value));
   action.setSubmitting(false);
  }

  useEffect(()=>{
    if(auth.signUp?.username){
      navigate("/login");
      toast({
        title: `Account created ${auth.signUp?.username}`,
        status:'success',
        duration:5000,
        isClosable:true
      })
    }
  },[auth.signUp])

  return (
    <div>
      <div className="border border-slate-400">
        <Box
         p={8}
         display={'flex'}
         flexDirection={'column'}
         alignItems={'center'}
        >
          <img 
          className='mb-5'
          src="https://i.imgur.com/zqpwkLQ.png"
          alt="" 
          />
          <Formik
           initialValues={initialValues}
           validationSchema={validationSchema}
           onSubmit={handleSubmit}
          >
           {(formikProps)=>
            <Form
             className='space-y-8'
            >
             <Field name="email">
              {({field,form})=>(
                <FormControl
                 isInvalid={form.errors.email && form.touched.email}
                >
                <Input className='w-full' {...field} placeholder='enter email address'/>
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}           
             </Field>
             <Field name="password">
               {({field,form})=>(
                <FormControl
                 isInvalid={form.errors.password && form.touched.password}
                >
                 <Input className='w-full' {...field} placeholder='enter a password '/>
                 <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
               )}
             </Field>
             <Field name="username">
              {({field,form})=>(
                <FormControl
                 isInvalid={form.errors.username && form.touched.username}
                >
                 <Input className='w-full' {...field} placeholder='enter username'/>
                 <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
             </Field>
             <Field name="name">
              {({field,form})=>(
                <FormControl 
                 isInvalid={form.errors.name && form.touched.name}
                >
                  <Input className='w-full' {...field} placeholder='enter full name'/>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
             </Field>
             <p className="text-center text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis placeat delectus quo!</p>
             <Button
              className='w-full'
              colorScheme='blue'
              mt={4}
              type='submit'
              isLoading={formikProps.isSubmitting}
             >
              Register
             </Button>
            </Form>
           }
          </Formik>
        </Box>
      </div>
      <div className='border border-slate-400 mt-5 w-full'>
         <p className="w-full py-2 text-center text-sm">already have an account? <span onClick={navigateLogin} className='ml-2 text-blue-500 cursor-pointer'>Login</span></p>
      </div>
    </div>
  )
}

export default Register

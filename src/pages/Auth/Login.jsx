import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import * as Yup from 'yup';
import { signInAction } from '../../Redux/Auth/Action'
import { getUserByJwt } from '../../Redux/User/Action'

const validationSchema=Yup.object().shape({
  email:Yup.string().email("invalid email address").required("email is required"),
  password:Yup.string().min(4,"password must be atleast 4 characters").required("password is required")
})

const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {user} =useSelector(selector=>selector);

  const navigateRegister=()=>{
    navigate("/register");
  }
  
  const jwt=localStorage.getItem("token");
  useEffect(()=>{
    if(jwt){
     dispatch(getUserByJwt(jwt));
    }
  },[jwt])

  useEffect(()=>{
    if(user.reqUser){
      navigate(`/${user.reqUser?.username}`);
    }
  },[jwt,user.reqUser])

  const initialValues={
    email:"",
    password:""
  }

  const handleSubmit=(values,action)=>{
    console.log(values);
    dispatch(signInAction(values));
    action.setSubmitting(false);
  }

  return (
    <div>
      <div className='border border-slate-300'>
        <Box p={8} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <img
           className='mb-5'
           src="https://i.imgur.com/zqpwkLQ.png" 
           alt='intagram'
          />
          <Formik
           initialValues={initialValues}
           validationSchema={validationSchema}
           onSubmit={handleSubmit}
          >
            {(formikProps)=>
             <Form className='space-y-8'>
              <Field name="email">
                {({field,form})=>(
                  <FormControl
                   isInvalid={form.errors.email && form.touched.email}
                  >
                    <Input className='w-full' {...field} placeholder='enter registered email'/>
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({field,form})=>(
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <Input className='w-full' {...field} placeholder='enter registered password'/>
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime?</p>
              <Button
               className='w-full'
               mt={4}
               colorScheme='blue'
               type='submit'
               isLoading={formikProps.isSubmitting}
              >
                Login
              </Button>
             </Form>
            }
          </Formik>
        </Box>
      </div>
      <div className="border border-slate-400 mt-5">
        <p className="w-full py-2 text-center text-sm">Don't have an account <span onClick={navigateRegister} className='ml-2 text-blue-400 cursor-pointer'>Register</span></p>
      </div>
    </div>
  )
}

export default Login

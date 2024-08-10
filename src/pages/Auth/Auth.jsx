import React from 'react'
import { useLocation } from 'react-router'
import './Auth.css';
import Login from './Login';
import Register from './Register';

const Auth = () => {
    const location=useLocation();
  return (
    <div>
      <div className='flex items-center justify-center h-[100vh] space-x-5'>

        <div className=" relative hidden lg:block">
            <div className=" h-[35.3rem] w-[23rem]">
              <img 
                className='h-full w-full'
                src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW " 
                alt="" 
              />
              <div className='mobile-wallpaper h-[40rem] w-[12.7rem] absolute top-28 right-11'> </div>
            </div>
        </div>

        <div>
          <div className='w-[50vw] lg:w-[30vw]'>
            {location.pathname==="/login"?<Login/>:<Register/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth

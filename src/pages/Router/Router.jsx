import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import Auth from '../Auth/Auth';
import Sidebar from '../../Components/Sidebar/Sidebar';
import HomePage from '../HomePage/HomePage';
import Profile from '../Profile/Profile';
import EditProfile from '../Profile/EditProfile';
import Story from '../Story/Story';

const Router = () => {
    const location=useLocation(); 
    const navigate=useNavigate();
    const token=localStorage.getItem('token');

    useEffect(()=>{      
      if(!token){
        navigate('/login');
      }
    },[!token]);

  return (
    <div>

    {(location.pathname!=="/login" && location.pathname!=="/register")?
      (<div className='flex'>

        <div className='w-[20%] border border-slate-200'>
          <Sidebar/>
        </div>

        <div className='w-full'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/Create' element={<HomePage/>}/>
            <Route path='/Search' element={<HomePage/>}/>
            <Route path='/:username' element={<Profile/>} />
            <Route path='/account/edit' element={<EditProfile/>} />
            <Route path='/post/:postId' element={<HomePage/>}/>
            <Route path='/Story' element={<Story/>}/>
          </Routes>
        </div>

      </div>)
      :
      (<div>
      <Routes>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth/>}/>
      </Routes>
      </div>)
    }  

    </div>
  )
}

export default Router

import React, { useState } from 'react'
import { IoReorderThree } from 'react-icons/io5'
import { menu } from './SidebarConfig'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import SearchComponent from './SearchComponent/SearchComponent'
import { useDisclosure } from '@chakra-ui/react'
import CreatePostModal from '../Post/CreatePostModal'

const Sidebar = () => {
  const navigate=useNavigate();
  const [activeState,setActiveState]=useState();
  const {user}=useSelector(selector=>selector);
  const [searchVisible,setSearchVisible]=useState(false);

  const {isOpen,onOpen,onClose}=useDisclosure();

  const handleTabClick=(title)=>{
    setActiveState(title);
    if(title==="Home"){
      navigate("/");
    }else if(title==="Profile"){
      navigate(`/${user.reqUser?.username}`);
    }
    else if(title==="Create"){
      navigate("/Create");
      onOpen();
    }
    else{
      navigate(title);
    }

    if(title==="Search"){
      setSearchVisible(true);
    }else setSearchVisible(false);
  }
  return (
    <div className='sticky top-0 h-[100vh] flex'>
      <div className={`flex flex-col justify-between items-start h-full ${activeState==="Search"?"px-2":"px-10"}`}>

        <div>
          {activeState!=="Search" && 
            <div className='pt-10'>
              <img className='w-40' src="https://i.imgur.com/zqpwkLQ.png" alt="" />
            </div>
          }
          <div>
            <div className='mt-10'>
              {menu.map((item)=>(
                <div onClick={()=>handleTabClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
                  <span className='text-2xl'>{activeState===item.title?item.activeIcon:item.icon}</span>
                  {activeState!=="Search" &&  <span className={`${item.title===activeState?"font-bold":"font-semibold"} ml-5`}>{item.title}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className='flex items-start cursor-pointer pb-10'>
            <IoReorderThree className='text-2xl'></IoReorderThree>
            {activeState!=="Search" && <p className="ml-5">more</p>}
          </div>
        </div>

      </div>

      
      {searchVisible && <SearchComponent/>}

      <CreatePostModal
       isOpen={isOpen}
       onClose={onClose}
      />

    </div>
  )
}

export default Sidebar

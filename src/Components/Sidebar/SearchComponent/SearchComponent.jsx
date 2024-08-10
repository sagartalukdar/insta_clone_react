import React, { useEffect } from 'react'
import './SearchComponent.css';
import SearchUserCard from './SearchUserCard';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsersAction } from '../../../Redux/User/Action';

const SearchComponent = () => {
  const dispatch=useDispatch();
  const {user}=useSelector(selector=>selector);
  const jwt=localStorage.getItem("token");

  const handleSearch=(e)=>{
    if(e.target.value!==null){
      const data={
        jwt:jwt,
        query:e.target.value
      }
      dispatch(searchUsersAction(data));
    }
  }

  useEffect(()=>{
    {user.searchUsers=[]}
  },[])

  return (
    <div className='searchContainer'>
        <div className="px-3 pb-5">
            <h1 className="text-xl pb-5 font-bold">Search</h1>
            <input className='searchInput' type="text" placeholder='Search here ' onChange={handleSearch}/>
        </div>
        <hr />
        <div className='px-3 py-2'>
          {user.searchUsers.length>0 &&
           (user.searchUsers?.map((item)=><SearchUserCard searchUser={item} />))

          }
        </div>
    </div>
  )
}

export default SearchComponent

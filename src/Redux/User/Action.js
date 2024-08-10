import { BASE_URL } from "../Config/Util";
import { FIND_USER_BY_USERNAME, REQ_USER, SEARCH_USER, SEARCH_USER_ERROR, UPDATE_USER } from "./ActionType";

export const getUserByJwt=(jwt)=>async(dispatcher)=>{
    try {
        const res=await fetch("http://localhost:8080/api/users/req",
          {
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+jwt
            }
          }
        )
        const reqUer=await res.json();
        console.log(reqUer);
        dispatcher({type:REQ_USER,payload:reqUer});
    } catch (error) {
        console.log(error);
    }
}

export const updateUserAction=(data)=>async(dispatcher)=>{
 try {
  const res=await fetch(`${BASE_URL}/api/users/account/edit`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
      Authorization:"Bearer "+data.jwt
    },
    body:JSON.stringify(data.data)
  })
  const updatedUser=await res.json();
  dispatcher({type:UPDATE_USER,payload:updatedUser});
 } catch (error) {   
  console.log(error);
 }
}

export const getUserByUsername=(data)=>async(dispatcher)=>{
  try {
    const res=await fetch(`${BASE_URL}/api/users/username/${data.username}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        Authorization:"Bearer "+data.jwt
      }
    })
    const userByUsername=await res.json();
    console.log("find by username :"+userByUsername.username);
    dispatcher({type:FIND_USER_BY_USERNAME,payload:userByUsername})
  } catch (error) {
    console.log(error);
  }
}

export const searchUsersAction=(data)=>async(dispatcher)=>{
  try {
    const res=await fetch (`${BASE_URL}/api/users/search?q=${data.query}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        Authorization:"Bearer "+data.jwt
      }
    })
    const users=await res.json();
    console.log(users);
    dispatcher({type:SEARCH_USER,payload:users});
  } catch (error) {
    console.log(error);
    dispatcher({type:SEARCH_USER_ERROR,payload:[]});
  }
}
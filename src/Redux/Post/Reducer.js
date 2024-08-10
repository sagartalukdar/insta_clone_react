import { CREATE_NEW_POST, FIND_ALL_POSTS_BY_USERID, FIND_POST_bY_POSTID, GET_USERS_POSTS, LIKE_POST, SAVE_POST, UNLIKE_POST, UNSAVE_POST } from "./ActionType"

const initialState={
    createdPost:null,
    homePosts:[],
    allPostsByUserId:[],
    likedPost:null,
    unlikePost:null,
    savePost:"",
    unsavePost:"",
    postByPostId:null
}

export const PostReducer=(state=initialState,{type,payload})=>{
  if(type===CREATE_NEW_POST){
    return {...state,createdPost:payload}
  }
  else if(type===GET_USERS_POSTS){
    return {...state,homePosts:payload}
  }
  else if(type === FIND_ALL_POSTS_BY_USERID){
    return {...state,allPostsByUserId:payload}
  }
  else if(type===LIKE_POST){
    return {...state,likedPost:payload}
  }
  else if(type===UNLIKE_POST){
    return {...state,unlikePost:payload}
  }
  else if(type===SAVE_POST){
    return {...state,savePost:payload}
  }
  else if(type===UNSAVE_POST){
    return {...state,unsavePost:payload}
  }
  else if(type===FIND_POST_bY_POSTID){
    console.log("find by postid payload ");
    console.log(payload);
    return {...state,postByPostId:payload}
  }
  else{
    return state
  }
}
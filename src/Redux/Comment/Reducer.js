import { CREATE_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from "./ActionType"

const initialstate={
    createdComment:null,
    likedComment:null,
    unlikedComment:null
}

export const CommentReducer=(state=initialstate,{type,payload})=>{
  if(type===CREATE_COMMENT){
    return {...state,createdComment:payload}
  }
  else if(type===LIKE_COMMENT){
    return {...state,likedComment:payload}
  }
  else if(type===UNLIKE_COMMENT){
    return {...state,unlikedComment:payload}
  }
  else{
    return state;
  }
}
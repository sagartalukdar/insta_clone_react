import { FIND_USER_BY_USERNAME, REQ_USER, SEARCH_USER, SEARCH_USER_ERROR, UPDATE_USER } from "./ActionType"

const initialState={
    reqUser:null,
    updatedUser:null,
    userByUsername:null,
    searchUsers:[]
}

export const UserReducer=(state=initialState,{type,payload})=>{
    if(type===REQ_USER){
        return {...state,reqUser:payload};
    }
    else if(type===UPDATE_USER){
        return {...state,updatedUser:payload};
    }
    else if(type===FIND_USER_BY_USERNAME){
        return {...state,userByUsername:payload}
    }
    else if(type===SEARCH_USER){
        return {...state,searchUsers:payload}
    }
    else if(type===SEARCH_USER_ERROR){
        return {...state,searchUsers:payload}
    }
    else{
        return state;
    }
}
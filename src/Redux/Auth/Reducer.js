import { SIGN_IN, SIGN_UP } from "./ActionType"


const initialValues={
  signUp:null,
  signIn:null
}

export const AuthReducer=(state=initialValues,{type,payload})=>{
    if(type===SIGN_UP){
        return {...state,signUp:payload}
    }
    else if(type===SIGN_IN){
        return {...state,signIn:payload}
    }
    else{
        return state;
    }
}
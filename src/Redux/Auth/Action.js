import { SIGN_IN, SIGN_UP } from "./ActionType";


export const signUpAction=(data)=>async(dispatcher)=>{
    try {
        const res=await fetch('http://insta-clone-springboot-production.up.railway.app/signUp',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        const user=await res.json();
        dispatcher({type:SIGN_UP,payload:user});
        console.log("signUp user: "+user);
    } catch (error) {
        console.log(error);
    }
}

export const signInAction=(data)=>async(dispatcher)=>{
    try {
        const res=await fetch('http://localhost:8080/signIn',{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Basic "+btoa(data.email+":"+data.password)
            }
        })
        const token=res.headers.get('Authorization');
        localStorage.setItem("token",token);
        dispatcher({type:SIGN_IN,payload:token});
        console.log("login token : "+token);
    } catch (error) {
        console.log(error);
    }
}
import { BASE_URL } from "../Config/Util";
import { CREATE_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT } from "./ActionType";

export const createComment=(data)=>async(dispatcher)=>{
    try {
        const res=await fetch(`${BASE_URL}/api/comments/create/${data.postId}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.jwt
            },
            body:JSON.stringify(data.data)
        })
        const comment=await res.json();
        console.log(comment);
        dispatcher({type:CREATE_COMMENT,payload:comment});
    } catch (error) {
        console.log(error);
    }
}


export const likeCommentAction=(data)=>async(dispatcher)=>{
    try {
        const res=await fetch(`${BASE_URL}/api/comments/like/${data.commentId}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.jwt
            }
        })
        const likedComment=await res.json();
        console.log(likedComment);
        dispatcher({type:LIKE_COMMENT,payload:likedComment});
    } catch (error) {
        console.log(error);
    }
}

export const unlikeCommentAction=(data)=>async(dispatcher)=>{
    try {
        const res=await fetch(`${BASE_URL}/api/comments/unlike/${data.commentId}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.jwt
            }
        })
        const unlikedComment=await res.json();
        console.log(unlikedComment);
        dispatcher({type:UNLIKE_COMMENT,payload:unlikedComment});
    } catch (error) {
        console.log(error);
    }
}
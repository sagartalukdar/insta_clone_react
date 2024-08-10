import { type } from "@testing-library/user-event/dist/type";
import { BASE_URL } from "../Config/Util"
import { CREATE_NEW_POST, FIND_ALL_POSTS_BY_USERID, FIND_POST_bY_POSTID, GET_USERS_POSTS, LIKE_POST, SAVE_POST, UNLIKE_POST, UNSAVE_POST } from "./ActionType";

export const createPostAction=(data)=>async(dispatcher)=>{
    try {
        const res=await fetch(`${BASE_URL}/api/posts/create`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.jwt
            },
            body:JSON.stringify(data.data)
        });
        if(res){          
            const post=await res.json();
            console.log("post created :"+res);
            dispatcher({type:CREATE_NEW_POST,payload:post});
        }
    } catch (error) {
        console.log("error creating post");
    }
}

export const findHomePosts=(data)=>async(dispatcher)=>{
    try {
        const res=await fetch(`${BASE_URL}/api/posts/following/${data.userIds}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                 Authorization:"Bearer "+data.jwt
            }
        })
        const posts=await res.json();
        console.log("home posts :"+posts);
        dispatcher({type:GET_USERS_POSTS,payload:posts});
    } catch (error) {
        console.log(error);
    }
}

export const getAllPostsByUserId=(data)=>async(dispatcher)=>{
    try {
        const res=await fetch(`${BASE_URL}/api/posts/userPosts/${data.userId}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.jwt
            }
        })
        const posts=await res.json();
        console.log(posts);
        dispatcher({type:FIND_ALL_POSTS_BY_USERID,payload:posts});
    } catch (error) {
        console.log(error);
    }
}

export const likePostAction=(data)=>async(dispatcher)=>{
    try {
        const res=await fetch(`${BASE_URL}/api/posts/like/${data.postId}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.jwt
            }
        })
        const likedPost=await res.json();
        console.log("liked post: "+likedPost);
        dispatcher({type:LIKE_POST,payload:likedPost})
    } catch (error) {
        console.log(error);
    }
}

export const unlikePostAction=(data)=>async(dispatcher)=>{
    try {
        const res=await fetch(`${BASE_URL}/api/posts/unlike/${data.postId}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.jwt
            }
        })
        const unlikePost=await res.json();
        console.log(unlikePost);
        dispatcher({type:UNLIKE_POST,payload:unlikePost})
    } catch (error) {
        console.log(error);
    }
}

export const savePostAction=(data)=>async(dispatcher)=>{
    try {
        const res=await fetch(`${BASE_URL}/api/posts/save/${data.postId}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.jwt
            }
        })
        const savePost=await res.json();
        console.log(savePost);
        dispatcher({type:SAVE_POST,payload:savePost});
    } catch (error) {
        console.log(error);
    }
}

export const unSavePostAction=(data)=>async(dispatcher)=>{
    try {
        const res=await fetch(`${BASE_URL}/api/posts/unsave/${data.postId}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.jwt
            }
        })
        const unSavePost=await res.json();
        console.log(unSavePost);
        dispatcher({type:UNSAVE_POST,payload:unSavePost});
    } catch (error) {
        console.log(error);
    }
}

export const findPostByPostId=(data)=>async(dispatcher)=>{
    try {
        const res=await fetch(`${BASE_URL}/api/posts/${data.postId}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+data.jwt
            }
        })
        const post=await res.json();
        console.log("finr by postid"+ post);
        dispatcher({type:FIND_POST_bY_POSTID,payload:post});
    } catch (error) {
        console.log(error);
    }
}
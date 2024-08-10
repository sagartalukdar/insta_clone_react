
export const isReqUser=(userId1,userId2)=>{
  if(userId1 && userId2) return userId1===userId2;
}

export const isFollowing=(user1,user2)=>{
    if(user1 && user2){
        for(let item of user2.follower){
            if(item.id===user1.id){
                return true;
            }
        }
        return false;
    }
}

export const isPostLiked=(post,userId)=>{
    if(post && userId){
        for(let item of post.likedByUsers){
            if(item.id===userId){
                return true;
            }
        }
        return false;
    }
}

export const isPostSaved=(user,postId)=>{
    if(user && postId){
        for(let item of user.savedPosts){
            if(item.id===postId){
                return true;
            }
        }
        return false;
    }
}

export const isCommentLikedByUser=(comment,userId)=>{
    if(comment && userId){
        for(let item of comment.likedByUsers){
            if(item.id===userId){
                return true;
            }
        }
        return false;
    }
}

export const timeOfference=(timeStamp)=>{
    const date=new Date(timeStamp);
    const difference=Date.now()-date.getTime();

    const seconds=Math.floor(difference/1000);
    const minute=Math.floor(seconds/60);
    const hours=Math.floor(minute/60);
    const day=Math.floor(hours/24);
    const week=Math.floor(day/7);

    if(week>0){
        return week+" week"+(week===1?"":"s")+" ago";
    }else if(day>0){
        return day+" day"+(day===1?"":"s")+" ago";
    }else if(hours>0){
        return hours+" hour"+(hours===1?"":"s")+" ago";
    }else if(minute>0){
        return minute+" minute"+(minute===1?"":"s")+" ago";
    }else if(seconds>0){
        return seconds+" second"+(seconds===1?"":"s")+" ago";
    }else{
        return "just now";
    }
}
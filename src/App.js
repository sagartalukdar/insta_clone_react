import { useDispatch, useSelector } from "react-redux";
import Router from "./pages/Router/Router";
import { useEffect } from "react";
import { getUserByJwt } from "./Redux/User/Action";


function App() {
  const token=localStorage.getItem("token");
  const dispatch=useDispatch();
  const {post}=useSelector(selector=>selector);

  useEffect(()=>{
   if(token){
    dispatch(getUserByJwt(token));
   }
  },[token,post.savePost,post.unsavePost])

  return (
    <div>
      <Router/>
    </div>
  );
}

export default App;


export const uploadToCloudinary=async(imageFile)=>{
  if(imageFile){
    const formData=new FormData();
    formData.append("file",imageFile);
    formData.append('upload_preset',"social-app");
    formData.append("cloud_name","dj2wdfbxm");

    const res=await fetch(`https://api.cloudinary.com/v1_1/dj2wdfbxm/image/upload`,{
        method:"POST",
        body:formData
    })

    if(res){
       const data=await res.json();
       console.log("file uploaded to cloudinary");
       return data.url.toString();
    }
  }
}
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'
import { upload } from '../middlewares/multer.middlewares';
import { response } from 'express';
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
 });
  
 const uplaodOnCloudinary=async(localFilePath)=>{
    try{
        if(!localFilePath)
            return null;
        cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log('file uploded on cloudinary file src:'+response.url );
        //once the file is uplaoded we will delete it from our server
        fs.unlinkSync(localFilePath)
        
    }
    catch(error){
     fs.unlinkSync(localFilePath)
     return null;
    }
 }
    export {uplaodOnCloudinary}
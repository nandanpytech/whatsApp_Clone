const express = require('express');
const multer  = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const url = 'mongodb://localhost:27017/whatsApp_clone';

const storage = new GridFsStorage({ 
    url,
     file:(req,file)=>{
        const match=["image/png","image/png"]
        if(match.indexOf(file.mimeType)===-1){
            return `${Date.now()}-file-${file.originalname}`
        }
        return{
            bucketName:"photos",
            filename:`${Date.now()}-file-${file.originalname}`
        }
     }
});

module.exports= multer({storage})
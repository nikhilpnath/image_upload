const express = require("express");

const router = express.Router();

const multer = require("../config/Multer");

const Image = require("../model/image");

router.get('/images', async(req,res)=>{
  
  const uploadedImages = await Image.find().sort({createdAt:"descending"})
  res.json(uploadedImages)
})



router.post("/upload", multer.single('photo'), async (req, res) => {

  //the single means that, we are uploading single files.
  // the photo , just a filed name which we are going to send from frontend( from formData );
  // 
    try {
    const newFile = new Image({ image: req.file.filename });
    await newFile.save();

    res.status(201).json({
      success: true,
      message: "File uploaded successfully",
    });
    }
  catch(err){
    console.log(err);
    res.status(404).json({
      success: false,
      error: 'Image upload failed!',
    });
  }
});

module.exports = router;

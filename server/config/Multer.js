const multer = require("multer")

const {v4: uuidv4} = require("uuid")
 //used to generate version 4 Universally Unique Identifier (UUID), which is a random string

const fs = require('fs')


const filePath = 'public/uploads/images';

const storage = multer.diskStorage({

    destination :  function (req, file, callback){

         fs.mkdir(filePath, {recursive:true}, (err)=>{
            // err function cause fs.mkdir() is an async function
            if(err){
                callback(err,null)

            }else{
                callback(null, filePath)
                //it will attempt to create the directory specified by the variable.
                // recursive: true means that If any of the directories public or uploads do not exist, Node.js will create them for you along with the final directory images.
            }
         })

        
    },

    filename: function (req,file,callback){

        callback(null, `${uuidv4()}_${file.originalname}`)

        //uuid4 ensures that uploaded files have unique names, even if they have the same original name.

        // here the outcome will be like, 
        //imagine uuidv4 = abcdg2i-ej-2 , underscore(_) and file.originalName = example.jpg
        // result : abcdg2i-ej-2_example.jpg
    }
})

// in the callback functions, where first parameter (here its null) is error. 
// we used null cause there is no error during the filename generation process.


//filter method

const fileFilter = (req, file, callback) =>{
    const allowedTypes = ["image/jpg", "image/jpeg", "image/png"];  
    
    if(allowedTypes.includes(file.mimetype)){
        //mimetype indicates the format of a file
        // Eg: flower.png, the mimetype of this file is  "image/png"
        // here the array has this mimetype and it returns true

        callback(null, true)
    }
    else{
        callback('Only jpg, jpeg and png are allowed',false)
    }

}

module.exports = multer({
    storage,
    limits: {
        fileSize: 3 * 1024 * 1024 // 3 MB in bytes
      },
    fileFilter
})


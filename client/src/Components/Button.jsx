import React from 'react'
import axios from 'axios'

const Button = ({setUpdateUI}) => {
    const handleUpload = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("photo",e.target.files[0] )
    
        axios.post("http://localhost:8005/api/upload", formData)

        .then((res)=>{
          console.log(res.data);
          setUpdateUI(res.data._id)
          alert(res.data.message)
        })
        .catch(err=>{
          console.log(err);
          
            // Create a temporary DOM element to parse the HTML content
            const tempElement = document.createElement('div');
            tempElement.innerHTML = err.response.data;
            // Extract the text content inside the <pre> element
            const errorMessage = tempElement.querySelector('pre').textContent;
            alert(errorMessage); // alert the error message

            //if you upload files, where size is greater than 1 mb the alert will not look good.
            //better to check the console
       
        })
      };
    
      return (
        <>
        <label htmlFor="file_add" style={{position:'relative'}} >

            <span className="bi bi-plus-circle-fill add-button"></span>
            </label>
            
    
        <input type="file" name="file_add" id='file_add' hidden onChange={(e)=>handleUpload(e)}/>

       
        </>
      )
}

export default Button
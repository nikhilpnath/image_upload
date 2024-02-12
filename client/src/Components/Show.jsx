import React from 'react'

const Show = ({images}) => {


  return (
    <>
    <h1>Gallary</h1>
    <div className="grid">
        {images.map(({image, _id})=>( // used destructing along with map
            <div key={_id} className='img-container'>
              
              {
                (image.length > 0) ? 
                <img src={`http://localhost:8005/uploads/images/${image}`} alt="image" /> 
                : null
              }
               
                
            </div>
        ))}
    </div>
    </>
  )
}

export default Show
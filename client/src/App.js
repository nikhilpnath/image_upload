import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import Show from "./Components/Show";
import axios from "axios";

const App = () => {
   const [images, setImages] = useState([]);
   const [updateUI, setUpdateUI] = useState('')// to refresh the page automatically

   useEffect(()=>{

    axios.get("http://localhost:8005/api/images")
    .then((res)=>{
     console.log(res.data)
     setImages(res.data)
    })
    .catch(err => console.log(err))

   }, [updateUI])



  return (
    <div>
      <Navbar />
      <Show  images = {images}/>
      <Button setUpdateUI={setUpdateUI}/>
    </div>
  );
};

export default App;



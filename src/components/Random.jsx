import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () =>{
  const [gif, setGif] = useState('');
  const [loading , setLoading] = useState(true);
  
  async function fetchData(){
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW`;
    const {data} = await axios.get(url);
    const imgsource = data.data.images.downsized_large.url;
    setGif(imgsource);
    setLoading(false);
  }

  useEffect( ()=>{
    fetchData();
  },[])


  function clickHandler(){
    fetchData();
  }

  return (
    <div className="w-1/2 bg-green-500 border border-black flex flex-col items-center tracking-wider rounded-md">
      
      <h1 className="text-xl underline uppercase font-bold mt-2">A Random Gif</h1>
      
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      }
      
      <button onClick={clickHandler}
      className="bg-white opacity-60 w-10/12 rounded-md p-1 font-bold mb-[20px] mt-[20px]"
      >
        Generate</button>
    </div>
  )

}

export default Random;
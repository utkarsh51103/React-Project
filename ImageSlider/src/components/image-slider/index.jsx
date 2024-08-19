import React, { useState } from "react";
import { useEffect } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
import './style.css'

function imageSlider({ url, limit, page=1 }) {
  const [images, setimage] = useState([]);
  const [currentslide, setcurrentslide] = useState(0);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);

  async function fetchImage(getUrl) {
    try {
      setloading(true);
      const response = await fetch(`${getUrl}?${page}=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setimage(data);
        setloading(false);
      }
    } catch (error) {
      seterror(e.message);
      setloading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImage(url);
  }, [url]);

  console.log(images)

  if (loading) {
    return <div>Loading Data ! Please Wait</div>;
  }

  if (error !== null) {
    return <div>Error Occured !</div>;
  }

  return <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow-left" style={{left:"1rem"}}/>
      {
        images && images.length 
        ? images.map((imageitem)=> 
        <img
        key={imageitem.id}
        alt={imageitem.download_url}
        src={imageitem.download_url}
        className="current-image" 
        />
    ): null
      }
      <BsArrowRightCircleFill className="arrow arrow-right" style={{ right:"1rem" }}/>
      <span className="circle-indicators" >
      {
       images && images.length ?
       images.map((_,index)=>{
          <button 
          key={index}
          className="current-indicator" 
          ></button>
       }): null
      }
      </span>
  </div>;
}

export default imageSlider;

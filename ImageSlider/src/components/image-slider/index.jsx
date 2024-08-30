import React, { useState } from "react";
import { useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

function imageSlider({ url, limit, page = 1 }) {
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

  const handlePrevious = () => {
    setcurrentslide(currentslide === 0 ? images.length - 1 : currentslide - 1);
  };

  const handleNext = () => {
    setcurrentslide(currentslide === images.length - 1 ? 0 : currentslide + 1);
  };

  useEffect(() => {
    if (url !== "") fetchImage(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading Data ! Please Wait</div>;
  }

  if (error !== null) {
    return <div>Error Occured !</div>;
  }

  return (
    <div className="container overflow-hidden">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
        style={{ left: "1rem" }}
      />
      {images && images.length
        ? images.map((imageitem, index) => (
            <img
              key={imageitem.id}
              alt={imageitem.download_url}
              src={imageitem.download_url}
              className={
                currentslide === index
                  ? "current-image"
                  : "current-image inactive-current-image"
              }
              
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentslide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setcurrentslide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default imageSlider;

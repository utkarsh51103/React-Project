import React, { startTransition, useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './style.css'

function starRating({noofStars=5}) {

    const [rating,setrating] = useState(0);
    const [hover,sethover] = useState(0);

    function handleClick(getcurrentindex){
         setrating(getcurrentindex)
    }

    function handleMouseEnter(getcurrentindex){
        sethover(getcurrentindex)
    }

    function handleMouseLeave(getcurrentindex){
        sethover(rating)
    }

    return (
        <div className='star-rating' style={{display:"flex", justifyContent:"center", gap:"10px"}}>
            {
                [ ...Array(noofStars)].map((_,index) => {
                    index+=1
                    return <FaStar 
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handleMouseLeave(index)}
                    size={40}
                />
             })
             }
        </div>
    );
}

export default starRating;
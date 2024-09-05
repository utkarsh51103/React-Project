import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css'

function Loadmore() {
    
    const [loading,setloading] = useState(false)
    const [products,setproducts] = useState([])
    const [count,setcount] = useState(0)
    const [disable,setdisable] = useState(false)

   async function fetchproducts(){
    try {
        setloading(true);
        const skip = count*20
        const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${skip}`)
        const result = await response.json()
        if(result && result.products && result.products.length){
            setproducts((prev)=>[...prev,...result.products])
            console.log(result)
            setloading(false)
        }
    } catch (error) {
        console.log(error)
        setloading(false)
    }
   }

    useEffect(()=>{
      fetchproducts();
    },[count])

    useEffect(()=>{
     if(products && products.length == 100){
        setdisable(true)
     }
    },[products])

    if(loading){
        return <div>Loading data! Please wait</div>
    }


    return (
        <div className='container'>
            <div className='product-container'>
            {
            products && products.length ? 
            products.map((items,index)=>(<div key={`${items.id}-${index}`} className='product' >
                <img src={items.thumbnail} alt={items.title}/>
                <p>{items.title}</p>
                </div>))
                : null}
            </div>
           <div className='button-container'>
            <button disabled={disable} onClick={()=>setcount(count+1)}>Load More</button>{
                disable ? <p>You have reached the limit</p> : null
            }
           </div>
        </div>
    );
}

export default Loadmore;
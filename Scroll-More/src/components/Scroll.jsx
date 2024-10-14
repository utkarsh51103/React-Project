import React, { useEffect, useState } from 'react';

function Scroll({url}) {
    const [data,setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [errormsg, seterrmsg] = useState('')
    const [scrollpercen, setscrollpercen] = useState(0)

    const fetchData =async (geturl)=>{
       try {
        setloading(true)
        const res = await fetch(geturl)
        const data = await res.json()
        if(data && data.products && data.products.length > 0){
            setdata(data.products)
            setloading(false)
        }
       } catch (error) {
          console.log(error)        
          seterrmsg(e.message)
       }
    }

    useEffect(()=>{
       fetchData(url)
    },[url])

    const handlescrollpercentage = ()=>{

          const howmuchsroll = document.body.scrollTop || document.documentElement.scrollTop

          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

          setscrollpercen((howmuchsroll/height)*100);
    }

    useEffect(()=>{
        window.addEventListener('scroll',handlescrollpercentage)
        return ()=>{
            window.removeEventListener('scroll',handlescrollpercentage)
        }
    })

    // console.log(data)
    // console.log(loading)
    console.log(scrollpercen)
    return (
        <div className='h-screen'>
            <h1 className='bg-black fixed text-white w-full text-center'>Custom Scroll Indicator</h1>
            <div className='w-screen h-3 bg-black fixed my-5 z-20'>
              <div style={{width:`${scrollpercen}%`}} className='bg-white h-full transition-all ease-out'></div>
            </div>
            <div className='bg-black flex justify-center flex-col items-center gap-2 pt-8'>
             {
                data && data.length ? data.map((item)=><p className='text-white'>{item.title}</p>) : null
             }
            </div>
        </div>
    );
}

export default Scroll;
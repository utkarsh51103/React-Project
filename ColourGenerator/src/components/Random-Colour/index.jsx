import React, { useEffect, useState } from 'react';

function index() {

    const [typeofcolour, settypeofcolour] = useState('hex')
    const [colour,setcolour] = useState('#fff')

     function randomcolourutility(length){
        return Math.floor(Math.random()*length)
     }

     function handlerandomhexcolour(){
      //#123456
      const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
      let hexcolour = "#"

      for(let i=0;i<6;i++){
        hexcolour +=  hex[randomcolourutility(hex.length)]
      }
      console.log(hexcolour)
      setcolour(hexcolour)
     }

     function handlerandomrgbcolour(){
          const r = randomcolourutility(256)
          const g = randomcolourutility(256)
          const b = randomcolourutility(256)
          console.log(`rgb(${r},${g},${b})`) 
          setcolour(`rgb(${r},${g},${b})`)
     } 

     useEffect(()=>{
       if(typeofcolour === "rgb")handlerandomrgbcolour() 
       else handlerandomhexcolour()
     },[typeofcolour]) 

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: colour,
            borderRadius: '10px',
            marginTop: '50px',
        }}
         >
            <button 
            style={
                {
                    marginTop: '10px'
                }
            }
            onClick={()=> settypeofcolour('hex')}>HEX Colour</button>
            <br/>
            <button onClick={()=> settypeofcolour('rgb')}>RGB Colour</button><br/>
            <button onClick={typeofcolour ==='hex' ? handlerandomhexcolour : handlerandomrgbcolour}>Generate Colour</button>
            <div style={
                {
                   display: 'flex',
                   justifyContent: 'center', 
                   alignItems: 'center',
                   color: '#fff',
                   fontSize: '60px',
                   marginTop: '50px',
                   gap: '15px',
                   flexDirection: 'column'
                }
            }>
            <h3>{typeofcolour === "rgb" ? "RGB Colour " : "HEX Colour " }</h3> 
            <h1> {colour}</h1>
            </div>
        </div>
    );
}

export default index;
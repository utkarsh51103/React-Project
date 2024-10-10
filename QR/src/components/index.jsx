import React from 'react';
import { useState } from 'react';
import QRCode from "react-qr-code";
function qrcode() {

    const [qrcode,setqrcode] = useState('')
    const [input,setinput] = useState('')

    const handlegenerate = () =>{
        setqrcode(input)
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
              <div>
               <input onChange={(e)=>setinput(e.target.value)} type='text' placeholder='Enter the Text' name='qr-code'/>
               <button disabled={input && input.trim()!== "" ? false : true} onClick={handlegenerate} >Generate</button>
              </div>
              <div>
                <QRCode
                id='qr-code'
                value={qrcode} size={400} bgColor="#fff"
                />
              </div>
        </div>
    );
}

export default qrcode;
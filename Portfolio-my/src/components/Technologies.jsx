import React from 'react';
import {TbBrandCpp} from 'react-icons/tb';
import {RiReactjsLine} from 'react-icons/ri';
import {FaNode} from 'react-icons/fa';
import {SiMongodb} from 'react-icons/si';


function Technologies() {
    return (
        <div className='border-neutral-800 pb-24 border-b'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
           <TbBrandCpp className='text-6xl text-blue-500'/>
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
           <FaNode className='text-6xl text-green-500'/>
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
           <RiReactjsLine className='text-6xl text-cyan-400'/>
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
           <SiMongodb className='text-6xl text-green-500'/>
          </div>
        </div>
            
        </div>
    );
}

export default Technologies;
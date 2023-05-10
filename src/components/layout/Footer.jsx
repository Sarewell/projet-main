import React from 'react'

import { GrFacebookOption, GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import {  HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Footer() {
  return (
    <div className='bg-gray-900 flex justify-center items-center'>
      <div className='text-center'>
        <div className='flex justify-center '>
          <HiOutlineChevronDoubleUp className='text-white text-6xl text-center -mt-6 bg-rose-500 p-2 '/>
        </div>
        
        <div className='flex gap-10 text-white text-4xl my-12'>
          <GrFacebookOption className='p-2 bg-gray-600  hover:animate-bounce  hover:bg-cyan-400  '/>
          <GrLinkedinOption className='p-2 bg-gray-600 hover:animate-bounce  hover:bg-cyan-400'/>
          <GrInstagram className='p-2 bg-gray-600 hover:animate-bounce  hover:bg-cyan-400'/>
          <GrGithub className='p-2 bg-gray-600 hover:animate-bounce  hover:bg-cyan-400'/>

        </div>
        <p className='uppercase text-gray-300 mb-8'>libois nicolas <span className='text-rose-800'>@ 2023</span></p>
      </div>
      
    </div>
  )
}

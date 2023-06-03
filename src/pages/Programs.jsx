import React from 'react'
import {Link,  Outlet} from "react-router-dom";
import bulkingImg from "../assets/bulkingImg.jpg";
import fatlossImg from "../assets/fatlossImg.jpeg";

const Programs = () => {
  return (
    <div><h1 className=' text-center p-5 font-bold text-[32px]'>PROGRAMS</h1>
    {/* <Link></Link> */}
    <div className='flex flex-col'>
      <div className='flex flex-col sm:flex-row'>
        <div className='flex items-center justify-center  w-full sm:w-[50%]'>
          <img className='w-[60%] h-[80%]'  src={bulkingImg} alt="" />
        </div>
        <div className='w-full sm:w-[50%] p-10'>
          <h1 className='heading3 text-[32px] font-bold'>Fit Guild Bulking</h1>
          <p className='text-[22px]'>Choose this program if you'd want to gain quality mass and build a muscular, strong and ripped body. In this online course, I have created a step by step practical plan for people who are tired of being small and want to bulk up with expert help and tested methods.</p>
          <button className='btn third mt-10 '><Link to="bulking">Start Bulking</Link></button>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row'>
      <div className='flex items-center justify-center  w-full sm:w-[50%]'>
        <img className='w-[60%] h-[80%]'  src={fatlossImg} alt="" />
        </div>
      <div className='flex  flex-col justify-center w-full sm:w-[50%] p-10'>
          <h1 className='heading3 text-[32px] font-bold'>Fit Guild Fat Loss</h1>
          <p className='text-[22px]'>Choose this program if you’d want to shed excess fat from your body and improve your physique. In this 16 weeks online course, I created a step by step practical plan for people who are ready to lose fat with expert help and tested methods.</p>
          <button className='btn third mt-10 w-[230px]'><Link to="fatloss">Start Cutting</Link></button>
        </div>
      </div>
    </div>
    <Outlet />
    </div>
  )
}

export default Programs

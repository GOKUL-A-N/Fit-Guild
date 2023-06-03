import React from 'react'
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div className='Home h-screen flex justfiy-center'>
      <div className='flex-1 flex flex-col justify-center '>
        <h1 className='block heading1 font-bold text-[60px] sm:ml-10 ml-5'>THE <br className='sm:hidden' /> WEAK <br className='sm:hidden' /> GET EATEN </h1>
        <h4 className='block text-slate-50 text-[20px] ml-5 sm:ml-10 heading3 font-bold'>A complete fitness guide</h4><br />
        <button className='ml-5 sm:ml-10 overflow-visible  w-[40%] md:w-[30%] sm:w-[20%] btn third block '><Link className='Link' activeClass="active" smooth spy to="bmicalculator">
                Get Started
              </Link></button>
      </div>
    </div>
  )
}

export default Home
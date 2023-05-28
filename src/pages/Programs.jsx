import React from 'react'
import {Link , Outlet} from "react-router-dom"

const Programs = () => {
  return (
    <div><h1>Programs</h1>
    <button><Link to="bulking">Bulking</Link></button>
    <button><Link to="fatloss">Fat loss</Link></button>
    <Outlet />
    </div>
  )
}

export default Programs
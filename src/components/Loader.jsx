import React from 'react'
// import { ClimbingBoxLoader } from 'react-spinners';
import sandipan from '../assets/sandipangif.gif'
import './loader.css'

const Loader = () => {
  return (
    <div className='loader'>
      {/* <ClimbingBoxLoader
          color="#181D31"
          loading
          size={22}
        /> */}
        <img src={sandipan} alt={sandipan} />
    </div>
  )
}

export default Loader

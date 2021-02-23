import React from 'react'
import preloader from "../../img/200.gif";
import './Preloader.css'


const Preloader = () => {
    return (
      <div>
          <img src={preloader} alt={preloader} className='preloader'/>
      </div>
    )
}

export default Preloader
import React from 'react'
import s from "./Slider.module.css"
export default function Slidercard({image, text, onClick, value}) {
  return (
   <>
   <div className={s.mainbox} >
    <div className={s.insidemain} onClick={onClick} value={value}>

    <img src={image} alt="" value={value} />
    <h1 >{text}</h1>
    </div>
   </div>
   </> 
  )
}

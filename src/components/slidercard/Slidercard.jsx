import React from 'react'
import s from "./Slider.module.css"
export default function Slidercard({image, text}) {
  return (
   <>
   <div className={s.mainbox}>
    <div className={s.insidemain}>

    <img src={image} alt="" />
    <h1>{text}</h1>
    </div>
   </div>
   </> 
  )
}

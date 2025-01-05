import React from 'react'
import nc from "./NewsCard.module.css"


export default function NewsCard({value,image, heading, para, onClick}) {
  return (
   <>
   <div className={nc.newscard} value = {value}>
    <div className={nc.imagesec}>
    <img src={image} alt=""  value = {value} onClick={onClick}/>
    </div>

    <div className={nc.text}>
        <h2 value = {value} onClick={onClick}>{heading}</h2>
        <p value = {value} onClick={onClick}>{para}</p>
        
    </div>
   </div>
   </>
  )
}

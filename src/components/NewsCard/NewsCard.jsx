import React from 'react'
import nc from "./NewsCard.module.css"


export default function NewsCard({image, heading, para}) {
  return (
   <>
   <div className={nc.newscard}>
    <div className={nc.imagesec}>
    <img src={image} alt="" />
    </div>

    <div className={nc.text}>
        <h2>{heading}</h2>
        <p>{para}</p>
    </div>
   </div>
   </>
  )
}

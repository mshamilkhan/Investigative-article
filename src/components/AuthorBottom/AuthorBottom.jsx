import React from 'react'
import ab from "./AuthorBottom.module.css"
// import image from "../../assets/images/author.png"


export default function AuthorBottom({image, name, date, about_author}) {
  return (
  <>
  <div className={ab.topbox}>
          <div className={ab.inside}>
            <div className={ab.imgbox}><img src={image} alt="" /></div>
            <div className={ab.detail}>
              <h3>{name}</h3>
              <p>{about_author}</p>
              <p>{date}</p>
            </div>
          </div>
        </div>
  </>
  )
}

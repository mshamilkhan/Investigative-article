import React from 'react'
import ab from "./AuthorBottom.module.css"
// import image from "../../assets/images/author.png"


export default function AuthorBottom({image, name, date}) {
  return (
  <>
  <div className={ab.topbox}>
          <div className={ab.inside}>
            <div className={ab.imgbox}><img src={image} alt="" /></div>
            <div className={ab.detail}>
              <h3>{name}</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur perspiciatis beatae minus itaque eaque optio, sunt corporis debitis aperiam maiores quos expedita ratione voluptatem dicta obcaecati sequi ducimus et accusantium.</p>
              <p>{date}</p>
            </div>
          </div>
        </div>
  </>
  )
}

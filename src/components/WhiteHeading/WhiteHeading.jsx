import React from 'react'
import ch from "./WhiteHeading.module.css"


export default function WhiteHeading({heading, colour}) {
  return (
    <div className={ch.head} style={{color:colour}}>
      <h1>{heading}</h1>
    </div>
  )
}

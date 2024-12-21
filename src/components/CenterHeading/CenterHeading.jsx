import React from 'react'
import ch from "./CenterHeading.module.css"


export default function CenterHeading({heading}) {
  return (
    <div className={ch.head} >
      <h1>{heading}</h1>
    </div>
  )
}

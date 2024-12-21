import React from 'react'
import cb from "./CategoryButton.module.css"


export default function CategoryButton({text}) {
  return (
    <>
    <button className={cb.cbutton}>{text}</button>
    </>
  )
}

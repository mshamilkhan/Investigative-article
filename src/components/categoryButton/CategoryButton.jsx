import React from 'react'
import cb from "./CategoryButton.module.css"


export default function CategoryButton({text, onClick,value}) {
  return (
    <>
    <button className={cb.cbutton} onClick={onClick} value={value}>{text}</button>
    </>
  )
}

import React from 'react'
import f from "./Footer.module.css"
import logo from "../../assets/images/blue1.1.png"

export default function Footer() {
  return (
    <>
    <div className={f.footer}>
    <div className={f.logobox}>
        <img src={logo} alt="" />
    </div>

<div className={f.main}>

    <div className={f.leftbox}>

   
    <div className={f.box1}>
<h1>YOUR TAGLINE</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt aliquam voluptatum esse aliquid perspiciatis architecto temporibus tempore ipsam iure quam corrupti dolore, quas distinctio adipisci a doloribus voluptatibus expedita nam!</p>
    </div>
    <div className={f.box2}>
<h1>YOUR Tagline</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt aliquam voluptatum esse aliquid perspiciatis architecto temporibus tempore ipsam iure quam corrupti dolore, quas distinctio adipisci a doloribus voluptatibus expedita nam!</p>
    </div>
    </div>
<div className={f.rightbox}>
    <h2>QUICK LINKS</h2>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Categories</li>

    </ul>
</div>
</div>



<div className={f.bottom}>
    <p>Copyright 2023</p>
</div>



    </div>
    </>
  )
}

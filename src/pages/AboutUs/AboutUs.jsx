import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import s from "./AboutUs.module.css"
export default function ContactUs() {
  return (
  <>
  <Navbar parameter={"/menuopen"}/>

<div className={s.main}>
    <div className={s.container}>
        <h1>MISSION</h1>
        <p>At The Disrupt, we investigate powerful individuals and institutions to expose corruption and injustice. We see journalism as an instrument of civic action. We’re here to change the world, not just describe it.

The Disrupt aspires to drive meaningful change by empowering the public with information to demand a better world from institutions and leaders. We believe rigorous and courageous journalism plays a vital role in protecting human rights, safeguarding freedoms, checking the influence of money and power, and moving society toward a just future.

Since our founding in 2014, our groundbreaking reporting has achieved immense impact, including spurring exonerations, reforming laws, enacting new legislation, and exposing sweeping national security programs that undermine civil liberties</p>
    </div>
</div>

  <Footer/>
  </>
  )
}

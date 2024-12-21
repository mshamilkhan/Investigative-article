import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link,Navigate, useNavigate, useParams } from "react-router-dom";
import {motion} from "framer-motion"
import s from "./DesktopMenu.module.css"


export default function DesktopMenu() {

    


  return (
   <>
   <motion.div className="">

   <Navbar parameter="/" menuText="Close"/>
    <div className={s.menubox}>
      <motion.div className=""
      initial={{transform:"scale(0)"}}
      animate={{transform:"scale(1)"}}
      exit={{transform:"scale(0)"}}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      >

        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>

        </ul>
      </motion.div>
    
    </div>


   </motion.div>

   </>
  )
}

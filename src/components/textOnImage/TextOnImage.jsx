import React from 'react'
import hero from "../../assets/images/building.jpg"
import toi from "./textonimage.module.css"
import {motion} from "framer-motion"

export default function TextOnImage({image , text}) {
  return (
  <>
  <div className={`${toi.main} ${toi.pos}`}>
<img src={image} alt="" />
{/* <motion.h1
style={{overflow:"hidden", whiteSpace:"nowrap" }}
initial={{width:0}}
animate={{width:"100%"}}
transition={{duration:4, ease:"easeInOut"}}

> */}
{/* <span>NEWS</span> TITLE HERE */}
<h1> <span>NEWS</span> TITLE HERE</h1>
{/* </motion.h1> */}
  </div>
  </>
  )
}

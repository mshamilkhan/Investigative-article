import React from "react";
import Navbar from "../components/navbar/Navbar";
import TextOnImage from "../components/textOnImage/TextOnImage";
import hero from "../assets/images/building.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import s from "./Home.css";
import Slider from "../components/slider/Slider";
import image1 from "../assets/images/image.png"
import image2 from "../assets/images/pink.png"
import CategoryButton from "../components/categoryButton/CategoryButton";
import NewsCard from "../components/NewsCard/NewsCard";
import CenterHeading from "../components/CenterHeading/CenterHeading";
import Scroll from "../components/Scroll/Scroll";
import Footer from "../components/Footer/Footer";



export default function Home() {
  return (
    <>
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar parameter="/menuopen" menuText="Menu" />

        <TextOnImage image={hero} />

<motion.div
style={{position:"relative"}}
initial={{left:"-100rem", opacity:0}}
animate={{left:0, opacity:1}}
transition={{duration:1, ease:"easeInOut", opacity:0}}
>

        <div className="sliderbox">
          <div className="inside-container">
            <Slider image1={image1} image2 = {image2} text1="Your heading here" text2="Your heading here" text3="Your heading here" text4="Your heading here" text5="Your heading here" />
          </div>
        </div>
</motion.div>
<div className="categorydiv">
<CategoryButton text="News"/>
<CategoryButton text="News"/>
<CategoryButton text="News"/>
<CategoryButton text="News"/>
<CategoryButton text="News"/>
<CategoryButton text="News"/>
<CategoryButton text="News"/>

</div>

<div className="news-section">
<div className="news">

<NewsCard image={hero} heading="heading here" para="lorem ipsum the demo paragraph will e written here you can write any important data here to attract the customers"/>
<NewsCard image={hero} heading="heading here" para="lorem ipsum the demo paragraph will e written here you can write any important data here to attract the customers"/>
<NewsCard image={hero} heading="heading here" para="lorem ipsum the demo paragraph will e written here you can write any important data here to attract the customers"/>
<NewsCard image={hero} heading="heading here" para="lorem ipsum the demo paragraph will e written here you can write any important data here to attract the customers"/>
<NewsCard image={hero} heading="heading here" para="lorem ipsum the demo paragraph will e written here you can write any important data here to attract the customers"/>
<NewsCard image={hero} heading="heading here" para="lorem ipsum the demo paragraph will e written here you can write any important data here to attract the customers"/>
</div>

<div className="btnbox">
<CategoryButton text="See More"/>
</div>


<CenterHeading heading="TOP NEWS"/>
</div>

<motion.div
style={{position:"relative"}}
initial={{left:"-100rem", opacity:0}}
animate={{left:0, opacity:1}}
transition={{duration:1, ease:"easeInOut", opacity:0}}
>

        <div className="sliderbox">
          <div className="inside-container">
            <Slider image1={image1} image2 = {image2} text1="Your heading here" text2="Your heading here" text3="Your heading here" text4="Your heading here" text5="Your heading here" />
          </div>
        </div>
</motion.div>


<CenterHeading heading="RECENT"/>


{/* <motion.div
style={{position:"relative"}}
initial={{left:"-100rem", opacity:0}}
animate={{left:0, opacity:1}}
transition={{duration:1, ease:"easeInOut", opacity:0}}
>

        <div className="sliderbox">
          <div className="inside-container">
            <Slider image1={image1} image2 = {image2} text1="Your heading here" text2="Your heading here" text3="Your heading here" text4="Your heading here" text5="Your heading here" />
          </div>
        </div>
</motion.div> */}



<Scroll/>

<Footer/>












      </motion.div>
    </>
  );
}

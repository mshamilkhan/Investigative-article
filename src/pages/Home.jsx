import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import TextOnImage from "../components/textOnImage/TextOnImage";
import hero from "../assets/images/building.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import s from "./Home.css";
import Slider from "../components/slider/Slider";
import image1 from "../assets/images/image.png";
import image2 from "../assets/images/pink.png";
import CategoryButton from "../components/categoryButton/CategoryButton";
import NewsCard from "../components/NewsCard/NewsCard";
import CenterHeading from "../components/CenterHeading/CenterHeading";
import Scroll from "../components/Scroll/Scroll";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import "./Home.css";


export default function Home() {
  
const navigate = useNavigate();
  const [blog, setBlog] = useState([]);

  const submit = async (e) => {
    const option = e.target.value;
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_AXIOS_LINK}/fetch-data`, {
        params: { option },
      });
      setBlog(data); // Assuming data is an array
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };


const openBlog = (e)=>{
  try{

    let link = e.target.getAttribute('value')
   console.log(link)
   axios.get(`${process.env.REACT_APP_AXIOS_LINK}/blog`,{
    params: {title:link}
   }).then((res)=>{
    if(res){
      console.log(res.data)
      navigate(`/blog?title=${res.data[0].param}&id=${res.data[0]._id}`)
    }
    else{
      console.log("No data found")
    }
   })
  }catch(err){
    console.log("Error while redirecting to the blog")
  }
}





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
          style={{ position: "relative" }}
          initial={{ left: "-100rem", opacity: 0 }}
          animate={{ left: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", opacity: 0 }}
        >
          <div className="sliderbox">
            <div className="inside-container">
              <Slider
                image1={image1}
                image2={image2}
                text1="Your heading here"
                text2="Your heading here"
                text3="Your heading here"
                text4="Your heading here"
                text5="Your heading here"
              />
            </div>
          </div>
        </motion.div>
        <div className="categorydiv">
          <CategoryButton text="All" onClick={submit} value="all" />
          <CategoryButton text="Regional" onClick={submit} value="regional" />
          <CategoryButton text="Domestic" onClick={submit} value="domestic" />
          <CategoryButton
            text="International"
            onClick={submit}
            value="international"
          />
        </div>

        <div className="news-section">
          <div className="news">
            {blog.map((blogItem) => (
              
              <NewsCard
                key={blogItem._id} // Unique key
                // image={blogItem.image.path}
                image={`/images/${blogItem.image.filename}`}
                heading={blogItem.title}
                // heading={blogItem.title}
                para={blogItem.content}
                value={blogItem.title}
                onClick={openBlog}
              />
              
            ))}
            {/* </div> */}
            <NewsCard
              image={hero}
              heading="heading here"
              para="lorem ipsum the demo paragraph will e written here you can write any important data here to attract the customers"
            />
            <NewsCard
              image={hero}
              heading="heading here"
              para="lorem ipsum the demo paragraph will e written here you can write any important data here to attract the customers"
            />
            <NewsCard
              image={hero}
              heading="heading here"
              para="lorem ipsum the demo paragraph will e written here you can write any important data here to attract the customers"
            />
            <NewsCard
              image={hero}
              heading="heading here"
              para="lorem ipsum the demo paragraph will e written here you can write any important data here to attract the customers"
            />
            <NewsCard
              image={hero}
              heading="heading here"
              para="lorem ipsum the demo paragraph will e written here you can write any important data here to attract the customers"
            />
            <NewsCard
              image={hero}
              heading="heading here"
              para="lorem ipsum the demo paragraph will e written here you can write any important data here to attract the customers"
            />
          </div>

          <div className="btnbox">
            <CategoryButton text="See More" />
          </div>

          <CenterHeading heading="TOP NEWS" />
        </div>

        <motion.div
          style={{ position: "relative" }}
          initial={{ left: "-100rem", opacity: 0 }}
          animate={{ left: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", opacity: 0 }}
        >
          <div className="sliderbox">
            <div className="inside-container">
              <Slider
                image1={image1}
                image2={image2}
                text1="Your heading here"
                text2="Your heading here"
                text3="Your heading here"
                text4="Your heading here"
                text5="Your heading here"
              />
            </div>
          </div>
        </motion.div>

        <CenterHeading heading="RECENT" />

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

        <Scroll />

        <Footer />
      </motion.div>
    </>
  );
}

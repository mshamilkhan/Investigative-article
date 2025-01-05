import { Menu } from '@mui/material'
import React, {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from "axios"
import { motion } from "framer-motion";
import s from "./AllData.module.css"
import CategoryButton from '../../components/categoryButton/CategoryButton';
import NewsCard from '../../components/NewsCard/NewsCard';
import { useNavigate } from "react-router-dom";


export default function AllData() {
const navigate = useNavigate();
  const [blog, setBlog] = useState([]);


  const submit = async (e) => {
    const option = e.target.value || "all";
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_AXIOS_LINK}/fetch-data`, {
        params: { option },
      });
      setBlog(data); // Assuming data is an array
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };




  

const openBlog = (e, value)=>{
    try{
  
      let link = e.target.getAttribute('value') || value
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
  


  useEffect(() => {
  
    submit({target:{value:"all"}}
    
    )}, [])


  return (
  <>
  <Navbar parameter="/menuopen" menuText="Menu" />
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
                  image={`/images/${blogItem.images[0].filename}`}
                  heading={blogItem.title}
                  // heading={blogItem.title}
                  para={blogItem.preview_text}
                  value={blogItem.title}
                  onClick={openBlog}
                />
                
              ))}
              </div>
              </div>
  </>
  )
}

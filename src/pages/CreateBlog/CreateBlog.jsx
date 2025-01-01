import React, {useState} from 'react'
import cb from "./CreateBlog.module.css"
import axios from "axios"
import CategoryButton from '../../components/categoryButton/CategoryButton'
import { useLocation } from 'react-router-dom'


export default function CreateBlog() {
const [blog , setBlog] = useState({
    title: "",
    content: "",
    options: "",
    image: "",
})

const handleChange = (e)=>{
    const {name, value} = e.target;
    console.log({name:name, 
        value:value
    })
    setBlog((prev)=>({ ...prev, [name]: value }))
    console.log(blog)
}



const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBlog((prev) => ({ ...prev, image: file }));
  };

const clearFields = () => {
    setBlog({
      title: "",
      content: "",
      options: "",
      image: "",
    });
  };
  const submit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", blog.title);
  formData.append("content", blog.content);
  formData.append("options", blog.options);
  formData.append("image", blog.image);

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_AXIOS_LINK}/save-data`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    if (res.status === 200) {
      clearFields();
    } else {
      console.log("Error:", res.data);
    }
  } catch (err) {
    console.error("Error submitting the blog:", err);
  }
};






  return (
    <>
    <div className={cb.main}>
        <form onSubmit={submit} encType="multipart/form-data">
        <input type="text" placeholder="Title" onChange={handleChange} value={blog.title} name="title"/>

<div className={cb.radio}>
        <input type="file" name='image' onChange={handleFileChange} />
   
        <label>
    <input
      type="radio"
      name="options"
      value="all"
      onChange={handleChange}
    />
    All
  </label>
  
  <label>
    <input
      type="radio"
      name="options"
      value="regional"
      onChange={handleChange}
    />
    Regional
  </label>

  <label>
    <input
      type="radio"
      name="options"
      value="domestic"
      onChange={handleChange}
    />
    Domestic
  </label>
  
  <label>
    <input
      type="radio"
      name="options"
      value="international"
      onChange={handleChange}
    />
    International
  </label>
  </div>




        {/* <input type="text" placeholder="Content" name='content'/> */}
        <textarea name="content" onChange={handleChange} id="" placeholder='Enter your content here'></textarea>

        <CategoryButton text="Publish"/>
        </form>
    </div>
    </>
  )
}

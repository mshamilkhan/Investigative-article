import React, { useState } from 'react';
import cb from "./CreateBlog.module.css";
import axios from "axios";
import CategoryButton from '../../components/categoryButton/CategoryButton';

export default function CreateBlog() {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    options: "",
    images: [], // Array to hold multiple image files
    author_name: "",
    about_author: "",
    author_image: null, // To store single image for the author
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBlog((prev) => ({
      ...prev,
      [e.target.name]: file,
    }));
  };

  const handleMultipleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    setBlog((prev) => ({
      ...prev,
      images: [...prev.images, ...files], // Add selected images to the array
    }));
  };

  const clearFields = () => {
    setBlog({
      title: "",
      content: "",
      options: "",
      images: [],
      author_name: "",
      about_author: "",
      author_image: null,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("content", blog.content);
    formData.append("options", blog.options);
    formData.append("author_name", blog.author_name);
    formData.append("about_author", blog.about_author);
    formData.append("author_image", blog.author_image); // Attach author image

    // Append each selected file from the images array to the formData
    blog.images.forEach((file, index) => {
      formData.append("images", file); // Use the key "images" for multiple files
    });

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
        <form onSubmit={submit} encType="multipart/form-data" className={cb.form}>
          <input
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={blog.title}
            name="title"
          />
          
       

          <div className={cb.radio}>
            <label htmlFor="">Insert your Blog Image</label>
            <input
              type="file"
              name="images"
              onChange={handleMultipleFilesChange}
              multiple
            />
          </div>
<div className={cb.radio}>

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
          <textarea
            name="content"
            onChange={handleChange}
            value={blog.content}
            placeholder="Enter your content here"
          ></textarea>


   <div className={cb.radio}>
    <label htmlFor="">Insert Author Image</label>
            <input
              type="file"
              name="author_image"
              onChange={handleFileChange}
            />
          </div>

          <div className={cb.author}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author_name"
            id="author_name"
            placeholder="Author Name"
            onChange={handleChange}
            value={blog.author_name}
          />

          <label htmlFor="about_author">About Author</label>
          <input
            type="text"
            name="about_author"
            id="about_author"
            placeholder="Write about author or attach some portfolio Link"
            onChange={handleChange}
            value={blog.about_author}
          />
          </div>
          <div className={cb.btnbox}>

          <CategoryButton text="Publish" />
          </div>
        </form>
      </div>
    </>
  );
}

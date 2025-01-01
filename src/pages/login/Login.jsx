import React, { useState } from "react";
import s from "./Login.module.css";
import CategoryButton from "../../components/categoryButton/CategoryButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
  const submit = () => {
    
    axios
      .post(`${process.env.REACT_APP_AXIOS_LINK}/login`, credentials)
      .then((res) => {
        console.log(res.data)
        if(res.status === 200){
            console.log("request sent");
            navigate(`/create-blog`)
        }
        else{
            console.log("Incorrect credentials")
        }
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <div className={s.login}>
        <label htmlFor="username">Username</label>
        <input 
        type="text"
         placeholder="Username" 
         name="username" 
         onChange={handleChange}/>

        <label htmlFor="password">Password</label>
        <input type="password"
         placeholder="Password"
          name="password"
          onChange={handleChange} />
        <div className="div">
          <CategoryButton text="Submit" onClick={submit} />
        </div>
      </div>
    </>
  );
}

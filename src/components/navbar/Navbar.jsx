import React, { useState } from 'react';
import logo from "../../assets/images/Artboard 1.svg";
import menuicon from "../../assets/images/menuicon.svg";
import nbstyle from "./navbar.module.css";
import { Link,Navigate, useNavigate, useParams } from "react-router-dom";

export default function Navbar({parameter , menuText}) {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuPage = () => {
    setIsMenuOpen((prev) => !prev); 

  };

  return (
    <div>
      <div className={nbstyle.navbar}>
        <img className={nbstyle.navlogo} src={logo} alt="" />
        <div className={nbstyle.menuiconbox} onClick={menuPage}>
         
<Link to={parameter} className={nbstyle.navbarLink}>
         <h2>{menuText}</h2>
</Link>
          
          {/* <h2 className={isMenuOpen ? nbstyle.open : nbstyle.closed}>
            {isMenuOpen ? "Close" : "Menu"}
          </h2> */}

        </div>
      </div>
    </div>
  );
}

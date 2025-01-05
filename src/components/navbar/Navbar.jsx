import React, { useState } from 'react';
import logo from "../../assets/images/Artboard 1.svg";
import menuicon from "../../assets/images/menuicon.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import nbstyle from "./navbar.module.css";
import { Link,Navigate, useNavigate, useParams } from "react-router-dom";

export default function Navbar({parameter , menuText}) {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuPage = () => {
    setIsMenuOpen((prev) => !prev); 

  };


 
  const navigate = useNavigate(); 
    const handleLogoClick = () => {
      navigate('/');
    }
  return (
    <div>
      <div className={nbstyle.navbar}>
        <img className={nbstyle.navlogo} onClick={handleLogoClick}  src={logo} alt="" />
        <div className={nbstyle.menuiconbox} onClick={menuPage}>
         
<Link to={parameter} className={nbstyle.navbarLink}>
         {/* <h2>{menuText}</h2> */}
         {/* <img src="/images/hamberger.svg" alt="Hamburger icon" /> */}
         <FontAwesomeIcon icon={faBars} className={nbstyle.menuicon} />
     
</Link>

        </div>
      </div>
    </div>
  );
}

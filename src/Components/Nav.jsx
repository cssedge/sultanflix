import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {

    const [navbarBlack, setNavbarBlack] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
               setNavbarBlack(true); 
            } else {
                setNavbarBlack(false); 
            }
            
          });
          return () => {
            window.removeEventListener("scroll");
          };
    }, [])
    
  return (
    <nav className={`${navbarBlack && "nav__black"}`}>
       <div className="nav__contents">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" 
            className="nav__logo" />
            <img
                className="nav__avatar"
                src="https://freepikpsd.com/file/2019/10/my-profile-icon-png-4-Transparent-Images.png"
            />
        </div>
   </nav>
  )
}

export default Nav
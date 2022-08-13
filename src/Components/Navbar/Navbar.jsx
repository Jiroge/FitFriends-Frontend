
import React from "react";
import './Navbar.css';
import {useState} from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    const [tabMobile,setTabMobile] = useState(false)
    const [showNavbar,setShowNavbar] = useState(true)
    const toggleMobile=()=>{
        setTabMobile(!tabMobile)
    }
    const setNavBar = ()=>{
        
        if(window.scrollY >=100){
            setShowNavbar(false)
        } else {
            setShowNavbar(true)
        }
    }

    window.addEventListener('scroll',setNavBar)
    return (
        <div className={showNavbar ? 'Nav-content':'Nav-content hide'}>
            <div className="Nav-content1">
                <div className="logo">

                    {/* <a href="#home"><img src="/images/logo-removebg-preview.png" /></a> */}
                    <Link to="/MainPage">Fitfriend</Link>

                </div>
            </div>
            <div className="ul">
                <ul className="Nav-ul">

                    <Link to="/MainPage"><li>Community</li></Link>
                    <Link to="/AddPost"><li>Add Post</li></Link>
                    <Link to="/ProfilePage"><li>My Activities</li></Link>

                    
                </ul>
            </div>
         
            <div className="login-name">

                    <button><Link to="/" className="sign-in"><i className="fa-solid fa-right-to-bracket"></i>Login</Link></button>
                    <button><Link to="/Register" className="sign-up"><i className="fa-solid fa-user-plus"></i>Register</Link></button>
            </div>
            <div className="nav-mobile">
                <div className="toggle-bar">
                    <i className="fa-solid fa-bars" onClick={toggleMobile}></i>
                </div>
                <div className={tabMobile ? "tab-mobile active":"tab-mobile"}>
                    <div className="container-mobile">
                        <div className="mobile-login-name">
                            <button onClick={toggleMobile}><Link to="/" className="sign-in"><i className="fa-solid fa-right-to-bracket"></i>Sign in</Link></button>
                            <button onClick={toggleMobile}><Link to="/Register" className="sign-up"><i className="fa-solid fa-user-plus"></i>Sign up</Link></button>
                        </div>
                        <div className = "mobile-ul">
                            <ul className="mobile-nav-ul">
                                <Link to="/MainPage"><li onClick={toggleMobile}>Community</li></Link>
                                <Link to="/AddPost"><li onClick={toggleMobile}>Add Post</li></Link>
                                <Link to="/ProfilePage"> <li onClick={toggleMobile}>My Activities</li></Link>
                                
                            </ul>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
        </div>


        //     // {/* ===================================MEDIA QUERY========================================== */}

        // {/* <div className="Nav-mobile">
        //     <div className="logo-mobile">
        //         <img src="/images/logo-removebg-preview.png" />
        //     </div>

        //     <div className="Nav-ui-mobile">
        //         <div id="myLinks">
        //             <li><a href="#Community" id='#community'><img src="../images/283-2836870_community-icon-transparent-background-png-download-transparent-transparent.png" alt="Community" /></a></li>
        //             <li><a href="Workout" id='#workout'><img src="../images/illust58-5797-01.jpg" alt="Community" /></a></li>
        //             <li><a href="Recipes" id='#recipes'><img src="../images/2389105.png" alt="Community" /></a></li>
        //             <li><a href="Goals" id='#goals'><img src="../images/png-clipart-arrow-target-practicing-board-cartoon-cartoon-target-miscellaneous-cartoon-character.png" alt="Community" /></a></li>


        //             <div className="login-name-mobile">
        //                 <button><a href="#" id='#' className="sign-in">Sign in</a></button>
        //                 <button><a href="#" id='#' className="sign-up">Sign up</a></button>
        //             </div>
        //         </div>



        //     </div>
        // </div> */}

        // {/* </div> */}


    )
};

     

export default Navbar;
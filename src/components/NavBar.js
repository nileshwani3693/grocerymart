import React, { useState } from "react";
import './NavBarStyling.css'
import logo  from '../images/Logo.png'
import { Link,Routes,Route } from "react-router-dom";
import Contactus from "./ContactUs"
// import navbarbg from '../images/navbarbg.jpg'




function Header1() {

    const [show, setShow] = useState(false);
    return (
        <>
            <div className="navbarbg-img">
                
            
            <section className=" navbar-bgn" >
            
                <nav class="navbar navbar-expand-lg ">

                <img src={logo} class=" logo-design" alt="Logo"/>
                    {/* Logo */}
                        
                    

                    <div class="container">
                        <button class="navbar-toggler"
                            type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setShow(!show)}>
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {/* navigation buttons */}

                        <div class={`collapse navbar-collapse ${show ? "show" : ""}`} id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="#">Home</a>
                                </li>

                                <li class="nav-item ">
                                    <a class="nav-link " href="#" role="button">
                                        About
                                    </a>

                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link contact-us-margin" to="./ContactUs">Contact us</Link>
                                </li>
                            </ul>


                            {/* search Signup */}




                            <form class="d-flex">
                                <input class="search-bar-style  " type="search" placeholder="What are you looking for?" aria-label="Search" />
                                <button class="  btn-style btn-style-hover search-btn-style-margin" type="submit">Search</button>
                                <i class="fas fa-search"></i>
                                <button class=" btn-style btn-style-hover btn-style-margin" type="submit">Login</button>
                                <button class=" btn-style btn-style-hover" type="submit">Signup</button>
                            </form>
                        </div>
                    </div>
                </nav>

                
            </section>


             {/* second line of navbar */}


            <div className=" grocery-tab-design">
            <nav>
                <ul class="nav justify-content-evenly  nav-font-size ">
                    <li class=" grocery-tab-margin-right">
                        <a class="nav-link active " aria-current="page" href="#" >Fruits</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Oil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ">vegitables</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ">vegitables</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ">vegitables</a>
                    </li>
                </ul> 

             
            </nav>
            </div>


        

            </div>

           


          



        
        {/* <Routes>
            <Route path="/Contactus" element={<ContactUS/>} />

            
        </Routes> */}
        </>
    );
}
export default Header1;

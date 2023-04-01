import React from 'react'
import "./SingleHeader.scss"
import { FaFacebookF, FaLinkedinIn, FaPinterestP,FaTwitter,FaSistrix,FaPhoneAlt,FaRegEnvelope,FaClock } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';


const SingleHeader = () => {
  return (
    <>

<div className="top-headers">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-9">
                    <div className="left-info">
                        <ul>
                            <li><a href="#"> <FaPhoneAlt color='white' />  <span>(222) 400-630</span></a></li>
                            <li><a href="#"> <FaRegEnvelope color='white' /><span>contact@ekko.web</span></a></li>
                            <li><a href="#"> <FaClock color='white'/> <span>Mon - Fri: 10:00 - 18:00</span></a></li>
                        </ul>
                    </div>

                </div>
                <div className="col-lg-3">
                    <div className="social-icon">
                        <ul>
                            <li><a href="#"> <FaFacebookF />  </a></li>
                            <li><a href="#"> <FaLinkedinIn />  </a></li>
                            <li><a href="#"> <FaPinterestP /> </a></li>
                            <li><a href="#"><FaTwitter/> </a></li>
                            <li><a href="#"><FaSistrix /> </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="divider"></div>
    <div className="main-header ">
    <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-3">
                    <div className="logo align-items-center">
                        <h2>Jewelry shop</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="menu">
                        <ul>
                            <li><Link to= "/">Home <AiFillHeart /> </Link></li>
                            <li><Link to = "/about">About <AiFillHeart /> </Link></li>
                            <li><Link to ="/portfolio">Portfolio <AiFillHeart /></Link></li>
                            <li><Link to ="/service">Services <AiFillHeart/></Link></li>
                            <li><a href="#">Team <AiFillHeart /></a></li>
                            <li><Link  to= '/blog'>Shop <AiFillHeart /></Link></li>
                            <li><a href="#">Contact <AiFillHeart /></a></li>
                           
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="buttons">
                      <button className='baton'>ENQUIRE HERE</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    
    </>
  )
}

export default SingleHeader
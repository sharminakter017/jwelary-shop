import React from 'react'
import "./Footer.scss"
import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <>

    <div className="top-footer">
      <div className="container">
        <div className="row align-items-center">
            <div className="col-md-10">
                <div className="left-menu">
                    <ul>
                        <li><a className='about'
                    href="#">ABOUT</a></li>
                        <li><a href="#">DISCLIMER</a></li>
                        <li><a href="#">PRIVACY</a></li>
                        <li><a href="#">ADVARTICE</a></li>
                        <li><a href="#">CONTACT US</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-2">
                <div className="social-lgo">
                    <ul>
                        <li><FaFacebookF /></li>
                        <li><FaTwitter /></li>
                        <li><FaInstagram /></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <div className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="category">
                        <ul>
                            <li>ABOUT</li>
                            <li>SERVICES</li>
                            <li>OUR SHOP</li>
                            <li>JOB OPPORTUNITIES</li>
                            <li>CELENDER OF EVENTS</li>
                            <li>LOCATION</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="category">
                        <ul>
                            <li>ADDITIONAL LINKS</li>
                            <li>ABOUT US</li>
                            <li>TERMS AND CONDITIONS</li>
                            <li>PRIVACY AND POLICY</li>
                            <li>NEWS</li>
                            <li>CONTACT US</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="category">
                        <ul>
                            <li>CATEGORIES</li>
                            <li>EVENTS</li>
                            <li>RINGS</li>
                            <li>STYLE</li>
                            <li>TRENDS</li>
                            
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="category">
                        <ul>
                            <li>JWELARY</li>
                           <li>Making a positive first impression is essential to developing a strong customer relationship. Ekko is powerful enough to assist any small businesses.

                          </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="under-footer"></div>
    </div>
    
    
    </>
  )
}

export default Footer
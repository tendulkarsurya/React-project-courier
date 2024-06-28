import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const Aboutus = () => {


    return (
        <div className='about_main'>
            <div id="sb1">
                <h2>About us</h2>
                <h5><Link className='link' id='colorA' to='/'>Home</Link> / About Us</h5>
            </div>

            <Container>
                <div className='section2'>
                    <div id='section2_main1'>
                        <h2>OUR MISSION</h2>
                    </div>
                    <div id='section2_main2'>
                        <div className='sec2_img' id='sec2_img'>
                            <img id='img_2' src="../Assets/about-1.jpg" alt=""  />
                        </div >
                        <div id='sec2_P'>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore veritatis .</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                            <p> Natus erroroluptatem</p>
                            <p>Accusantium doloremue</p>
                            <p>Laudantium unde</p>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='section3'>
                <div className='main3'>
                    <div id='sec3_sub1' className='sec3_sub'>
                        <div id='sec_sub1' >
                            <h3>24/7 AVAILALITY</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur elit. Vestibulum nec odio ipsum. Suspe ndisse cursus malesuada facilisis.</p>
                        </div>
                        <div id='sec_sub2' >
                            <h3>NO HIDDEN COST</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur elit. Vestibulum nec odio ipsum. Suspe ndisse cursus malesuada facilisis.</p>
                        </div>
                    </div>
                    <div id='sec3_sub2' className='sec3_sub'>
                        <div id='sec_sub3' >
                            <h3>CERTIFIED MECHANICS</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur elit. Vestibulum nec odio ipsum. Suspe ndisse cursus malesuada facilisis.</p>
                        </div>
                        <div id='sec_sub4'>
                            <h3>AFFORDABLE PRICES</h3>
                            <p >Lorem ipsum dolor sit amet, consectetur elit. Vestibulum nec odio ipsum. Suspe ndisse cursus malesuada facilisis.</p>
                        </div>
                    </div>
                </div>
                <div id='sec3_img' className='sec3_sub'>
                    <img src="../Assets/about-2.jpg" alt="" height={300} />
                </div>
            </div>

            
            <div className="sb5">
                <div className='sb5_div'>
                    <h2>GREAT MOVING COMPANY</h2>
                    <h5>If you have any Move need, simply call our 24 hour emergecny number.</h5>
                    <h3>
                        0123456789 OR{"  "}
                        <Link id="lbt" to="/contactus">
                            Contact us
                        </Link>{" "}
                    </h3>
                </div>
            </div>
            
            <div id="sb6">
                <div className="last" id="lastb1">
                    <img
                        src="../Assets/footer-man-1.png"
                        alt=""
                    />
                </div>
                <div className="last" id="lastb2">
                    <h3>ABOUT US</h3>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consect- etur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna ali qua. Ut enim
                        ad minim veniam, quis no strud exercitation ullamco. Ut enim ad
                        minim.
                    </p>
                    <ul>
                        <li className="smli">
                            <a href="#">
                                <FaXTwitter />
                            </a>
                        </li>
                        <li className="smli">
                            <a href="#">
                                <IoLogoInstagram />
                            </a>
                        </li>
                        <li className="smli">
                            <a href="#">
                                <FaFacebook />
                            </a>
                        </li>
                        <li className="smli">
                            <a href="#">
                                <FaGoogle />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="last" id="lastb3">
                    <h3>OUR SERVICES</h3>

                    <ul>
                        <li className="midli" id="midli1">
                            <a href="">  Residential Moving</a>
                        </li>
                        <li className="midli" id="midli2">
                            <a href="">  Corporate Relocation</a>
                        </li>
                        <li className="midli" id="midli3">
                            <a href="">  International Move</a>
                        </li>
                        <li className="midli" id="midli4">
                            <a href="">  Packing and Unpacking</a>
                        </li>
                        <li className="midli" id="midli5">
                            <a href="">  Auto Transport</a>
                        </li>
                    </ul>
                </div>
                <div className="last" id="lastb4">
                    <h3>CONTACT INFO</h3>
                    <ul>
                        <li className="ltli" id="ltli1">
                            <FaLocationDot className='last_icons' />
                            <p>Lorance Road 542B, Tailstoi Town 5248 MT, Wordwide Country</p>
                        </li>
                        <li className="ltli" id="ltli2">
                            <IoCallSharp className='last_icons' />
                            <p>9876543210</p>
                        </li>
                        <li className="ltli" id="ltli3">
                            <IoIosMail className='last_icons' />
                            <p>contact@moverpress.com</p>
                        </li>
                     

                    </ul>
                </div>
            </div>        </div>
    )
}

export default Aboutus

import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
const Home = () => {
  return (
    <div className='about_main'>
      <div className='cuarsol'>
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../Assets/banner1.jpg" class="carousel-img" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../Assets/banner2.jpg" class="carousel-img" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../Assets/banner3.jpg" class="carousel-img" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='home_sec2' >
        <h2>SERVICES WE PROVIDE</h2>
        <div id="outer_div">
          <div className="inner_div mb-2" id="inner_div1">
            <div className='innerimages'>
              <img src="../Assets/banner4.jpg" alt="" />
              <button>PACKAGING & UNPACKING</button>
            </div>
            <p>Duis aute irure dolor in reprehend erit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
            <button>Know More</button>
          </div>
          <div className="inner_div mb-2 " id="inner_div2">
            <div className='innerimages' >
              <img src="../Assets/banner5.jpg" alt="" />
              <button>MOVING SERVICES</button>
            </div>
            <p>Duis aute irure dolor in reprehend erit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
            <button>Know More</button>
          </div>
          <div className="inner_div mb-2 " id="inner_div3">
            <div className='innerimages'>
              <img src="../Assets/banner6.jpg" alt="" />
              <button>MOVING PROTECTION</button>
            </div>
            <p>Duis aute irure dolor in reprehend erit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
            <button>Know More</button>
          </div>
          <div className="inner_div mb-2" id="inner_div4">
            <div className='innerimages'>
              <img src="../Assets/banner7.jpg" alt="" />
              <button>AUTO TRANSPORT</button>
            </div>
            <p>Duis aute irure dolor in reprehend erit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
            <button>Know More</button>
          </div>
        </div>
      </div>

      <div className="home_section3">
        <div id='home_section3_sub1'>
          <div id='hs3_sub1_section'>
            <div id='hs3_s1sub1' className='all' >
              <h3>WELCOME TO MOVE IT</h3>
            </div>
            <div id='hs3_s1sub2' className='all' >
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliq uam quae rat voluptatem. Ut enim ad minima.</p>
            </div>
            <div id='hs3_s1sub3' className='all' >
              <h3>WE ARE AVAILABLE FOR 24/7 FOR MOVING SERVICES</h3>
            </div>
            <div id='hs3_s1sub4' className='all' >
              <div>
                <ul>
                  <li> {"> "} FLEXIBLE & AFFORDABLE</li>
                  <li> {"> "} EASY TRACKING</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li> {"> "} SAVE AND SECURE MOVE</li>
                  <li> {"> "} DELIVERY ON TIME</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id='home_section3_sub2'>
          <img src="../Assets/banner8.jpg" alt="" />
        </div>
      </div>


      {/* <div className='section4'>
        <div className='sec4_h1' >
          <h2>MEET OUR DEDICATED TEAM</h2>
        </div>
        <div className='sec4_images'>
          <div className='sec4_img1'>
            <img src="../Assets/banner9.jpg" alt="" />
            <h4>MICHALE JOHN</h4>
          </div>
          <div className='sec4_img1'>
            <img src="../Assets/banner77.jpg" alt="" />
            <h4>MICHALE JOHN</h4>
          </div>
          <div className='sec4_img1'>
            <img src="../Assets/banner10.jpg" alt="" />
            <h4>MICHALE JOHN</h4>
          </div>

          <div className='sec4_img1'>
            <img src="../Assets/banner11.jpg" alt="" />
            <h4>MICHALE JOHN</h4>
          </div>
        </div>
      </div> */}


      <div className="sb5">
        <div className='sb5_div'>
          <h2>GREAT MOVING COMPANY</h2>
          <h5>If you have any Move need, simply call our 24 hour emergecny number.</h5>
          <h3>
            0123456789 OR{"  "}
            <Link id='lbt'  to="/contactus">
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
        <div className="lastbz" id="lastb2">
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
        <div className="lastb" id="lastb3">
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
        <div className="lastb" id="lastb4">
          <h3>CONTACT INFO</h3>
          <ul>
            <li className="ltli" id="ltli1">
              <FaLocationDot className='last_icons' />
              <p>Lorance Road 542B, Tailstoi Town 5248 MT, Wordwide Country</p>
            </li>
            <li className="ltli" id="ltli2">
              <IoCallSharp className='last_icons' />
              <p>01234567890</p>
            </li>
            <li className="ltli" id="ltli3">
              <IoIosMail className='last_icons' />
              <p>contact@moverpress.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home



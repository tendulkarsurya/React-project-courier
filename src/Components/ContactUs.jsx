
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Container } from 'react-bootstrap'
const ContactUs = () => {


  let input = document.querySelectorAll('input')
  let but = useRef()
 let checker=useRef()
  function validate(e) {

    let value = e.target.value

    if (value.length < 5) {
      but.current.setAttribute("disabled", "true")
      but.current.style.color = 'red'
      e.target.style.border = '2px solid red'
    } else {
      but.current.removeAttribute("disabled", "true")
      but.current.style.color = 'green'
      e.target.style.border = '2px solid green'
    }


    for (const char of value) {
      if (!(char >= "a" && char <= "z") &&
        !(char >= "A" && char <= "Z")) {
        alert(`${value.charAt(value.length - 1)} is not a valid character`)

        let newv = value.replace(/[^A-Za-z]/, '')
        e.target.value = newv
      }
    }
  }
  function phonechange(e) {
    let num = e.target.value
    if (num.length === 10) {
      e.target.style.border = '2px solid green'
      but.current.removeAttribute("disabled", "true")
    } else {
      e.target.style.border = '2px solid red'
      but.current.setAttribute("disabled", "true")
    }
  }
  function check() {
    let length = checker.current.value.length
    // console.log(checker.current.value.length);
   
    // length > 9 ? alert(`submited successfully`):alert(`fill the form`)


   if (length > 9 ) {
    alert(`submited successfully`)
   }
   return;
  }


  return (
    <div className='about_main'>
      <div id="sb1">
        <h1>Contact us</h1>
        <h5><Link className='link' id='colorA' to='/'>Home</Link> / Contact us</h5>
      </div>
      {/* ------------------------ */}
      <Container>
        {/* <div id="con_bx2">
          <p>
            You can talk to our online representative at any time. Please use our
            Live Chat System on our website or Fill up below instant messaging
            programs. Please be patient, We will get back to you. Our 24/7
            Support, General Inquireies Phone: + 0987 654 321
          </p>
        </div> */}

        <div id="form_div">
          <div className="form mb-2" id="form1" style={{ border: "1px solid lightgray", marginBottom: "10px" }}>
            <form action="#">
              <legend>Let's Talk</legend>
              <input
                type="text"
                name="name"
                onChange={validate}
                placeholder="Name"
                required
                id="text"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                id="text"
              />
              <input
                type="number"
                name="phone"
                ref={checker}
                onChange={phonechange}
                placeholder="Phone number"
                required
                id="text"
              />
              <textarea
                name="message"
                id="text"
                placeholder="Message... "
                style={{ height: "13`0px" }}

              ></textarea>
              <button type="submit" onClick={check} ref={but} id="fbut1">
                Submit Now
              </button>
            </form>
          </div>
          <div className="form mb-2" id="form2">
          <div id="contact_us_info">
          <h4>CONTACT INFO</h4>
          <p>
            Have any Queries? Let us know. We will clear it for you at the best.
          </p>
          <div className="mindiv" id="mindiv1">
            <div>
              <IoLocationOutline className="recic" />
            </div>
            <div>
              <h4>ADDRESS</h4>
              <p>Plumberx Company, 215, Mallin Street New Youk, NY 100 254</p>
            </div>
          </div>
          <div className="mindiv" id="mindiv2">
            <div>
              <IoIosMail className="recic" />
            </div>

            <div>
              <h4>EMAIL</h4>
              <p>
                contact@plumberx.com
                <br />
                support@plumberx.com
              </p>
            </div>
          </div>
          <div className="mindiv" id="mindiv3">
            <div>
              <FaPhone className="recic" />
            </div>
            <div>
              <h4>CONTACT US</h4>
              +0120 123 4 56 789
              <br />
              +0120 987 65419
            </div>
          </div>
        </div>
          </div>
        </div>

       
      </Container>
      {/* ------------------------- */}

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
              <p>9876543210</p>
            </li>
            <li className="ltli" id="ltli3">
              <IoIosMail className='last_icons' />
              <p>contact@moverpress.com</p>
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

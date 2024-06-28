import React from "react";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const Services = () => {
  return (
    <div className="overall_service">
      <div id="sb1">
        <h1>Services</h1>
        <h5><Link className='link' id='colorA' to='/'>Home</Link> / services</h5>
      </div>

      <Container className="container01">
        <div className="row">
          <div className="col-md-5">
            <div>
              <img
                src="../Assets/service-1.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>

          </div>
          <div className="col-md-7">
            <div>
              <h2 >WE ARE EXPERT IN MOVE YOUR NEEDS</h2>
              <p >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo  et quasi architecto beatae vitae
                dict eaque ipsa quae ab illo inventore veritatis et quasi
                architecto.
                <br />
                <br />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dict eaque ipsa quae ab illo inventore veritatis et quasi
                architecto.
                <br />
                <br />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dict eaque ipsa quae ab illo inventore veritatis et quasi
                architecto.

              </p>

            </div>
          </div>

        </div>
      </Container>


      <div id="sb3">
        <h2>WE OFFER SERVICES</h2>
        <div className="boximg">
          <div className="sb3b" id="sb3b1">
            <img
              src="../Assets/service-11.jpg"
              alt=""
            />
            <h4>HOUSEHOLD MOVE</h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui.
            </p>
          </div>
          <div className="sb3b" id="sb3b2">
            <img
              src="../Assets/service-12.jpg"
              alt=""
            />
            <h4>OFFICE RELOCATON</h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui.
            </p>
          </div>
          <div className="sb3b" id="sb3b3">
            <img
              src="../Assets/service-13.jpg"
              alt=""
            />
            <h4>COMMERCIAL MOVE</h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui.
            </p>
          </div>
        </div>
        <div className="boximg">
          <div className="sb3b" id="sb3b4">
            <img
              src="../Assets/service-14.jpg"
              alt=""
            />
            <h4>INTERNATIOANL MOVE</h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui.
            </p>
          </div>
          <div className="sb3b" id="sb3b5">
            <img
              src="../Assets/service-15.jpg"
              alt=""
            />
            <h4>CORPORATE MOVE</h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui.
            </p>
          </div>
          <div className="sb3b" id="sb3b6">
            <img
              src="../Assets/service-16.jpg"
              alt=""
            />
            <h4>STORAGE</h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui.
            </p>
          </div>
        </div>
      </div>
      <div id="sb4">
        <h2>WHY CHOOSE US</h2>
        <div id="sb4m" className="container">
          <div className="sb4b" id="sb4b1">
            <div>
              <img
                src="https://wp.zozotheme.com/wp-moveit/wp-content/uploads/2016/04/1-2.png"
                alt=""
              />
              <div></div>
            </div>
            <h4 className="mt-4">24/7 AVAILALITY</h4>
            <p>
              Lorem ipsum dolor sit amet, consecte tur elit. Vestibulum nec dio
              ipsum suspe ndisse cursus.
            </p>
          </div>
          <div className="sb4b" id="sb4b2">
            <div>
              <img
                src="https://wp.zozotheme.com/wp-moveit/wp-content/uploads/2016/04/2-4.png"
                alt=""
              />
              <div></div>
            </div>
            <h4 className="mt-4">DEDICATED TEAM</h4>
            <p>
              Lorem ipsum dolor sit amet, consecte tur elit. Vestibulum nec dio
              ipsum suspe ndisse cursus.
            </p>
          </div>
          <div className="sb4b" id="sb4b3">
            <div>
              <img
                src="https://wp.zozotheme.com/wp-moveit/wp-content/uploads/2016/04/3-4.png"
                alt=""
              />
              <div></div>
            </div>
            <h4 className="mt-4">GURANTEED </h4>
            <p>
              Lorem ipsum dolor sit amet, consecte tur elit. Vestibulum nec dio
              ipsum suspe ndisse cursus.
            </p>
          </div>
          <div className="sb4b" id="sb4b4">
            <div>
              <img
                src="https://wp.zozotheme.com/wp-moveit/wp-content/uploads/2016/04/4-3.png"
                alt=""
              />
              <div></div>
            </div>
            <h4 className="mt-4">FREE ESTIMATE</h4>
            <p>
              Lorem ipsum dolor sit amet, consecte tur elit. Vestibulum nec dio
              ipsum suspe ndisse cursus.
            </p>
          </div>
        </div>
      </div>

      <div className="sb5">
        <div className='sb5_div'>
          <h2>GREAT MOVING COMPANY</h2>
          <h5>If you have any Move need, simply call our 24 hour emergecny number.</h5>
          <h3>
            1234567890 OR{"  "}
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

export default Services;

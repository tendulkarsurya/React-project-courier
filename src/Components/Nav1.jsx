import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
const Nav = () => {
  return (
    <div className="header_top">
      <div className="htop_sub" id="htop_sub1">
      <FaLocationDot className="nav_icon" />
      <span className="span">56, Building- Avenue-96, New York
      </span>
      </div>
      <div className="htop_sub" id="htop_sub2">
      <IoIosMail className="nav_icon" />
      <span className="span"> 
         courierpacking@gmail.com
      </span>
      </div>
      <div className="htop_sub" id="htop_sub3" >
        <p>
          <span>Call now  1234567890</span>
          
        </p>
      </div>
    </div>
  );
};

export default Nav;

// import React from 'react'
// import { IoCallSharp } from "react-icons/io5";
// import { MdMailOutline } from "react-icons/md";

// const Nav1 = () => {
//   return (
//     <div>
//       <div className='first_nav'>
//         <div id='first_nav_sub1'>
//           <IoCallSharp />
//           <a href="https://wp.zozotheme.com/wp-moveit/#">
//             56, Building- Avenue-96, New York </a>
//         </div>
//         <div id='first_nav_sub2'>
//           <MdMailOutline />
//           <a href="https://wp.zozotheme.com/wp-moveit/#">
//             deepakchandra076@gmail.com
//           </a>
//         </div>
//         <div id='first_nav_sub3'>
//           <p>Call now 1800 654 896</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Nav1

import Swal from 'sweetalert2'
import React, { useEffect,useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';
import { NavLink } from 'react-router-dom';



function SideBar({children}) {



    const [isOpen,setIsOpen]=useState(false)
    const toggle=()=>setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:(<i className="bx bx-home"></i>)
        },
        {
            path:"/About",
            name:"About",
            icon:(<i className="bx bx-user"></i>)
        },
        {
            path:"/Resume",
            name:"Resume",
            icon:(<i className="bx bx-file-blank"></i>)
         
        },
        {
            path:"/Projects",
            name:"Projects",
            icon:(<i className="bx bx-book-content"></i>)
        },
        {
            path:"/Contact",
            name:"Contact",
            icon:(<i className="bx bx-envelope"></i>)
        },

       
    ]

const toggleClick=(e)=>{

      
 
      document.body.classList.toggle('mobile-nav-active')
      document.body.classList.toggle('bi-list')
      document.body.classList.toggle('bi-x')   
      
}




    return(
        <>

<i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={toggleClick}></i>

<header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src="/img\myPicture.jpg" alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light">Mohamed Gouali</h1>
        <div className="social-links mt-3 text-center">
          <NavLink target="_blank" to={"https://github.com/gouali-med"}  className="google-plus"><i className='bx bxl-github'></i></NavLink>
          <NavLink target="_blank" to={"https://www.linkedin.com/in/mohamed-gouali-5873191a3/"}   className="linkedin"><i className="bx bxl-linkedin" ></i></NavLink>
          <NavLink target="_blank" to={"https://www.instagram.com/mohamedgouali"}   className="instagram"><i className="bx bxl-instagram"></i></NavLink>

        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
        {
            menuItem.map((item,index)=>(
                <li key={index}>  
                    <NavLink to={item.path}   className={({ isActive }) => isActive ? "nav-link scrollto active" : "nav-link scrollto" }>
                        <i  className="icon">{item.icon}</i>
                        <span >{item.name}</span>
                
                    </NavLink>
                </li>
            ))
         }
         
        </ul>
      </nav>
    </div>
  </header>


            <main id="main">{children}</main>
      
        </>
    )
}


export default SideBar

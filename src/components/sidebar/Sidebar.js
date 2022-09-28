import React from 'react';
import './Sidebar.css'
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdWorkOutline } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
const Sidebar = ()=>{
    return(
        <>
        <div className="sidebar">
            <div className="sidebar2">
             <div className="sidebar3 d-flex flex-column justify-content-evenly ">
                <div className="home icon d-flex align-items-center justify-content-center"><AiOutlineHome/></div>
                <div className="aboutme icon d-flex align-items-center justify-content-center"><CgProfile/></div>
                <div className="work icon d-flex align-items-center justify-content-center"><MdWorkOutline/></div>
                <div className="contact icon d-flex align-items-center justify-content-center"><FiPhone/> </div> 
            </div>
            </div>
        </div>
           </>
    )
}
export default Sidebar;
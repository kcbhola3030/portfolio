import React,{Component} from "react";
import ReactDOM from 'react-dom';
import './Home.css';
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdWorkOutline } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';




const Home =()=>{
    return(
        <div>
           
        <div className="sidebar">
            <div className="sidebar2">
             <div className="sidebar3 d-flex flex-column justify-content-evenly ">
                <div className="home icon"><AiOutlineHome/></div>
                <div className="aboutme icon"><CgProfile/></div>
                <div className="work icon"><MdWorkOutline/></div>
                <div className="contact icon"><FiPhone/> </div> 
            </div>
            </div>
        </div>
        <div className="tilt" >
        <div className="stars"></div>
        <div className="twinkling" ></div> 
        </div>
        </div>
    )
    
}

export default Home;
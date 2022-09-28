import React,{Component} from "react";
import ReactDOM from 'react-dom';
import './Home.css';
import Sidebar from "../sidebar/Sidebar";


const Home =()=>{
    return(
        <div>
        <Sidebar/>
        <div className="tilt" >
        <div className="stars"></div>
        <div className="twinkling" ></div> 
        </div>
        </div>
    )
    
}

export default Home;
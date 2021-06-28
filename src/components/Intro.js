import React from 'react';
import abhik from '../images/abhik.jpg';
import abhik2 from '../images/abhik2.jpg';
import abhik3 from '../images/abhik3.jpg';
import abhik4 from '../images/abhik4.jpg';
import { Jumbotron,Container } from 'react-bootstrap';

const Intro = () => {

    return (
        <div>
            <div className="d-flex">
            <img src={abhik} alt="Abhik1" id="introImages"></img>
            <img src={abhik2} alt="Abhik2" id="introImages"></img>
            <img src={abhik3} alt="Abhik3" id="introImages"></img>
            <img src={abhik4} alt="Abhik4" id="introImages"></img>
            <h1 className="display-1 text-center" style={{position:'absolute',marginTop:'14%',fontSize:'10rem',marginLeft:'15%'}}>Hi, I am Abhik</h1>
            </div>
            <div style={{width:'100%',height:'1.5%',backgroundColor:'#FFF',position:'absolute',marginTop:'-0.5rem',}}><br>
            </br></div>
        </div>
    )
}

export default Intro

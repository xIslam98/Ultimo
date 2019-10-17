import React, { Component } from 'react';
import './sass/App.scss'

function Home(){
return(
        <div className='Home'>
            <div className="Header">
                <div className="upper">
                <div className="links-header"> 
                        <ul className="links">
                        <li className="first-link"> All Demos </li>
                        <li className="second-link"> Features </li>
                        <li className="third-link"> Buy Me </li>
                        </ul>
                    </div>
                    <div className="select-nation">
                    <div class="dropdown">
                    <button class="dropbtn">English</button>
                    <div class="dropdown-content">
                        <a href="#">English</a>
                        <a href="#">Italiano</a>
                    </div>
                    </div>
                    </div>    
                </div>
            </div>
                <div className="image-logo">
                    <img src="http://ultimo.infortis-themes.com/demo/skin/frontend/ultimo/default/images/logo-3.png"></img>
                </div>
        </div>                
)
}export default Home;



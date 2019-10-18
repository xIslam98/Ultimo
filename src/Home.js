import React, { Component } from 'react';
import './sass/App.scss'
import phone from './phone.png'
import compare from './compare.png'
import cart from './cart.png'
import search from './search.png'
import homelogo from './homelogo.png'


function Home(){
    return(
        <div className='Home'>
            <div className="Header-up">
                <div className="Header">
                    <div className="upper">
                        <div className="links-header"> 
                            <ul className="links">  
                                <li><img className="phone" img src={phone}></img> Call +001 555 801</li> 
                                <li className="first-link"> All Demos </li>
                                <li className="second-link"> Features </li>
                                <li className="third-link"> Buy Me </li>
                                <li>Welcome msg!</li>
                            </ul>
                        </div>
                        <div className="select-nation">
                            <div className="dropdown">
                                <button className="dropbtn">
                                    <img className="flag-eng" src="http://ultimo.infortis-themes.com/demo/skin/frontend/ultimo/default/images/flags/default.png"></img>English
                                </button>
                                <div className="dropdown-content">
                                    <a href="#">  <img className="flag-eng" src="http://ultimo.infortis-themes.com/demo/skin/frontend/ultimo/default/images/flags/default.png"></img> English</a>
                                    <a href="#"> <img className="flag-ita" src="http://ultimo.infortis-themes.com/demo/skin/frontend/ultimo/default/images/flags/it.png"></img>Italiano</a>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="second-header">
                    <div className="image-logo">
                        <img src="http://ultimo.infortis-themes.com/demo/skin/frontend/ultimo/default/images/logo-3.png"></img>
                        <div className="second-right">
                            <ul className="links2">
                                <li className="account">Account</li>
                                <li className="wishlist">Wishlist</li>
                                <li className="login">Log In</li>
                            </ul>
                            <span className="dropdown2">
                            <span className="compare"><img className="compare-logo" src={compare}></img>Compare</span>
                            <a href="#"><span className="compare-content">You Have no items to compare</span></a> 
                            </span>
                            <span className="dropdown3">
                                <span className="cart"><img className="cart-logo" src={cart}></img>Cart</span>
                                <span className="cart-content"><a href="#">You Have no items to compare</a></span>
                            </span>
                            <input id="search" type="text" maxLength="128"></input><button type submit title="search" className="search"><img className="search-img" src={search}></img></button>
                        </div>
                    </div>
                </div>
                <div className="body">
                <div className="back">
                    <div className="navbar">
                        <ul className="navbar">
                            <li><a className="home-navbar" href="#home"><img className="home-logo" src={homelogo}></img>Home</a></li>                                
                                <li className="dropdown4">
                                    <a className="women">Women</a>
                                <div className="women-content">
                                    <div className="women-low" >
                                        <a className="women1">Sunglasses</a>
                                        <a className="women1">Shirt & Tops</a>
                                        <ul className="women-list">
                                            <li className="women-list2"><span className="movement">></span> Size - Small</li>
                                            <li className="women-list2"> <span className="movement">></span> Size - Medium</li>
                                            <li className="women-list2"> <span className="movement">></span> Size - Large</li>
                                        </ul>
                                        <a className="women1"> Designer Tops</a>
                                        <a className="women1"> Blouses </a>
                                        <a className="women1"> Sock & Thights</a>
                                        <a className="women1"> Going Out</a>
                                        <a className="women1"> Party </a>
                                    </div>
                                    <div className="img-women"><img className="img-women2" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/other/menu/01.jpg"></img> 
                                    <img className="img-gift" src=" https://icon-library.net/images/search-icon-white-png/search-icon-white-png-11.jpg"></img> </div>
                                </div>                                   
                            </li>                                          
                            <li><a className="Fashion">Fashion</a></li>
                            <li><a className="Electronics">Electronics</a></li>
                            <li><a className="Digital">Digital</a></li>
                            <li><a className="Custom  ">Custom</a></li>
                            <li><a className="About">About Us</a></li>
                        </ul>
                         
                    </div>
                </div>
            </div>
            </div>
        </div> 
                       
    )
}export default Home;



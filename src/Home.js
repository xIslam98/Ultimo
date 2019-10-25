import React, { Component } from 'react';
import './sass/App.scss';
import homelogo from './homelogo.png';
import news from './new.png';
import hot from './hot.png';
import Slidero from './carousel';
import Carousel from './carousel-item';
import SliderFeature from './carousel-product';
import SliderPhone from './carousel-phone';
import SliderBrand from './carousel-brand';
import './font-awesome/css/brands.css';
import './font-awesome/css/solid.css';
import './font-awesome/css/all.css'

function Home(){
    return(
    <div>
        <div className="body">
                <div className="back">
                    
                    <div className="Slider">
                        <Slidero />
                        <span class="section-line2"></span>
                    </div>
                    <div className="customizable">
                   
                        <i class="fas fa-paint-roller"></i>
                        <div className="icon1-contenent">
                            <h6 className="title-h6" >Customizable Design</h6>
                            <h3 className="title-h3">Unlimited Colors</h3>
                            <p>You have never seen so many options! Change colors of dozens of elements, apply textures, upload background images...</p>
                            <a className="paraf-custom2">See all features</a>

                        </div>
                        <i class="fas fa-mobile-alt"></i>
                        <div className="icon1-contenent">
                            <h6 className="title-h6" >12-COLUMN GRID</h6>
                            <h3 className="title-h3" >Responsive Layout</h3>
                            <p>Ultimo can be displayed on any screen. It is based on fluid grid system. If screen is resized, layout will be automatically adjusted..</p>
                            <a className="paraf-custom2">See all features</a>

                        </div>
                        <i class="fas fa-star"></i>
                        <div className="icon1-contenent">
                            <h6 className="title-h6">CONTENT PLACEHOLDERS</h6>
                            <h3 className="title-h3" >50+ CMS blocks</h3>
                            <p>You can use content placeholders to display custom content in almost every part of the store. Import sample CMS blocks from the demo...</p>
                            <a className="paraf-custom2">See all features</a>

                        </div>

                    </div>
                    <div className="featured-product"> 
                    <span className="featured-our">Our Featured Products</span>
                    <span class="section-line"></span>
                        <SliderFeature />
                    </div>
                    <div className="new-in-store">
                    <span className="featured-our">New in store</span>
                    <span class="section-line"></span>
                        <SliderPhone />
                    </div>
                    <div className="sample-custom-banner">
                    <span className="featured-our">Sample Custom Banners</span>
                    <span class="section-line"></span>
                        <div className="Banner">
                            <div className="first-banner">
                                <img className="img-banner" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/banners/1a.png"></img>
                                <img className="img-banner2" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/banners/1b.png"></img>
                                <img className="img-banner3" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/banners/1c.png"></img>
                            </div>
                            <div className="second-banner">
                                <div className="customizable">                  
                                <i class="fas fa-anchor"></i>
                                    <div className="icon-banner-contenent">
                                        <h6 className="title-h6" >SECONDARY HEADING</h6>
                                        <h3 className="title-h3">Sample Heading</h3>
                                        <p>Lorem ipsum dolor sit, consectetur adipiscing elit. Etiam neque velit, blandit rory solare de equis.</p>
                                        <a className="paraf-custom2">Read More ></a>

                                    </div>
                                    <i class="fas fa-gift"></i>
                                    <div className="icon1-banner-contenent">
                                        <h6 className="title-h6" >SECONDARY HEADING</h6>
                                        <h3 className="title-h3" >Feature Title</h3>
                                        <p>Lorem ipsum dolor sit, consectetur adipiscing elit. Etiam neque velit, blandit sed scelerisque quis.</p>
                                        <a className="paraf-custom2">Read More ></a>

                                    </div>
                                    <i class="fas fa-feather-alt"></i>
                                    <div className="icon1-banner-contenent">
                                        <h6 className="title-h6">SECONDARY HEADING</h6>
                                        <h3 className="title-h3" >Sample Titles</h3>
                                        <p>Lorem ipsum dolor sit, consectetur adipiscing elit. Etiam neque velit, blandit sed scelerisque quis.</p>
                                        <a className="paraf-custom2">Read More > </a>
                                    </div>
                                    <i class="fas fa-clock"></i>
                                    <div className="icon1-banner-contenent">
                                        <h6 className="title-h6">SECONDARY HEADING</h6>
                                        <h3 className="title-h3" >Feature Title</h3>
                                        <p>Lorem ipsum dolor sit, consectetur adipiscing elit. Etiam neque velit, blandit sed scelerisque quis.</p>
                                        <a className="paraf-custom2">Read More > </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Product-Brands">
                        <div className="brand-carousel">                      
                            <div className="featured-product"> 
                            <span className="featured-our">Product Brands</span>
                            <span class="section-line"></span>
                            </div>
                        <SliderBrand />
                        </div>
                        <div className="link-brand">
                            <ul className="ul-brand">
                                <li className="li-brand1">Site Map</li>
                                <li className="li-brand1">Search Terms</li>
                                <li className="li-brand1">Advanced Search</li>
                                <li className="li-brand1">Orders and Returns</li>
                                <li className="li-brand1">Contact Us</li>
                                <li className="li-brand2">Custom Service</li>
                                <li className="li-brand2">About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>                     
    )
}export default Home;



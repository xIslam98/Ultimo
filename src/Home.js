import React, { Component } from 'react';
import './sass/App.scss';
import phone from './phone.png';
import compare from './compare.png';
import cart from './cart.png';
import search from './search.png';
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
                            <li className="dropdown5" >
                            <a className="fashion"><img className="img-new" src={news} ></img>Fashion</a>
                        <div className="fashion-content">
                            < div className="adjust">
                                <a className="fashion1"> <img className="img-new2" src={hot}></img>  Tops</a>
                                    <ul className="list-fashion1">
                                        <li className="women-list2"><span className="movement">></span>Casual Tops</li>
                                        <li className="women-list2"> <span className="movement">></span> Shirts</li>
                                        <li className="women-list2"> <span className="movement">></span> Tunics</li>
                                        <li className="women-list2"> <span className="movement">></span> Vest</li>
                                    </ul>
                            </div>
                            <div className ="adjust-bags">
                                <a className="fashion1"> <img className="img-new2" src={hot}></img>  Bags</a>
                                    <ul className="list-fashion1">
                                        <li className="women-list2"><span className="movement">></span>Designer Bags</li>
                                        <li className="women-list2"> <span className="movement">></span> Handbags</li>
                                        <li className="women-list2"> <span className="movement">></span> Purses</li>
                                        <li className="women-list2"> <span className="movement">></span> Shoulder Bags</li>
                                    </ul>
                            </div>
                            <div className ="adjust-shoes"> 
                                <a className="fashion1"> <img className="img-new2" src={news} ></img> Shoes</a>
                                <ul className="list-fashion1">
                                                <li className="women-list2"><span className="movement">></span>Flat Shoes</li>
                                                <li className="women-list2"> <span className="movement">></span> Flat Sandals</li>
                                                <li className="women-list2"> <span className="movement">></span> Boots</li>
                                                <li className="women-list2"> <span className="movement">></span> Heels</li>
                                            </ul>
                            </div>    
                            <div className ="adjust-jewlery"> 
                                <a className="fashion1">Jewlery</a>
                                <ul className="list-fashion1">
                                                <li className="women-list2"><span className="movement">></span>Bracelets</li>
                                                <li className="women-list2"> <span className="movement">></span> Necklaces & Pendants</li>
                                                <li className="women-list2"> <span className="movement">></span> Pins & Brooches</li>
                                            </ul>
                             </div>   
                                <div className="adjust-recommended">
                                            <a className="fashion1">Recommended Bags</a>
                                               <div className="carousel-item">
                                                   <Carousel />
                                               </div>
                                </div> 
                                <div className ="adjust-dresses"> 
                                <a className="fashion1">Dresses</a>
                                <ul className="list-fashion1">
                                                <li className="women-list2"><span className="movement">></span>Casual Dresses</li>
                                                <li className="women-list2"> <span className="movement">></span> Evenening</li>
                                                <li className="women-list2"> <span className="movement">></span> Designer</li>
                                                <li className="women-list2"> <span className="movement">></span> Party</li>
                                            </ul>
                             </div>
                             <div className ="adjust-lingerie"> 
                                <a className="fashion1">Lingerie</a>
                                <ul className="list-fashion1">
                                                <li className="women-list2"><span className="movement">></span>Bras</li>
                                                <li className="women-list2"> <span className="movement">></span>Bodies</li>
                                                <li className="women-list2"> <span className="movement">></span> Lingerie Sets</li>
                                                <li className="women-list2"> <span className="movement">></span> Shapewear</li>
                                            </ul>
                             </div>
                             <div className ="adjust-jackets"> 
                                <a className="fashion1">Jackets</a>
                                <ul className="list-fashion1">
                                                <li className="women-list2"><span className="movement">></span>Coats</li>
                                                <li className="women-list2"> <span className="movement">></span> Jackets</li>
                                                <li className="women-list2"> <span className="movement">></span> Leather Jackets</li>
                                                <li className="women-list2"> <span className="movement">></span> Blazers</li>
                                            </ul>
                             </div>  
                             <div className ="adjust-swimwear"> 
                                <a className="fashion1">Swimwear</a>
                                <ul className="list-fashion1">
                                                <li className="women-list2"><span className="movement">></span>Swimsuits</li>
                                                <li className="women-list2"> <span className="movement">></span> Beach</li>
                                                <li className="women-list2"> <span className="movement">></span> Clothing</li>
                                                <li className="women-list2"> <span className="movement">></span> Bikinis</li>
                                            </ul>
                             </div> 
                             <div className="Features"> 
                                <ul className="feature-list">
                                    <li className="feature">Featured Categories: </li>
                                    <li className="feature1">Casual Tops</li>
                                    <li className="feature1">Dresses </li>
                                    <li className="feature1"> Shirt & Blouses</li>    
                                </ul> 
                                </div>                             
                            </div>                       
                            </li>
                            <li className="dropdown6">
                            <a className="electronics">Electronics</a>
                            <div className="electronics-content">
                            <div className="electronics-reco"> 
                                <ul className="electronics-list">
                                    <li className="electronics-1">Recommended:</li>
                                    <li className="electronics-2">Configurable</li>
                                    <li className="electronics-2">Galaxy S3</li>
                                    <li className="electronics-2"> Galaxy S4</li>  
                                    <li className="electronics-2"> Iphone 5</li>
                                    <li className="electronics-3"> Add</li>
                                    <li className="electronics-4"> Custom </li>
                                    <li className="electronics-5"> Links</li>  
                                </ul> 
                            </div>
                            <div className="img-rotate">
                                <div className="board">
                                    <img className="image-rot" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/other/menu/02.jpg"></img> 
                                  
                                </div>
                                    <div className="other-board">
                                        Go to Category
                                    </div> 
                                </div>
                                <div className="label-rotate">
                                   <div className="phone">Phone</div>                                  
                                   <div className="phone-up">Phone & Tablets</div>                                 
                                    <div className="call">Call</div>
                                    <div className="call-up">Accessories</div>                                          
                                    <div className="gift2">Gift</div>
                                    <div className="gift2-up">Cameras</div>       
                                </div>
                                <div className="all">
                                <div className="feature-cat">
                                <h4 className="img-down-h4">Featured Category</h4> 
                                    <p className="img-down"> This is a custom block ready to display any content. You can add blocks to any category in the catalog... </p>
                                    <button className="img-down-button">View Category --></button> 
                                </div>
                                <div className="lowest">
                                <a className="title-list">Phone & Tablets</a>
                                    <ul className="types-list">
                                        <li className="type-list2"><span className="movement">></span>Sample</li>
                                        <li className="type-list2" ><span className="movement">></span>Samsung</li>
                                        <li className="type-list2" ><span className="movement">></span>Apple</li>
                                            <ul>
                                                <li className="type-list2"><span className="movement">></span>iPhone 3GS</li>
                                                <li className="type-list2"><span className="movement">></span>iPhone 4</li>
                                                <li className="type-list2"><span className="movement">></span>iPhone 4S</li>
                                                <li className="type-list2"><span className="movement">></span>iPhone 5</li>
                                                <li className="type-list2"><span className="movement">></span>iPad Retina</li>
                                                <li className="type-list2"><span className="movement">></span>iPad Mini</li>
                                                <li className="type-list2"><span className="movement">></span>iPad Air</li>
                                            </ul>
                                            <li className="type-list2" ><span className="movement">></span>Blackberry</li>
                                            <li className="type-list2" ><span className="movement">></span>Motorola</li>
                                            <li className="type-list2" ><span className="movement">></span>HTC</li>
                                            <li className="type-list2" ><span className="movement">></span>Huawei</li>
                                    </ul>
                                    <a className="title-list2">Accessories</a>
                                    <ul className="types-list3">
                                        <li className="type-list2"><span className="movement">></span>Headsets</li>
                                        <li className="type-list2" ><span className="movement">></span>Bluetooth Wireless</li>
                                        <li className="type-list2" ><span className="movement">></span>Earphones</li>
                                        <li className="type-list2"><span className="movement">></span>Batteries</li>
                                        <li className="type-list2"><span className="movement">></span>Screen Protectors</li>
                                        <li className="type-list2"><span className="movement">></span>Memory Cards</li>
                                        <li className="type-list2"><span className="movement">></span>Cables & Adapters</li>
                                        <li className="type-list2"><span className="movement">></span>Cleaning Cloth</li>
                                        <li className="type-list2"><span className="movement">></span>Chargers</li>
                                        <li className="type-list2"><span className="movement">></span>Cases</li>                            
                                        <li className="type-list2" ><span className="movement">></span>Covers</li>
                                        <li className="type-list2" ><span className="movement">></span>Skins</li>
                                        <li className="type-list2" ><span className="movement">></span>HTC</li>
                                        <li className="type-list2" ><span className="movement">></span>Huawei</li>
                                    </ul>
                                    <a className="title-list3">Cameras</a>
                                    <ul className="types-list4">
                                        <li className="type-list2"><span className="movement">></span>Digital Cameras</li>
                                        <li className="type-list2" ><span className="movement">></span>Camcorders</li>
                                        <li className="type-list2" ><span className="movement">></span>Lenses</li>
                                        <li className="type-list2"><span className="movement">></span>Filters</li>
                                        <li className="type-list2"><span className="movement">></span>Tripods</li>                                   
                                    </ul>
                                </div>
                                </div>                        
                            </div>
                            </li>
                            <li className="dropdown7" >
                                <a className="digital">Digital</a>
                                <div className="digital-content">
                                        <div className="digitale">
                                            <a className="digital-type">eBooks</a>
                                            <a className="digital-type">Themes</a>
                                                <ul>
                                                    <li className="digit-list2"><span className="movement">></span>WordPress</li>
                                                    <li className="digit-list2" ><span className="movement">></span>Magento</li>
                                                    <li className="digit-list2" ><span className="movement">></span>OpenCart</li>
                                                    <li className="digit-list2" ><span className="movement">></span>PrestaShop</li>
                                                    <li className="digit-list2" ><span className="movement">></span>Drupal</li>
                                                </ul>
                                            <a className="digital-type" >Music</a>
                                            <a className="digital-type" >Software</a>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown8" >
                                <a className="custom">Custom</a>
                            <div className="custom-content">
                                <div className="wrap-custom">
                                    <div className="title-custom-div">
                                        <h3 className="title-custom">
                                        Responsive Magento Theme
                                        </h3>
                                        <p className="paraf-custom">
                                        Ultimo is a premium Magento theme with advanced admin module. It's extremely customizable and fully responsive. Can be used for every type of store.
                                        </p>
                                        <p className="paraf-custom2">Buy This Magento Theme</p>
                                    </div>
                                    <div className="image-1">
                                        <img className="image-custom" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/menu/custom/01.png"></img>
                                        <h3>50+ CMS blocks</h3>
                                        <p className="paraf-custom" >You can use CMS blocks as content placeholders to display custom content in almost every part of the store. Import sample CMS blocks from the demo.</p>
                                        <a className="paraf-custom2" >See All features</a>
                                    </div>
                                    <div className="image-2">
                                        <img  className="image-custom" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/menu/custom/02.png"></img>
                                        <h3>190-pages documentation</h3>
                                        <p className="paraf-custom" >The best Magento theme documentation on ThemeForest. It also describes selected Magento features which you need to know when starting to work with Magento.</p>
                                        <a className="paraf-custom2" >See All features</a>
                                    </div>
                                    <div className="image-3">
                                        <img className="image-custom" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/menu/custom/03.png"></img>
                                        <h3>Easy to customize</h3>
                                        <p className="paraf-custom" >Use Ultimo as a starting point for your custom projects. Unlike many other themes, Ultimo lets you create multiple custom sub-themes (theme variants) for your clients.</p>
                                        <a className="paraf-custom2" >See All features</a>
                                    </div>
                                </div>
                            </div>
                            </li>
                            <li><a className="About">About Us</a></li>
                        </ul>
                         
                    </div>
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
                <div className="back-about">
                    <div className="about">
                        <div className="about-first"> 
                            <div className="about-1">                
                                <div className="about-title"> About Ultimo </div>
                                <img className="about-img" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/logo-small.png"></img>
                                <p>Ultimo is a premium Magento theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive.</p>
                                <a className="paraf-custom2">Buy this theme ></a>                            
                                </div> 
                                    
                                        <div className="about-2">
                                            <div className="about-title"> Theme Features </div>
                                            <ul className="about-list">
                                                <li className="about-list-element"><span className="movement">></span>Theme Features</li>
                                                <li className="about-list-element"><span className="movement">></span>Typography</li>
                                                <li className="about-list-element"><span className="movement">></span>Image Banners</li>
                                                <li className="about-list-element"><span className="movement">></span>Font Icons</li>
                                                <li className="about-list-element"><span className="movement">></span>Grid System</li>
                                                <li className="about-list-element"><span className="movement">></span>Responsive Utilities</li>
                                                <li className="about-list-element"><span className="movement">></span>Banner Slideshow</li>
                                                <li className="about-list-element"><span className="movement">></span>Follow Us On Twitter</li>
                                                <li className="about-list-element"><span className="movement">></span>Magento Themes</li>                                             
                                            </ul>
                                        </div>
                                        <div className="about-3">
                                        <div className="about-title"> Key Features </div> 
                                               <div className="about-multiple"> <div className="about-number1"><i class="fab fa-airbnb"></i></div><p className="para1">Unlimited colors, hundreds of customizable elements</p></div>
                                               <div className="about-multiple"> <div className="about-number2"><i class="fab fa-android"></i></div><p className="para1">Customizable responsive layout based on fluid grid</p></div>
                                               <div className="about-multiple"> <div className="about-number3"><i class="fab fa-facebook-f"></i></div><p className="para1">50+ placeholders to display custom content</p></div>
                                               <div className="about-multiple"> <div className="about-number4"><i class="fab fa-linkedin"></i></div><p className="para1">Create your custom sub-themes (variants)</p></div>
                                        </div>
                                        <div className="about-4">
                                        <div className="about-title"> Company Info </div> 
                                                <div className="about-multiple"> <div className="about-item1"><i class="fas fa-tty"></i></div><div className="about-block"><p className="para">Call Us +001 555 801</p><p className="para" >Fax +001 555 802</p></div></div>
                                               <div className="about-multiple"> <div className="about-item2"><i class="fas fa-mobile"></i></div><div className="about-block"><p className="para" >+77 123 1234</p><p className="para">+42 98 9876</p></div></div>
                                               <div className="about-multiple"> <div className="about-item3"><i class="fas fa-envelope"></i></div><div className="about-block"><p className="para" >boss@example.com</p><p className="para">me@example.com</p></div></div>
                                               <div className="about-multiple"> <div className="about-item4"> <i class="fab fa-skype"></i></div><div className="about-block"><p p className="para">Skype: samplelogin</p><p p className="para">skype-support</p></div></div>
                                        </div>
                        </div>
                        <span class="section-line"></span>
                        <div className="about-second">
                            <div className="about-brand-list">
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-google-plus-square"></i>
                                <i class="fab fa-youtube"></i>
                                <i class="fab fa-vimeo-v"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-pinterest-p"></i>
                                <i class="fab fa-linkedin-in"></i>
                                <i class="fab fa-vk"></i>
                                <i class="fab fa-renren"></i>
                            </div>
                        <div className="newsletter">
                            <p className="p-newsletter">Newsletter</p>
                                <input className="input-newsletter" placeholder="Enter your email address"></input>
                                <button className="button-subscribe">Subscribe</button>
                        </div>
                        
                        </div>
                    </div>
                </div>
                <div className="back-footer">
                    <div className="footer-first">
                        <div className="first-element-footer">
                            <span className="about-title" >Question</span>
                            <ul>
                                <li className="list-footer"><span className="movement">></span>Terms</li>
                                <li className="list-footer"><span className="movement">></span>Conditions</li>
                                <li className="list-footer"><span className="movement">></span>About Us</li>
                                <li className="list-footer"><span className="movement">></span>Example</li>
                            </ul>
                        </div>
                        <div className="first-element-footer">
                            <span className="about-title" >Shipping</span>
                            <ul>
                                <li className="list-footer"><span className="movement">></span>Delivery</li>
                                <li className="list-footer"><span className="movement">></span>Track your order</li>
                                <li className="list-footer"><span className="movement">></span>Buy gift cards</li>
                                <li className="list-footer"><span className="movement">></span>Returns</li>
                            </ul>
                        </div>
                        <div className="first-element-footer">
                            <span className="about-title" >About Us</span>
                        <ul>
                                <li className="list-footer"><span className="movement">></span>Responsive</li>
                                <li className="list-footer"><span className="movement">></span>Magento Themes</li>
                                <li className="list-footer" ><span className="movement">></span>E-commerce</li>
                                <li className="list-footer"><span className="movement">></span>The company</li>
                        </ul>
                        </div>
                        <div className="first-element-footer">
                            <span className="about-title" >News</span>
                            <ul>
                                <li className="list-footer"><span className="movement">></span>What's new</li>
                                <li className="list-footer"><span className="movement">></span>Products</li>
                                <li className="list-footer"><span className="movement">></span>Magento Template</li>
                                <li className="list-footer"><span className="movement">></span>Our sites</li>
                            </ul>
                        </div>
                        
                        <div className="first-element-footer">
                            <span className="about-title" >Additional Info</span> 
                            <div className="regroup">                         
                            <i class="fas fa-map-marker-alt"></i>
                                <div className="about-block">
                                    <p className="para" >Friends Inc., 90 Bedford St </p>
                                    <p className="para" >New York, NY 041, USA</p>
                                </div>
                            </div>
                            <div className="regroup">
                            <i class="fab fa-twitter-square"></i>
                                <div div className="about-block">
                                    <p className="para" >Follow us on our </p>
                                    <p className="para">Twitter account</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="back-footer-second">
                    <div className="last-div">
                   <span className="last-element"> Copyright © 2012-2013 Premium Magento Themes by Infortis. All Rights Reserved.
                    This is a demo store. Any orders placed through this store will not be honored or fulfilled.</span>
                    <img className="image-footer" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/payment.gif"></img>
                    </div>
                </div>
            </div>
    </div>                      
    )
}export default Home;



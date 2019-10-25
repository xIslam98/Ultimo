import React, { Component } from 'react';
import phone from './phone.png';
import compare from './compare.png';
import cart from './cart.png';
import search from './search.png';
import homelogo from './homelogo.png';
import news from './new.png';
import hot from './hot.png';
import Carousel from './carousel-item';
function Header(){
    return(
<div>
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
                    <div className="wrap-search"><input id="search" type="text" maxLength="128"></input><button type submit title="search" className="search"><img className="search-img" src={search}></img></button></div>
                </div>
            </div>
        </div>
    </div>
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
                            <span class="section-line"></span>
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
    </div>
</div>
    )
}export default Header;
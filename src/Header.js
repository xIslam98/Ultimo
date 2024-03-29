import React, { Component } from 'react';
import phone from './phone.png';
import compare from './compare.png';
import cart from './cart.png';
import search from './search.png';
import homelogo from './homelogo.png';
import news from './new.png';
import hot from './hot.png';
import Carousel from './carousel-item';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';
let contact;
let utente;
let index;
let inserisci=0;
let contprice=0;
let cont1=0
export default class Header extends Component{
    constructor (props) {
        super(props)
        this.state = {
            data: "undefined",
            data2:"undefined",
            cart:"mobile-cart",
            profile:"mobile-profile",
            search:"mobile-search",
            navbarcomp:"mobile-navbarcomp",
            accordiwomen:"list-complete"
            
        }
        this.takeIndex=this.takeIndex.bind(this);
        this.OpenMobileCart=this.OpenMobileCart.bind(this)
        this.OpenMobileProfile=this.OpenMobileProfile.bind(this)
        this.OpenMobileSearch=this.OpenMobileSearch.bind(this)
        this.OpenNavbarcomp=this.OpenNavbarcomp.bind(this)
    }
    accordionAll(state_index,index){
        if(state_index==="list-complete"){
          
              this.setState({
                [index]: "list-complete-active"
        }); 
        }else{
            this.setState({
                [index]:"list-complete"
            })
        }
     
    }
componentDidMount () { 
    axios.get('http://127.0.0.1:7000/utenti')
      .then((response) => {
    this.data2 = response.data;
      console.log(this.data2)
      this.setState({data2: response.data});
      });
    axios.get('http://127.0.0.1:7000/menu')
    .then((response) => {
  this.data = response.data;
  console.log(this.data)
  this.setState({data: response.data});
  });
 
}
printFunction(index){
        if(this.state.data[0].submenu[index].submenu_menu){
          return (   this.state.data[0].submenu[index].submenu_menu.map((mater,index2)=>{  
         return(            
                <div key={index2}>
                    <li className="women-list2"><span className="movement mobile">></span> {this.state.data[0].submenu[1].submenu_menu[index2].title}</li>
                </div>
                )
            })
            )
        }
}
printFunction2(index){
    if(this.state.data[2].submenu[index].submenu_menu){
      return (   this.state.data[2].submenu[index].submenu_menu.map((mater,index2)=>{  
     return(            
            <div key={index2}>
                <li className="type-list2"><span className="movement">></span> {this.state.data[2].submenu[index].submenu_menu[index2].title}</li>
            </div>
            )
        })
        )
    }
}
printFunction3(index){
    if(this.state.data[5].submenu[index].submenu_menu){
      return (   this.state.data[5].submenu[index].submenu_menu.map((mater,index2)=>{  
     return(            
            <div key={index2}>
                <li className="digit-list2"><span className="movement">></span> {this.state.data[5].submenu[index].submenu_menu[index2].title}</li>
            </div>
            )
        })
        )
    }
}
removecart(e){
    
        cont1=0;
        contprice=0;
        let cont=e.target.dataset.set;
        //let tempodelete=this.state.data2[index].cart[cont][0].id;
        this.state.data2[index].cart.splice(cont,1)
        let utenti=this.state.data2; 
        this.setState({data2: utenti})
        let cart= this.state.data2[index].cart;
        axios.patch(`http://127.0.0.1:7000/utenti/${utente.id}`, {cart}) 
        
}
deletestorage(e){
 window.sessionStorage.removeItem("user")
 window.sessionStorage.removeItem("psw")
 window.location.reload(0);
}
takeIndex(e){
    if(sessionStorage.length>0){
    contact = sessionStorage.getItem("user");
    utente=this.state.data2.find((element) => { return element.username === contact})
    index=this.state.data2.indexOf(utente); 
        if(this.state.data2[index].cart.length>0){
             inserisci=this.state.data2[index].cart.length  
        return <span className="number-cart"> {inserisci} </span>
        }
    }
}
    OpenMobileCart(e){
        if(this.state.cart === "mobile-cart"){
        this.setState({cart: "mobile-cart-active"})
        if(index!=="profile"){
            this.setState({profile: "mobile-profile"});  
        }
        if(index!=="search"){
            this.setState({search: "mobile-search"});  
        }
        if(index!=="navbarcomp"){
            this.setState({navbarcomp: "mobile-navbarcomp"});  
        }
    }else{
        this.setState({cart: "mobile-cart"})
    }
    }
    OpenMobileProfile(e){
        if(this.state.profile === "mobile-profile"){
        this.setState({profile: "mobile-profile-active"})
        if(index!=="cart"){
            this.setState({cart: "mobile-cart"});  
        }
        if(index!=="search"){
            this.setState({search: "mobile-search"});  
        }
        if(index!=="navbarcomp"){
            this.setState({navbarcomp: "mobile-navbarcomp"});  
        }
    }else{
        this.setState({profile: "mobile-profile"})
    }
    }
    OpenMobileSearch(e){
        if(this.state.search === "mobile-search"){
        this.setState({search: "mobile-search-active"})
        if(index!=="cart"){
            this.setState({cart: "mobile-cart"});  
        }
        if(index!=="profile"){
            this.setState({profile: "mobile-profile"});  
        }
        if(index!=="navbarcomp"){
            this.setState({navbarcomp: "mobile-navbarcomp"});  
        }
    }else{
        this.setState({search: "mobile-search"})
    }
    }
    OpenNavbarcomp(e){
        if(this.state.navbarcomp === "mobile-navbarcomp"){
        this.setState({navbarcomp: "mobile-navbarcomp-active"})
        if(index!=="cart"){
            this.setState({cart: "mobile-cart"});  
        }
        if(index!=="profile"){
            this.setState({profile: "mobile-profile"});  
        }
        if(index!=="search"){
            this.setState({search: "mobile-search"});  
        }
    }else{
        this.setState({navbarcomp: "mobile-navbarcomp"})
    }
    }
   

render(){
    
    if (this.state.data[0].title !== undefined) {
    return(
         <div>
    <div className="Header-up" >
        <div className="Header">
            <div className="upper">
                <div className="links-header"> 
                    <ul className="links">  
                        <li><img className="phone" img src={phone}></img> Call +001 555 801</li> 
                        <li className="first-link"> All Demos </li>
                        <li className="second-link"> Features </li>
                        <li className="third-link"> Buy Me </li>
                        {
                            sessionStorage.length>0
                            ?
                            <li>Welcome {sessionStorage.user}!</li>
                            :
                            <li> Welcome to the page!</li>
                        }
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
            <Link to={`/`}> <img src="http://ultimo.infortis-themes.com/demo/skin/frontend/ultimo/default/images/logo-3.png"></img></Link>
                <div className="second-right">
                    <ul className="links2">
                        
                    <Link to={`/account`}><li className="account">Account</li></Link>
                    {
                            sessionStorage.length>0
                            ?
                            <Link to={`/wishlist`}><li className="wishlist">Wishlist</li></Link>
                            :
                            <Link to={`/login`}><li className="login">Wishlist</li></Link>
                    }
                        {
                            sessionStorage.length>0
                            ?
                            <li className="login" onClick={(e)=>this.deletestorage(e)} >Logout</li>                           
                            :
                            <Link to={`/login`}><li className="login">Log In</li></Link>
                        }
                    </ul>
                    <span className="dropdown2">
                    <span className="compare"><img className="compare-logo" src={compare}></img>Compare</span>
                    <a href="#"><span className="compare-content">You Have no items to compare</span></a> 
                    </span>
                    <span className="dropdown3">
                    <Link to={'/cart'}><span className="cart"><img className="cart-logo" src={cart}></img>{this.takeIndex()}Cart</span></Link>
                        <span className="cart-content">
                            <span className="none">{cont1=cont1+1}</span>
                        {  
                            sessionStorage.length>0
                            ?   <span><p className="cart-write-notif" >Recently Added Item(s)</p>
                            
                        {  this.state.data2[index].cart.map((mater,index2)=>{
                            return (
                            <span>
                        { inserisci>0
                        ?   
                            <div className="simple-flex">
                                <img className="img-cart" src={this.state.data2[index].cart[index2][0].image}></img>
                                <div className="simple-flex-cart">
                                    <p className="title-cart">{this.state.data2[index].cart[index2][0].title}</p>
                                    <p className="price-cart">Price:{this.state.data2[index].cart[index2][0].price}$</p>
                                    { cont1 === 1 ? <span className="none">{contprice=contprice+this.state.data2[index].cart[index2][0].price}</span> : <span className="none"></span>}
                                    
                                </div>
                                <i class="fas fa-times-circle cart" onClick={(e)=>this.removecart(e)}></i>
                            </div>                       
                        :
                            <span>You Have no items into the cart </span>
                        }
                        </span>) })
                } 
                <p className="cart-write-notif">Cart Subtotal:{contprice}$</p>
                <p className="cart-write-notif">({contprice}$ Incl. Tax)</p>
                <Link to={'/cart'}><button className="view-all-button">View All</button></Link>
                </span>
                :<span>You have no item into your Cart</span>
                     }   
                        </span>
                    </span>
                    <div className="wrap-search"><input id="search" type="text" maxLength="128"></input><button type submit title="search" className="search"><img className="search-img" src={search}></img></button></div>
                </div>
            </div>
        </div>
    </div>
    <div className="back">
    <div className="navbar">
                        <ul className="navbar">
                            <Link to={'/'}><li><a className="home-navbar"><img className="home-logo" src={homelogo}></img>Home</a></li></Link>                               
                                <li className="dropdown4">
                                <Link to={`/Women`} className="all-links"><a className="women">{this.state.data[0].title}</a></Link>
                                <div className="women-content">
                                    <div className="women-low" >
                                        {
                                        this.state.data[0].submenu.map((mater,index)=>{
                                        return(                 
                                                <div key={index}>
                                                    <Link to={`/${this.state.data[0].submenu[index].id}`} className="women1">{this.state.data[0].submenu[index].title}</Link>
                                                    {this.state.data[0].submenu[index].submenu_menu !== "undefined"  ?    <ul className="women-list"> {this.printFunction(index)} </ul> : console.log("nulla")}
                                                </div>                             
                                                 )
                                                })
                                        }
                                    </div>
                                    <div className="img-women"><img className="img-women2" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/other/menu/01.jpg"></img> 
                                    <img className="img-gift" src=" https://icon-library.net/images/search-icon-white-png/search-icon-white-png-11.jpg"></img> </div>
                                </div>                                   
                            </li>                                          
                            <li className="dropdown5" >
                            <a className="fashion"><img className="img-new" src={news} ></img>{this.state.data[1].title}</a>
                        <div className="fashion-content">
                            < div className="adjust">
                                <a className="fashion1"> <img className="img-new2" src={hot}></img> {this.state.data[1].submenu[0].title}</a>
                                    <ul className="list-fashion1">
                                    {
                                        this.state.data[1].submenu[0].submenu_menu.map((mater,index2)=>{  
                                        return(            
                                                <div key={index2}>
                                                    <li className="women-list2"><span className="movement">></span> {this.state.data[1].submenu[0].submenu_menu[index2].title}</li>
                                                </div>
                                                )
                                            })
                                    }
                                    </ul>
                            </div>
                            <div className ="adjust-bags">
                                <a className="fashion1"> <img className="img-new2" src={hot}></img>  {this.state.data[1].submenu[1].title}</a>
                                    <ul className="list-fashion1">
                                    {
                                        this.state.data[1].submenu[1].submenu_menu.map((mater,index2)=>{  
                                        return(   <Link className="all-leave" to={`/${this.state.data[15].submenu[index2].id}`} >        
                                                <div key={index2}>
                                                    <li className="women-list2"><span className="movement">></span> {this.state.data[1].submenu[1].submenu_menu[index2].title}</li>
                                                </div>  
                                                </Link>
                                                )
                                            })
                                          
                                    }
                                    </ul>
                            </div>
                            <div className ="adjust-shoes"> 
                                <a className="fashion1"> <img className="img-new2" src={news} ></img> {this.state.data[1].submenu[2].title}</a>
                                <ul className="list-fashion1">
                                {
                                        this.state.data[1].submenu[2].submenu_menu.map((mater,index2)=>{  
                                        return(   <Link className="all-leave" to={`/${this.state.data[14].submenu[index2].id}` }>       
                                                <div key={index2}>
                                                     <li className="women-list2"><span className="movement">></span> {this.state.data[1].submenu[2].submenu_menu[index2].title}</li>
                                                </div>
                                                </Link>  
                                                )
                                            })
                                    }
                                            </ul>
                            </div>    
                            <div className ="adjust-jewlery"> 
                                <a className="fashion1">{this.state.data[1].submenu[3].title}</a>
                                <ul className="list-fashion1">
                                {
                                        this.state.data[1].submenu[3].submenu_menu.map((mater,index2)=>{  
                                        return(            
                                                <div key={index2}>
                                                    <li className="women-list2"><span className="movement">></span> {this.state.data[1].submenu[3].submenu_menu[index2].title}</li>
                                                </div>
                                                )
                                            })
                                    }
                                            </ul>
                             </div>   
                                <div className="adjust-recommended">
                                            <a className="fashion1">Recommended Bags</a>
                                               <div className="carousel-item">
                                                   <Carousel />
                                               </div>
                                </div> 
                                <div className ="adjust-dresses"> 
                                <a className="fashion1">{this.state.data[1].submenu[4].title}</a>
                                <ul className="list-fashion1">
                                {
                                        this.state.data[1].submenu[4].submenu_menu.map((mater,index2)=>{  
                                        return(            
                                                <div key={index2}>
                                                    <li className="women-list2"><span className="movement">></span> {this.state.data[1].submenu[4].submenu_menu[index2].title}</li>
                                                </div>
                                                )
                                            })
                                    }
                                            </ul>
                             </div>
                             <div className ="adjust-lingerie"> 
                                <a className="fashion1">{this.state.data[1].submenu[5].title}</a>
                                <ul className="list-fashion1">
                                {
                                        this.state.data[1].submenu[5].submenu_menu.map((mater,index2)=>{  
                                        return(            
                                                <div key={index2}>
                                                    <li className="women-list2"><span className="movement">></span> {this.state.data[1].submenu[5].submenu_menu[index2].title}</li>
                                                </div>
                                                )
                                            })
                                    }
                                            </ul>
                             </div>
                             <div className ="adjust-jackets"> 
                                <a className="fashion1">{this.state.data[1].submenu[6].title}</a>
                                <ul className="list-fashion1">
                                {
                                        this.state.data[1].submenu[6].submenu_menu.map((mater,index2)=>{  
                                        return(            
                                                <div key={index2}>
                                                    <li className="women-list2"><span className="movement">></span> {this.state.data[1].submenu[6].submenu_menu[index2].title}</li>
                                                </div>
                                                )
                                            })
                                    }
                                            </ul>
                             </div>  
                             <div className ="adjust-swimwear"> 
                                <a className="fashion1">{this.state.data[1].submenu[7].title}</a>
                                <ul className="list-fashion1">
                                {
                                        this.state.data[1].submenu[7].submenu_menu.map((mater,index2)=>{  
                                        return(            
                                                <div key={index2}>
                                                    <li className="women-list2"><span className="movement">></span> {this.state.data[1].submenu[7].submenu_menu[index2].title}</li>
                                                </div>
                                                )
                                            })
                                    }
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
                            <a className="electronics">{this.state.data[2].title}</a>
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
                                            {
                                        this.state.data[2].submenu.map((mater,index)=>{
                                        return( 
                                            <Link className="all-leave" to={`/${this.state.data[9].submenu[index].id}` }>               
                                                <span key={index}>
                                                    <li className="type-list2"> <span className="movement">></span>{this.state.data[2].submenu[index].title}</li>
                                                    {this.state.data[2].submenu[index].submenu_menu !== "undefined"  ?   <ul> {this.printFunction2(index)} </ul> : console.log("nulla")}
                                                 </span>  </Link>                          
                                                 )
                                                })
                                        }
                                    </ul>
                                    <a className="title-list2">Accessories</a>
                                    <ul className="types-list3">
                                    {
                                        this.state.data[3].submenu.map((mater,index)=>{
                                        return(   
                                            <Link className="all-leave" to={`/${this.state.data[16].submenu[1].id}` }>
                                                <span key={index}>
                                                    <li className="type-list2"><span className="movement">></span>{this.state.data[3].submenu[index].title}</li>
                                                    </span>   
                                                    </Link>                    
                                                 )
                                                })
                                        }
                                    </ul>
                                    <a className="title-list3">Cameras</a>
                                    <ul className="types-list4">
                                    {
                                        this.state.data[4].submenu.map((mater,index)=>{
                                        return(                 
                                                <span key={index}>
                                                    <li className="type-list2"><span className="movement">></span>{this.state.data[4].submenu[index].title}</li>
                                                 </span>                           
                                                 )
                                                })
                                        }                                 
                                    </ul>
                                </div>
                                </div>                        
                            </div>
                            </li>
                            <li className="dropdown7" >
                                <a className="digital">{this.state.data[5].title}</a>
                                <div className="digital-content">
                                        <div className="digitale">
                                        {
                                        this.state.data[5].submenu.map((mater,index)=>{
                                        return(                 
                                                <span key={index}>
                                                    <a className="digital-type"> <span className="movement">></span>{this.state.data[5].submenu[index].title}</a>
                                                    {this.state.data[5].submenu[index].submenu_menu !== "undefined"  ?   <ul> {this.printFunction3(index)} </ul> : console.log("nulla")}
                                                 </span>                           
                                                 )
                                                })
                                        }
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown8" >
                                <a className="custom">Custom</a>
                            <div className="custom-content">
                                <div className="wrap-custom">
                                {
                                        this.state.data[6].submenu.map((mater,index)=>{
                                        return(                 
                                                <span key={index}>
                                                    <div className="title-custom-div">
                                                    {
                                                    this.state.data[6].submenu[index].image  
                                                    ?  
                                                        <div className="image-1">
                                                        <img className="image-custom" src={this.state.data[6].submenu[index].image}></img>
                                                        <h3>{this.state.data[6].submenu[index].title}</h3> </div>
                                                    : 
                                                        <h3 className="title-custom">{this.state.data[6].submenu[index].title}</h3>                                                  
                                                    }
                                                   <p className="paraf-custom">{this.state.data[6].submenu[index].paragraph}</p>
                                                   <a className="paraf-custom2">{this.state.data[6].submenu[index].subparagraph}</a>
                                                    </div>
                                                 </span>                           
                                                 )
                                                })
                                        }
                                </div>
                            </div>
                            </li>
                            <li><a className="About">About Us</a></li>
                        </ul>
                         
                    </div>
    </div>
    <div className="navbar-mobile">
        <div>
            <ul className="navbar-mobile">
                <li className="icon-menu-mobile1"><i class="fas fa-bars" onClick={(e)=>this.OpenNavbarcomp(e)}></i></li>
                <li className="icon-menu-mobile2"><i class="fas fa-search" onClick={(e)=>this.OpenMobileSearch(e)}></i></li>
                <li className="icon-menu-mobile3"><i class="far fa-user" onClick={(e)=>this.OpenMobileProfile(e)}></i></li>
                <li className="icon-menu-mobile4"><i class="fas fa-shopping-cart"  onClick={(e)=>this.OpenMobileCart(e)} ></i>{this.takeIndex()}</li>
            </ul>
        </div>
        <div className={this.state.cart}>
                        {
                            sessionStorage.length>0
                            ?   <span className="mobile-span"><p className="cart-write-notif" >Recently Added Item(s)</p>
                            
                        {  this.state.data2[index].cart.map((mater,index2)=>{
                            return (
                            <span>
                        { inserisci>0
                        ?  
                            <div className="simple-flex">
                                <img className="img-cart" src={this.state.data2[index].cart[index2][0].image}></img>
                                <div className="simple-flex-cart">
                                    <p className="title-cart">{this.state.data2[index].cart[index2][0].title}</p>
                                    <p className="price-cart">Price:{this.state.data2[index].cart[index2][0].price}$</p>
                                </div>
                                <i class="fas fa-times-circle cart" onClick={(e)=>this.removecart(e)}></i>
                            </div>                       
                        :
                            <span>You Have no items into the cart </span>
                        }
                        </span>) })
                } 
                <p className="cart-write-notif">Cart Subtotal:{contprice}$</p>
                <p className="cart-write-notif">({contprice}$ Incl. Tax)</p>
                <Link to={'/cart'}><button className="view-all-button">View All</button></Link>
                </span>
                :<span>You have no item into your Cart</span>
                     }   
                        </div>
        </div>
        <div className={this.state.profile}>
          <ul className="list-profile">
          <Link to={`/account`}> <li className="list-profile-li">ACCOUNT</li></Link>
                    {
                            sessionStorage.length>0
                            ?
                            <Link to={`/wishlist`}><li className="list-profile-li">Wishlist</li></Link>
                            :
                            <Link to={`/login`}><li className="list-profile-li">Wishlist</li></Link>
                    }
                      {
                            sessionStorage.length>0
                            ?
                            <Link to={`/`}><li className="list-profile-li" onClick={(e)=>this.deletestorage(e)} >LOGOUT</li></Link>
                            :
                            <Link to={`/login`}><li className="list-profile-li">LOG IN</li></Link>
                    }
            
        </ul>           
        </div>
        <div className={this.state.search}>
        <div className="wrap-search"><input id="search" placetype="text" maxLength="128" placeholder="Search entire store here.."></input><button type submit title="search" className="search"><img className="search-img" src={search}></img></button></div>
        </div>
        <div className={this.state.navbarcomp}>
                    <ul className="mobile-menu-list"> 
                        <Collapsible trigger={this.state.data[0].title}> {
                                        this.state.data[0].submenu.map((mater,index)=>{
                                        return(                 
                                                <div key={index}>
                                                {
                                                this.state.data[0].submenu[index].submenu_menu ?
                                                <Collapsible className="colapse-menu2" trigger={this.state.data[0].submenu[index].title}>
                                                <Link to={"/Shirt"}><ul className="women-list"  onClick={this.OpenNavbarcomp} > {this.printFunction(index)} </ul></Link>
                                                </Collapsible>
                                                : <Link to={"/Shirt"}><span className="colapse-menu2" onClick={this.OpenNavbarcomp}>{this.state.data[0].submenu[index].title}</span></Link>
                                                }
                                                </div>                             
                                                )
                                        })
                            }
                            </Collapsible>
                           
                            
                            <Collapsible className="colapse-menu" trigger={this.state.data[1].title}>
                            {   
                                        this.state.data[1].submenu.map((mater,index)=>{  
                                        return(            
                                                <div key={index}> 
                                <Collapsible className="colapse-menu2" trigger={this.state.data[1].submenu[index].title}>
                            {
                                        this.state.data[1].submenu[index].submenu_menu.map((mater,index2)=>{  
                                        return(            
                                                <div key={index}>
                                                    <Link to={this.state.data[1].submenu[index].submenu_menu[index2].id}><li className="women-list2" onClick={this.OpenNavbarcomp}><span className="movement mobile">></span> {this.state.data[1].submenu[index].submenu_menu[index2].title}</li></Link>
                                                </div>
                                                )
                                            })
                            }       
                            </Collapsible>
                            </div>
                                        )
                            })
                        }  
                            </Collapsible>

                        <Collapsible className="colapse-menu" trigger={this.state.data[2].title}>
                        <Collapsible className="colapse-menu2"trigger= "Phone & Tablets">
                        {
                              this.state.data[2].submenu.map((mater,index)=>{  
                                return(
                                    <div key={index}>
                                         <Link to={"Phone"}><li className="women-list2" onClick={this.OpenNavbarcomp}><span className="movement mobile">></span> {this.state.data[2].submenu[index].title}</li></Link>
                                    </div>
                                )
                            })
                        }
                        </Collapsible>
                        <Collapsible className="colapse-menu2" trigger="Accessories">{
                              this.state.data[3].submenu.map((mater,index)=>{  
                                return(
                                    <div key={index}>
                                        <Link to={"Accessories"}><li className="women-list2" onClick={this.OpenNavbarcomp} ><span className="movement mobile">></span> {this.state.data[3].submenu[index].title}</li></Link>
                                    </div>
                                )
                            })
                        }</Collapsible>
                        
                        <Collapsible className="colapse-menu2" trigger="Cameras">{
                              this.state.data[4].submenu.map((mater,index)=>{  
                                return(
                                    <div key={index}>
                                        <li className="women-list2"><span className="movement">></span> {this.state.data[4].submenu[index].title}</li>
                                    </div>
                                )
                            })
                        } </Collapsible>
                                       
                        </Collapsible>
                        <Collapsible className="colapse-menu" trigger={this.state.data[5].title}>{
                              this.state.data[4].submenu.map((mater,index)=>{  
                                return(
                                    <div key={index}>
                                        <li className="women-list2"><span className="movement">></span> {this.state.data[4].submenu[index].title}</li>
                                    </div>
                                )
                            })
                        }</Collapsible>
                        <li className="Collapsible">{this.state.data[13].id}</li>
                    </ul>
        </div>
</div>
   
    )
    }else{return(<div>  </div>)}
}
}
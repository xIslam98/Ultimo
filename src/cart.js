import React, { Component } from 'react';
import './font-awesome/css/brands.css';
import './font-awesome/css/solid.css';
import './font-awesome/css/all.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import MenuBottom from './menubottom'
import Country from './country'
let utente;
let tempo;
let index;
let contact;
let tempora;
let contprice=0;
export default class Cart extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            data: "undefined",
            data2:"undefined",
            s:1
          }
          this.takeindex=this.takeindex.bind(this);
          this.select=this.select.bind(this);
          this.addNumber=this.addNumber.bind(this);
          this.removeNumber=this.removeNumber.bind(this);
          this.removewishcart=this.removewishcart.bind(this);


        }
    componentDidMount () {
        axios.get('http://127.0.0.1:7000/utenti')
        .then((response) => {
        this.data2 = response.data;
        console.log(this.data2)
        this.setState({data2: response.data});
        tempo= this.state.data2
        });
        axios.get('http://127.0.0.1:7000/menu')
        .then((response) => {
      this.data = response.data;
      console.log(this.data)
      this.setState({data: response.data});
      tempo= this.state.data
      });
   
    }
    select(e){
        this.setState({s: e.target.value})
    }
    addNumber(){
        
        if(this.state.s>0){
        tempora=this.state.s+1
        this.setState({s: tempora})
        }
    }
    removeNumber(){
        if(this.state.s>1){
        tempora=this.state.s-1
        this.setState({s: tempora})
        }else{
            alert("Non si puo diminuire la quantita al di sotto di 1");
        }
    }
    removewishcart(e){
        contprice=0;
        let cont=e.target.dataset.set;
        //let tempodelete=this.state.data2[index].cart[cont][0].id;
        this.state.data2[index].cart.splice(cont,1)
        let utenti=this.state.data2; 
        this.setState({data2: utenti})
        let cart= this.state.data2[index].cart;
        axios.patch(`http://127.0.0.1:7000/utenti/${utente.id}`, {cart}) 
    }
    takeindex(e){
        if(this.state.data[2]!==undefined){
    contact = sessionStorage.getItem("user");
    utente=this.state.data2.find((element) => { return element.username === contact})
    index=this.state.data2.indexOf(utente); 
     console.log( this.state.data2[index].cart) ;
    }
    }
    
    insertWishlist(position){
        contprice=contprice+this.state.data2[index].cart[position][0].price;
        return (
            <div>
        <div className="title">
            <span className="title-1">Product Name</span>
            <span className="title-2">Unit Price</span>
            <span className="title-3">Qty</span>
        </div>
        <div className="contenitor-wishcart"> 
            <div className="simple-flex border">
                <div className="image-cont"><img  className="img-wishcart" src={this.state.data2[index].cart[position][0].image}></img></div>
                <div className="title-cont">{this.state.data2[index].cart[position][0].title}</div>
                <div className="price-cont"><span className="margin-adjust-span">{this.state.data2[index].cart[position][0].price}$</span></div>
                <div className="regroup3 wishcart">
                                    <input type="text"  className="qty" value={this.state.s} data-set="quantity" onChange={this.select}></input>                              
                                    <div className="regroup4">
                                        <i class="fas fa-angle-up wishcart" onClick={this.addNumber}></i>
                                        <i class="fas fa-angle-down wishcart" onClick={this.removeNumber}></i>
                                    </div>
                </div>
                <div className="remove wishlist">
                    <i class="far fa-times-circle" data-set={position} onClick={(e)=>this.removewishcart(e)}></i>

                </div>
            </div>
        </div>
        </div>
        )
    }
render(){
    if(this.state.data[0].title){
    return(
        <div className="back">
            <h1 className="title-wishcart">Cart</h1>
            {this.takeindex()}
            {
                
                   this.state.data2[index].cart.map((mater,index)=>{
                       return(
                       <div>{this.insertWishlist(index)}</div>
                       )
                   }) 
            }
            <div className="regroup-bet">
                <div><button className="button-wishcart">Continue Shopping</button></div>
                <div><button className="button-wishcart2">Update Shopping Cart</button></div>
            </div>
            <span className="section-line"></span>
            <div className="regroup-bet mobile">
                <div className="bottom-wishcart-left">
                    <img src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/banners/cart-discount.png"></img>
                    <div className="simple-flex mobile2">
                        <div className="first-part-wishcart-left">
                            <span className="estimate-discount">Estimate Shipping and Tax</span>
                            <span className="section-line"></span>
                            <p>Enter your destination to get a shipping estimate.</p>
                            <label>Country</label>
                            <Country />
                            <label className="option-wishcart">State/Province</label>
                            <input className="option-wishcart"></input>
                            <label className="option-wishcart">Zip/Postal Code</label>
                            <input className="option-wishcart"></input>
                            <button className="option-wishcart">Get a Quote</button>
                        </div>
                        <div className="first-part-wishcart-right">
                            <span className="estimate-discount">Discount Codes</span>
                            <span className="section-line"></span>
                            <p>Enter your coupon code if you have one.</p>
                            <input className="input-coupon"></input>
                            <button className="button-coupons">Apply coupon</button>
                        </div>                     
                    </div>
                </div>
                <div className="bottom-wishcart-right-upper">
                    <div className="bottom-wishcart-right">
                        <div className="wei-low">Subtotal (Excl. Tax) ${contprice}</div>
                        <div className="wei-low">Subtotal (Incl. Tax) ${contprice}</div>
                        <div className="wei-high">Grand Total ${contprice}</div>
                        <button className="button-cart-wishcart">Proceed to Checkout</button>
                        <span className="hoverize">Checkout with Multiple Addresses</span>
                    </div>
                    <div className="simple-flex">
                        <span className="span-bottom-certificate">Sample info about SSL Certificate</span>
                        <img src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/block_cart_below_totals.png"></img>
                    </div>
                </div>
            </div>
            <MenuBottom />
        </div>
    )
    }else{return <div></div>}  
}
}

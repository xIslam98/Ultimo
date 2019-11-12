import React, { Component } from 'react';
import './font-awesome/css/brands.css';
import './font-awesome/css/solid.css';
import './font-awesome/css/all.css'
export default class Footer extends(Component){
    constructor (props) {
        super(props)
        this.state = {
            index:"open-modal",
            index2:"open-modal",
            index3:"open-modal",
            index4:"open-modal",
            index5:"open-modal"
        }
        this.accordionAll=this.accordionAll.bind(this);
    }
    accordionAll(state_index,index){
        if(state_index==="open-modal"){
              this.setState({
                [index]: "open-modal-active"
        }); 
        }else{
            this.setState({
                [index]:"open-modal"
            })
        }
     
    }
    render(){
    return(
        <div>
<div className="back-footer">
                    <div className="footer-first">
                        <div className="first-element-footer">
                            <span className="about-title" onClick={(e) => this.accordionAll(this.state.index,"index")} >Question</span>             
                            <ul className={this.state.index} >
                                <li className="list-footer"><span className="movement">></span>Terms</li>
                                <li className="list-footer"><span className="movement">></span>Conditions</li>
                                <li className="list-footer"><span className="movement">></span>About Us</li>
                                <li className="list-footer"><span className="movement">></span>Example</li>
                            </ul>
                        </div>
                        <div className="first-element-footer">
                            <span className="about-title" onClick={(e) => this.accordionAll(this.state.index2,"index2")} >Shipping</span>
                            <ul className={this.state.index2} >
                                <li className="list-footer"><span className="movement">></span>Delivery</li>
                                <li className="list-footer"><span className="movement">></span>Track your order</li>
                                <li className="list-footer"><span className="movement">></span>Buy gift cards</li>
                                <li className="list-footer"><span className="movement">></span>Returns</li>
                            </ul>
                        </div>
                        <div className="first-element-footer">
                            <span className="about-title" onClick={(e) => this.accordionAll(this.state.index3,"index3")} >About Us</span>
                        <ul className={this.state.index3}>
                                <li className="list-footer"><span className="movement">></span>Responsive</li>
                                <li className="list-footer"><span className="movement">></span>Magento Themes</li>
                                <li className="list-footer" ><span className="movement">></span>E-commerce</li>
                                <li className="list-footer"><span className="movement">></span>The company</li>
                        </ul>
                        </div>
                        <div className="first-element-footer">
                            <span className="about-title"  onClick={(e) => this.accordionAll(this.state.index4,"index4")}>News</span>
                            <ul className={this.state.index4}>
                                <li className="list-footer"><span className="movement">></span>What's new</li>
                                <li className="list-footer"><span className="movement">></span>Products</li>
                                <li className="list-footer"><span className="movement">></span>Magento Template</li>
                                <li className="list-footer"><span className="movement">></span>Our sites</li>
                            </ul>
                        </div>
                        
                        <div className="first-element-footer">
                            <span className="about-title" onClick={(e) => this.accordionAll(this.state.index5,"index5")} >Additional Info</span> 
                            <ul className={this.state.index5}>
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
                            </ul>
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
                )
            }
    }
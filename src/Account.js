import React, { Component } from 'react';
import './font-awesome/css/brands.css';
import './font-awesome/css/solid.css';
import './font-awesome/css/all.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import MenuBottom from './menubottom'
let tempo=0;
let tempo2;
let tempo3=[];
export default class Account extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: "undefined",
            data2:"undefined"
          }
        }
    componentDidMount () {
        axios.get('http://127.0.0.1:7000/menu')
        .then((response) => {
      this.data = response.data;
      console.log(this.data)
      this.setState({data: response.data});
      tempo= this.state.data
      });
      axios.get('http://127.0.0.1:7000/utenti')
      .then((response) => {
    this.data2 = response.data;
    console.log(this.data2)
    this.setState({data2: response.data});
    tempo= this.state.data2
    });
    }
render(){
    if(this.state.data[0].title){
    return(
        <div className="back">
            <div className="shirt-shop">
                <div className="regroup-pdl">
                    <div className="lateral-bar-account">
                    <h3 className="h3-shirt acc"><i class="fas fa-user"></i>Account</h3>
                    <span className="section-line"></span>
                    <ul className="account-function">
                        <li className="account-function" >ACCOUNT DASHBOARD</li>
                        <li className="account-function">ACCOUNT INFORMATON</li>
                        <li className="account-function">ADDRESSES BOOK</li>
                        <li className="account-function">MY ORDERS</li>
                        <li className="account-function">BILLING AGREEMENTS</li>
                        <li className="account-function">RECURRING PROFILES</li>
                        <li className="account-function">MY PRODUCT REVIEWS</li>
                        <li className="account-function">MY TAGS</li>
                        <Link to={`/wishlist`}><li className="account-function">WISHLIST</li></Link>
                        <li className="account-function">MY APPLICATIONS</li>
                        <li className="account-function">NEWSLETTER SUBSCRIPTIONS</li>
                        <li className="account-function">MY DOWNLOADABLE PRODUCTS</li>
                    </ul>
                    
                    <div className="custom-account"><h3 className="h3-shirt">Custom Block (top)</h3></div>
                    <span className="section-line"></span>
                    <div className="custom-account"><p className="custo-top">Custom CMS block displayed at the top of the left sidebar. Put your own content here.</p>
                    </div>
                    </div>               
                <div className="shirt-div">
                    <h1 className="shirt-title">My Dashboard</h1>
                    <span className="section-line"></span>
                    <h2 className="font-weight-titles" >Hello,{sessionStorage.user}!</h2>
                        <h4 className="font-weight-titles">From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</h4>
                    <h2 className="margin-null" >Account Information</h2>
                    <span className="section-line"></span>
                    <div className="simple-flex">
                        <div className="half">
                            <div className="half-contact">
                                <h3 className="h3-title-account">Contact Information</h3>
                                <h6 className="h6-title-account">Edit</h6> 
                            </div>
                            <span className="section-line"></span> 
                            <p>This is your Username : {sessionStorage.user}</p>
                            <p className="para-account"> Change Password </p>                     
                        </div>                                            
                        '<div  className="half2">
                            <div className="half-contact">
                                <h3 className="h3-title-account">Newsletters</h3>
                                <h6 className="h6-title-account">Edit</h6>
                            </div>
                            <span className="section-line"></span> 
                            <p className="para-account">You are currently not subscribed to any newsletter.</p> 
                        </div>
                    </div>
                    <h2 className="margin-null">Address Book</h2>
                    <span className="section-line"></span>
                    <div className="simple-flex">
                        <div className="half">
                            <div className="half-contact">
                                <h3 className="h3-title-account">DEFAULT BILLING ADDRESS</h3>
                            </div>
                            <span className="section-line"></span> 
                            <p className="para-account">You have not set a default billing address.<br></br>Edit Address </p>                     
                        </div>                                            
                        '<div  className="half2">
                            <div className="half-contact">
                                <h3 className="h3-title-account">DEFAULT SHIPPING ADDRESS</h3>
                            </div>
                            <span className="section-line"></span> 
                            <p className="para-account">You have not set a default shipping address.<br></br>Edit Address</p> 
                        </div>
                    </div>
                    </div>
                    
                </div>
                <MenuBottom />
            </div>
        </div>
                

    )
        }else{return <div></div>}
    }
}
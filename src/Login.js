import React, { Component } from 'react';
import './font-awesome/css/brands.css';
import './font-awesome/css/solid.css';
import './font-awesome/css/all.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
let id;
let psw;
export default class Login extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: "undefined",
            data2: [],
            login:false
        }
        this.selectid=this.selectid.bind(this);
        this.selectpsw=this.selectpsw.bind(this);
        this.Login=this.Login.bind(this);
    }
componentDidMount () {
    axios.get('http://127.0.0.1:7000/menu')
    .then((response) => {
  this.data = response.data;
  console.log(this.data)
  this.setState({data: response.data});
  });
  axios.get('http://127.0.0.1:7000/utenti')
    .then((response) => {
  this.data2 = response.data;
  console.log(this.data2)
  this.setState({data2: response.data});
  });
}
selectid(e){
    id=e.target.value;
}
selectpsw(e){
    psw=e.target.value;
}
Login(e){
    let controllonome=this.state.data2.find((element) => { return element.username === id})
    let controllopassword=this.state.data2.find((element) => { return element.password === psw})
    if(controllonome !== undefined && controllopassword !== undefined){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })              
        Toast.fire({
            type: 'success',
            title: 'Signed in successfully'
        })
        window.sessionStorage.setItem("user", id);
        window.sessionStorage.setItem("psw", psw);
        window.location.reload(0);
}else{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
    })              
    Toast.fire({
        type: 'error',
        title: 'Check all the data'
    })
}
}
render(){
    if(this.state.data[0].id){
    return(
            <div className="back-title">
                <h1 className="login-title" >Login or Create an Account</h1>
                <div className="regroup-row">
                <div className="login-row">
                    <h3 className="login-title">New Customers </h3>
                    <span className="section-line"></span>
                    <p className="para-login">By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                    <span className="section-line"></span>
                    <Link to={`/register`}><button className="create-login" >Create An Account</button></Link>
                    </div>
                <div className="login-row">
                    <h3 className="login-title">Registered Customers</h3>
                    <span className="section-line"></span>
                    <div className="margin-login">                   
                        <p>If you have an account with us, please log in.</p>
                        <label>Email address</label>
                        <input className="input-login" onChange={(e)=>this.selectid(e)}></input>
                        <label>Password</label>
                        <input type="password" className="input-login" onChange={(e)=>this.selectpsw(e)}></input>
                    </div>
                    <span className="section-line"></span>
                    <div className="regroup-bet">
                    <button className="create-login" onClick={(e)=>this.Login(e)}>Login</button>
                    <a className="forgot-your-pass">Forgot Your Password ?</a> 
                    </div>
                    </div>
                </div>
                <div className="link-brand">
                           
                            
                            <ul className="ul-brand-login">
                        <div className="regroup-bet"> 
                            <div className="simple-flex">
                                <li className="element-login">Site Map</li>
                                <li className="element-login">Search Terms    </li>
                                <li className="element-login">Advanced Search</li>
                                <li className="element-login">Orders and returns</li>
                                <li className="element-login">Contact Us</li>
                            </div>
                            <div className="simple-flex">
                                <li className="element-login" >About Us</li>
                                <li className="element-login" >Custom Service </li>
                            </div>
                            </div>
                            </ul>                                           
                        </div>


            </div>
        
    )
    }else{return<div></div>}
}
}
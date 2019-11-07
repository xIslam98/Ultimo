import React, { Component } from 'react';
import './font-awesome/css/brands.css';
import './font-awesome/css/solid.css';
import './font-awesome/css/all.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './sass/App.scss';
export default class MenuBottom extends Component{
render(){
return(
    <div>
<div className="link-brand">        
                    <ul className="ul-brand-login">
                        <div className="regroup-bet"> 
                            <div className="simple-flex">
                                <li className="element-login">Site Map</li>
                                <span className="section-line-horizontal"></span>
                                <li className="element-login">Search Terms</li>
                                <span className="section-line-horizontal"></span>
                                <li className="element-login">Advanced Search</li>
                                <span className="section-line-horizontal"></span>
                                <li className="element-login">Orders and returns</li>
                                <span className="section-line-horizontal"></span>
                                <li className="element-login">Contact Us</li>
                            </div>
                            <div className="simple-flex">
                                <li className="element-login" >About Us</li>
                                <span className="section-line-horizontal"></span>
                                <li className="element-login" >Custom Service </li>
                            </div>
                            </div>
                            </ul>                                           
                </div>
                </div>
)
}
}
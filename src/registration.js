import React, { Component } from 'react';
import './font-awesome/css/brands.css';
import './font-awesome/css/solid.css';
import './font-awesome/css/all.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
let email;
let first;
let last;
let mid;
let password;
let confirm;
export default class Registration extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: "undefined",
            data2:"undefined"
        }
        this.select=this.select.bind(this);
        this.registra=this.registra.bind(this);
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
this.data = response.data;
console.log(this.data)
this.setState({data2: response.data});
});
}
select(e){
    first=e.target.value;
}
selectmid(e){
    mid=e.target.value;
}
selectlast(e){
    last=e.target.value;
}
selectemail(e){
    email=e.target.value;
}
selectpass(e){
    password=e.target.value;
}
selectconf(e){
    confirm=e.target.value;
}
registra(e){
    if(confirm !== password){
        alert("Errore ricontrolla la password")
    }else{
        let insert = {
            username: first,
            mid: mid,
            last: last,
            email: email,
            password: password,
            confirmpass:confirm
        };
       let tempo = this.state.data2;
       console.log(tempo)
       tempo.push(insert);
       this.setState({data2: tempo});
       
       axios.post(`http://127.0.0.1:7000/utenti`, { 
        username: first,
        mid: mid,
        last: last,
        email: email,
        password: password,
        confirmpass:confirm
    })
       .then(res => {
         console.log(res);
         console.log(res.data);
       })
       Swal.fire({
            type: 'success',
            title: 'Registrazione',
            text: 'Operazione Completate'
          })
         window.location.replace("http://127.0.0.1:3000/login");
    }  
    }
render(){
    if(this.state.data[0].id){
    return(
            <div className="back-title">
                <h1 >Create an Account</h1>
                <h2 className="personal-info">Personal Information</h2>
                <span className="section-line"></span>
                <div className="simple-flex">
                <div className="registration-name">
                    <label>First Name</label>
                    <input className="first-name" onChange={(e)=>this.select(e)}></input> 
                    </div>
                <div className="mid-name">
                    <label>Middle Name</label>
                    <input className="mid-name" onChange={(e)=>this.selectmid(e)} ></input> 
                </div>
                <div className="last-name">
                    <label>Last Name</label>
                    <input className="last-name" onChange={(e)=>this.selectlast(e)} ></input> 
                </div>
              
                </div>
                 <div className="email">
                    <label>Email Address</label>
                    <input className="email" onChange={(e)=>this.selectemail(e)} ></input> 
                </div>
                <div className="simple-flex">
                <input type="checkbox" className="checkbox"></input><label>Sign Up for Newsletter</label>
                </div>
                <h2 className="personal-info">Login Information</h2>
                <span className="section-line"></span>
                <div className="simple-flex">
                <div className="registration-name">
                    <label>Password</label>
                    <input type="password" className="email" onChange={(e)=>this.selectpass(e)}></input> 
                    </div>
                    <div className="registration-name">
                    <label>Confirm Password</label>
                    <input type="password" className="email" onChange={(e)=>this.selectconf(e)}></input> 
                    </div>                
                </div>
                <span className="section-line"></span>
                <div className="regroup-bet">
                    <div className="simple-flex-left">
                    <Link to={`/login`}> <h4 classname="back-register"> &larr; back</h4> </Link>
                    </div>
                    <div className="submit-register">
                        <button className="create-login" onClick={(e)=>this.registra(e)}>Submit</button>
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
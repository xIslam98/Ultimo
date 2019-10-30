import React, { Component } from 'react';
import './font-awesome/css/brands.css';
import './font-awesome/css/solid.css';
import './font-awesome/css/all.css';
import axios from 'axios';
export default class About extends Component{
    constructor (props) {
            super(props)
            this.state = {
                data: "undefined"
            }
        }
    componentDidMount () {
        axios.get('http://127.0.0.1:7000/menu')
        .then((response) => {
      this.data = response.data;
      console.log(this.data)
      this.setState({data: response.data});
      });
    }
    render(){
        if (this.state.data[0].title) {
        
    return(
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
                                            {
                                                this.state.data[13].submenu.map((mater,index)=>{
                                                 return(                 
                                                    <li className="about-list-element"><span className="movement">></span>{this.state.data[13].submenu[index].title}</li>                        
                                                 )
                                                })
                                        }
                                                                             
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
    )
    }else{return <div></div>}
}
}
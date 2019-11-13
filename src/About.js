import React, { Component } from 'react';
import './font-awesome/css/brands.css';
import './font-awesome/css/solid.css';
import './font-awesome/css/all.css';
import axios from 'axios';
export default class About extends Component{
    constructor (props) {
            super(props)
            this.state = {
                data: "undefined",
                about1:"span-mobile-about1",
                about2:"span-mobile-about2",
                about3:"span-mobile-about3",
                about4:"span-mobile-about4"
            }
            this.openstateabout=this.openstateabout.bind(this);
            this.openstateabout2=this.openstateabout2.bind(this);
            this.openstateabout2=this.openstateabout2.bind(this);
            this.openstateabout2=this.openstateabout2.bind(this);
    }
    componentDidMount () {
        axios.get('http://127.0.0.1:7000/menu')
        .then((response) => {
            this.data = response.data;
            console.log(this.data)
            this.setState({data: response.data});
        });
    }
    openstateabout(e){
        if(this.state.about1==="span-mobile-about1"){
            this.setState({about1: "span-mobile-about1-active"})   
        }
        else{
            this.setState({about1: "span-mobile-about1"})   
        }
    }
    openstateabout2(e){
        if(this.state.about2==="span-mobile-about2"){
         this.setState({about2: "span-mobile-about2-active"})   
        }else{
            this.setState({about2: "span-mobile-about2"})   
        }
        
    }
    openstateabout3(e){
        if(this.state.about3==="span-mobile-about3"){
         this.setState({about3: "span-mobile-about3-active"})   
        }else{
            this.setState({about3: "span-mobile-about3"})   
        }
        
    }
    openstateabout4(e){
        if(this.state.about4==="span-mobile-about4"){
         this.setState({about4: "span-mobile-about4-active"})   
        }else{
            this.setState({about4: "span-mobile-about4"})   
        }
        
    }
    render(){
        if (this.state.data[0].title) {
        
    return(
<div className="back-about">
                    <div className="about">
                        <div className="about-first"> 
                            <div className="about-1">                
                                <div className="about-title" onClick={(e)=>this.openstateabout(e)}> About Ultimo </div>
                                <span className={this.state.about1}>
                                <img className="about-img" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/logo-small.png"></img>
                                <p>Ultimo is a premium Magento theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive.</p>
                                <a className="paraf-custom2">Buy this theme ></a>
                                </span>                            
                                </div> 
                                
                                        <div className="about-2">
                                            <div className="about-title" onClick={(e)=>this.openstateabout2(e)} > Theme Features </div>
                                            <span className={this.state.about2}>
                                            <ul className="about-list">
                                            {
                                                this.state.data[13].submenu.map((mater,index)=>{
                                                 return(                 
                                                    <li className="about-list-element"><span className="movement">></span>{this.state.data[13].submenu[index].title}</li>                        
                                                 )
                                                })
                                        }
                                                                             
                                            </ul>
                                            </span>
                                        </div>
                                        <div className="about-3">
                                        <div className="about-title" onClick={(e)=>this.openstateabout3(e)}> Key Features </div> 
                                        <span className={this.state.about3}>
                                               <div className="about-multiple"> <div className="about-number1"><i class="fab fa-airbnb"></i></div><p className="para1">Unlimited colors, hundreds of customizable elements</p></div>
                                               <div className="about-multiple"> <div className="about-number2"><i class="fab fa-android"></i></div><p className="para1">Customizable responsive layout based on fluid grid</p></div>
                                               <div className="about-multiple"> <div className="about-number3"><i class="fab fa-facebook-f"></i></div><p className="para1">50+ placeholders to display custom content</p></div>
                                               <div className="about-multiple"> <div className="about-number4"><i class="fab fa-linkedin"></i></div><p className="para1">Create your custom sub-themes (variants)</p></div>
                                               </span>
                                        </div>
                                        <div className="about-4">
                                        <div className="about-title" onClick={(e)=>this.openstateabout4(e)}> Company Info </div>
                                        <span className={this.state.about4}>
                                                <div className="about-multiple"> <div className="about-item1"><i class="fas fa-tty"></i></div><div className="about-block"><p className="para">Call Us +001 555 801</p><p className="para" >Fax +001 555 802</p></div></div>
                                               <div className="about-multiple"> <div className="about-item2"><i class="fas fa-mobile"></i></div><div className="about-block"><p className="para" >+77 123 1234</p><p className="para">+42 98 9876</p></div></div>
                                               <div className="about-multiple"> <div className="about-item3"><i class="fas fa-envelope"></i></div><div className="about-block"><p className="para" >boss@example.com</p><p className="para">me@example.com</p></div></div>
                                               <div className="about-multiple"> <div className="about-item4"> <i class="fab fa-skype"></i></div><div className="about-block"><p p className="para">Skype: samplelogin</p><p p className="para">skype-support</p></div></div>
                                        </span>
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
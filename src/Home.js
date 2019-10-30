import React, { Component } from 'react';
import './sass/App.scss';
import homelogo from './homelogo.png';
import news from './new.png';
import hot from './hot.png';
import Slidero from './carousel';
import Carousel from './carousel-item';
import SliderFeature from './carousel-product';
import SliderPhone from './carousel-phone';
import SliderBrand from './carousel-brand';
import './font-awesome/css/brands.css';
import './font-awesome/css/solid.css';
import './font-awesome/css/all.css';
import axios from 'axios';

export default class Home extends Component{
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
if (this.state.data[0].title !== undefined) {
    return(
    <div>
        <div className="body">
                <div className="back">
                    
                    <div className="Slider">
                        <Slidero />
                        <span class="section-line2"></span>
                    </div>
                    <div className="customizable">
                    {
                                        this.state.data[7].submenu.map((mater,index)=>{  
                                        return(    <span key={index} className="customizable-span">
                                                    <i  className={this.state.data[7].submenu[index].id}></i>
                                                    <div className="icon1-contenent">   
                                                        <h6 className="title-h6">{this.state.data[7].submenu[index].title_h6}</h6>
                                                        <h3 className="title-h3">{this.state.data[7].submenu[index].title_h3}</h3>
                                                        <p>{this.state.data[7].submenu[index].paragraph}</p>
                                                        <a className="paraf-custom2">{this.state.data[7].submenu[index].subparagraph}</a>
                                                        </div>
                                                    </span>
                                                    
                                                )
                                            })
                                        }        
                    </div>
                    <div className="featured-product"> 
                    <span className="featured-our">Our Featured Products</span>
                    <span class="section-line"></span>
                        <SliderFeature />
                    </div>
                    <div className="new-in-store">
                    <span className="featured-our">New in store</span>
                    <span class="section-line"></span>
                        <SliderPhone />
                    </div>
                    <div className="sample-custom-banner">
                    <span className="featured-our">Sample Custom Banners</span>
                    <span class="section-line"></span>
                        <div className="Banner">
                            <div className="first-banner">
                                <img className="img-banner" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/banners/1a.png"></img>
                                <img className="img-banner2" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/banners/1b.png"></img>
                                <img className="img-banner3" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/banners/1c.png"></img>
                            </div>
                            <div className="second-banner">
                                <div className="customizable">                  
                                {
                                        this.state.data[10].submenu.map((mater,index)=>{  
                                        return(    <span key={index} className="customizable-span">
                                                    <i  className={this.state.data[10].submenu[index].id}></i>
                                                    <div className="icon1-contenent">   
                                                        <h6 className="title-h6">{this.state.data[10].submenu[index].title_h6}</h6>
                                                        <h3 className="title-h3">{this.state.data[10].submenu[index].title_h3}</h3>
                                                        <p>{this.state.data[10].submenu[index].paragraph}</p>
                                                        <a className="paraf-custom2">{this.state.data[10].submenu[index].subparagraph}</a>
                                                        </div>
                                                    </span>
                                                    
                                                )
                                            })
                                    }       
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Product-Brands">
                        <div className="brand-carousel">                      
                            <div className="featured-product"> 
                            <span className="featured-our">Product Brands</span>
                            <span class="section-line"></span>
                            </div>
                        <SliderBrand />
                        </div>
                        <div className="link-brand">
                            <ul className="ul-brand">
                            {
                                        this.state.data[12].submenu.map((mater,index)=>{  
                                        return(    <span key={index} >
                                                        { this.state.data[12].submenu[index].right
                                                                ? 
                                                                <li className="li-brand2">{this.state.data[12].submenu[index].title}</li>
                                                                :
                                                                <li className="li-brand1">{this.state.data[12].submenu[index].title}</li>
                                                        }
                                                    </span>
                                                    
                                                )
                                            })
                                    }  
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>                     
    )
}else{return(<div>  </div>)}
}
}



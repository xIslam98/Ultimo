import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class SliderWomen   extends React.Component {
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
  render() {
    if (this.state.data[0].title) {
    let settings = {
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
    };
    return (
    <Slider {...settings}>
        <div className="first-img-slide-women">
     <img src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/landing/slide1.jpg"></img>
     </div> 
     <div className="second-img-slide-women">
     <img src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/landing/slide2.jpg"></img>
     </div> 
     </Slider>
    );
    }else{return<div></div>}
  }
}
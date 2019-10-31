import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Bottomphone  extends React.Component {
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
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows:false
    };
    return (
    <Slider {...settings}>
      {  this.state.data[9].submenu.map((mater,index)=>{
        return(
        <Link to={`/Feature-phone?id=${index}`}><div >
          <div className="regroup4">
            <img src={this.state.data[9].submenu[index].image}>   
          </img> <span>{this.state.data[9].submenu[index].title} <p className="related-p">{this.state.data[9].submenu[index].price}$</p></span>
          </div>
        </div></Link>
          )
        })
      }
  
      </Slider>
    );
    }else{return<div></div>}
  }
}
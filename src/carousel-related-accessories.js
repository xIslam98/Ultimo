import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
export default class RelatedAcces extends React.Component {
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
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical:true,
      arrows:true
    };
    return (
    <Slider className="slider-related1" {...settings}>
       {  this.state.data[16].submenu.map((mater,index)=>{
        return(
        <div >
          <div className="regroup">
          <img className="repixel" src={this.state.data[16].submenu[index].image}>   
          </img> <span>{this.state.data[16].submenu[index].title} <p className="related-p">{this.state.data[16].submenu[index].price}$</p><p className="related-p">Add to Wishlist</p></span>
          </div>
        </div>
        )
       })
      }
      </Slider>
    );
    }else{return <div></div>}
  }
}
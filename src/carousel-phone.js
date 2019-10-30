import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SliderPhone extends React.Component {
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
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={140}
        totalSlides={9}  
        visibleSlides={5}     
      >
        <ButtonNext className="go-phone"> &rarr; </ButtonNext>
        <ButtonBack className="back-phone"> &#8592; </ButtonBack>
        <Slider>
        {  this.state.data[9].submenu.map((mater,index)=>{
            return(
                 
              <Slide index={index} key={index}>
                { this.state.data[9].submenu[index].new  
              ? 
              <span className="sticker-wrapper top-left">
                <span className="sticker new">
                  New  
                    </span>
               </span>
            : <span></span>            
              }
              { this.state.data[9].submenu[index].offer  
              ? 
              <Link to="/Feature-cell">
                <img className="img-slide2" src={this.state.data[9].submenu[index].image}></img>
                <span className="sticker-wrapper top-right">
                    <span className="sticker sale">
                        Sale
                    </span>
                    </span>
                    <div className="img-0-slide">{this.state.data[9].submenu[index].title}</div>                             
                    <span className="img-1-price">{this.state.data[9].submenu[index].price}</span>
                  <span className="img-2-offer">{this.state.data[9].submenu[index].offer_price}</span>
                    </Link> 
               :
               <Link to="/Feature-cell">
                  <img className="img-slide2" src={this.state.data[9].submenu[index].image}></img>
                  <div className="img-0-slide">{this.state.data[9].submenu[index].title}</div>
                    { this.state.data[9].submenu[index].low  
                    ?<span>
                    <span className="img-1-price">{this.state.data[9].submenu[index].price}</span>
                      <span className="img-2-offer">{this.state.data[9].submenu[index].price_low}</span>
                      </span> 
                
                    :<span className="img-0-slide">{this.state.data[9].submenu[index].price}</span>
                  }
                </Link> 
              }  
              </Slide>  
                      
            )
         })
         }
        </Slider>
      </CarouselProvider>
    );
  }else{return <div> </div>}
}
}
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import axios from 'axios'

export default class SliderBrand extends React.Component {
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
        naturalSlideHeight={60}
        totalSlides={10}  
        visibleSlides={4}     
      >
        <ButtonNext className="go-brand"> &rarr; </ButtonNext>
        <ButtonBack className="back-brand"> &#8592; </ButtonBack>
        
        <Slider>
        {
          this.state.data[11].submenu.map((mater,index)=>{
                return(
              <Slide index={index}>
                <img className="img-slide-brand" src={this.state.data[11].submenu[index].image}></img>
            </Slide>                 
           )
          })                           
        }
        </Slider>
        
      </CarouselProvider>
    );
  }else{return <div></div>}
}
}
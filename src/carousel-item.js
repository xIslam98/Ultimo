import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={4}
        visibleSlides={2} 
        
      >
        <ButtonNext className="go"> &rarr; </ButtonNext>
        <ButtonBack className="backo"> &#8592; </ButtonBack>   
        <Slider>
          <Slide index={0}><img className="img-slide-go" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/110x/040ec09b1e35df139433887a97daa66f/2/1/216840-0129_1.jpg"></img></Slide>
          <Slide index={1}><img className="img-slide-go" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/110x/040ec09b1e35df139433887a97daa66f/2/7/271669-0054_1.jpg"></img></Slide>
          <Slide index={2}><img className="img-slide-go" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/110x/040ec09b1e35df139433887a97daa66f/9/9/996093-0100_1.jpg"></img></Slide>
          <Slide index={3}><img className="img-slide-go" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/110x/040ec09b1e35df139433887a97daa66f/6/7/677188-0067_1.jpg"></img></Slide>

        </Slider>
        
      </CarouselProvider>
    );
  }
}
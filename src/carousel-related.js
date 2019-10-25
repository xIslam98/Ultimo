import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class Related extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={80}
        naturalSlideHeight={125}
        totalSlides={8}
        visibleSlides={4}
        orientation={"vertical"}
        
      >
        <ButtonNext className="go-related"> &rarr; </ButtonNext>
        <ButtonBack className="back-related"> &#8592; </ButtonBack>   
        <Slider>
          <Slide index={0}>
            <div className="regroup">
                <img className="img-slide-gone" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/8/5/857055-0115_1_2.jpg"></img>
                
                <div className="img-0-slide">Sample Fashion Product
                <span className="img-0-slide">$50.00</span>
                </div> 
            </div>
          </Slide>
          
          <Slide index={1}><img className="img-slide-go" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/7/3/734198-0056_1_2.jpg"></img></Slide>
          <Slide index={2}><img className="img-slide-go" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/5/4/546029-0013_1_2.jpg"></img></Slide>
          <Slide index={3}><img className="img-slide-go" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/8/7/870044-0032_1_2.jpg"></img></Slide>
          <Slide index={4}><img className="img-slide-go" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/9/9/996093-0100_1.jpg"></img></Slide>
          <Slide index={5}><img className="img-slide-go" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/2/1/216840-0129_1.jpg"></img></Slide>
          <Slide index={6}><img className="img-slide-go" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/2/7/271669-0054_1.jpg"></img></Slide>
          <Slide index={7}><img className="img-slide-go" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/6/7/677188-0067_1.jpg"></img></Slide>
        </Slider>
        
      </CarouselProvider>
    );
  }
}
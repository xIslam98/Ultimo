import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';

export default class SliderFeature extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={160}
        totalSlides={11}  
        visibleSlides={5}     
      >
        <ButtonNext className="go-feature"> &rarr; </ButtonNext>
        <ButtonBack className="back-feature"> &#8592; </ButtonBack>   
        <Slider>
          <Slide index={0}> <Link to="/Feature-cell"><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/m/o/model1f.jpg"></img> 
          <div className="img-0-slide">Sample Fashion Product</div> 
          <span className="img-0-slide">$50.00</span></Link>
          </Slide>      
          <Slide index={1}><div className="image-slides"><Link  to="/Feature-cell"><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/m/o/model1a_8.jpg"></img>
          <span className="sticker-wrapper top-right">
                    <span className="sticker sale">
                        Sale 
                    </span>
            </span></Link>
          </div>
          <div className="img-0-slide">Product With Custom Options</div> 
          <span className="img-1-price">$100.00</span>
          <span className="img-2-offer">Special Offer $75.00</span>
          </Slide>
          <Slide index={2}><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/m/o/model3a_3.jpg"></img>
          <div className="img-0-slide">Configurable Product Example</div> 
          <span className="img-0-slide">$75.00</span>
          </Slide>
          <Slide index={3}><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/m/o/model1b_4.jpg"></img>
          <div className="img-0-slide">Another Configurable Product</div> 
          <span className="img-0-slide">$100.00</span>
          </Slide>
          <Slide index={4}><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/m/o/model6a.jpg"></img>
          <div className="img-0-slide">Simple Dress Example</div> 
          <span className="img-0-slide">$35.50</span>
          </Slide>
          <Slide index={5}><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/m/o/model7a.jpg"></img>
          <div className="img-0-slide">Dress Example Size-XL</div> 
          <span className="img-0-slide">$100.00</span>
          </Slide>
          <Slide index={6}><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/m/o/model5a_3.jpg"></img>
          <div className="img-0-slide">Dress Example Size-L</div> 
          <span className="img-0-slide">$100.00</span>
          </Slide>
          <Slide index={7}><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/m/o/model8a.jpg"></img>
          <div className="img-0-slide">Dress Example Size-M</div> 
          <span className="img-0-slide">$100.00</span>
          </Slide>
          <Slide index={8}><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/m/o/model7a_1_1.jpg"></img>
          <div className="img-0-slide">Dress Example Size-S</div> 
          <span className="img-0-slide">$100.00</span>
          </Slide>
          <Slide index={9}><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/m/o/model4a.jpg"></img>
          <div className="img-0-slide"> Example Size-L</div> 
          <span className="img-0-slide">$100.00</span>
          </Slide>
          <Slide index={10}><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/m/o/model1c_4.jpg"></img>
          <div className="img-0-slide">Sample Customizable Dress</div> 
          <span className="img-0-slide">$79.99</span>
          </Slide>
        </Slider>
        
      </CarouselProvider>
    );
  }
}
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class SliderPhone extends React.Component {
  render() {
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
          <Slide index={0}><div className="image-slides"><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/p/h/phone02.jpg"></img> 
            <span className="sticker-wrapper top-left">
                    <span className="sticker new">
                        New  
                    </span>
            </span>
            <span className="sticker-wrapper top-right">
                    <span className="sticker sale">
                        Sale 
                    </span>
            </span>
          </div>
          <div className="img-0-slide">The New Phone</div>
            <div className="align-stars">
                <div className="rating-box">
                    <div className="rating"></div>             
                </div>
            <span className="amount">1 review(s)</span>
            </div>
          <span className="img-1-price">$800.00</span> 
          <span className="img-2-offer">$750.00</span>
          </Slide>      
          <Slide index={1}><div className="image-slides"><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/p/h/phone08_2.jpg"></img>
          <span className="sticker-wrapper top-left">
                    <span className="sticker new">
                        New  
                    </span>
            </span>
            </div>
          <div className="img-0-slide">Tier Pricing Product</div>
            <div className="align-stars">
                <div className="rating-box">
                    <div className="rating"></div>             
                </div>
            <span className="amount">1 review(s)</span>
            </div>
          <span className="img-1-price">$500.00</span> 
          <span className="img-2-offer">As low as:$400</span>
          </Slide>
          <Slide index={2}><div className="image-slides"><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/p/h/phone07.jpg"></img>
          <span className="sticker-wrapper top-left">
                    <span className="sticker new">
                        New  
                    </span>
            </span>
            </div>
          <div className="img-0-slide">Modern Cell Phone</div>
            <div className="align-stars">
                <div className="rating-box">
                    <div className="rating"></div>             
                </div>
            <span className="amount">1 review(s)</span>
            </div>
          <span className="img-0-slide">$999.00</span> 
          </Slide>
          <Slide index={3}><div className="image-slides"><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/p/h/phone01a_2.jpg"></img>
          <span className="sticker-wrapper top-left">
                    <span className="sticker new">
                        New  
                    </span>
            </span>
            </div>
          <div className="img-0-slide">Phone With Variants</div>
            <div className="align-stars">
                <div className="rating-box">
                    <div className="rating"></div>             
                </div>
            <span className="amount">1 review(s)</span>
            </div>
          <span className="img-0-slide">$750.00</span> 
          </Slide>
          <Slide index={4}><div className="image-slides"><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/p/h/phone08_5.jpg"></img>
          <span className="sticker-wrapper top-left">
                    <span className="sticker new">
                        New  
                    </span>
            </span>
            </div>
          <div className="img-0-slide">Deep Blue Phone</div>
            <div className="align-stars">
                <div className="rating-box">
                    <div className="rating"></div>             
                </div>
            <span className="amount">1 review(s)</span>
            </div>
          <span className="img-0-slide">$400.00</span> 
          </Slide>
          <Slide index={5}><div className="image-slides"><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/p/h/phone06_2.jpg"></img>
          <span className="sticker-wrapper top-left">
                    <span className="sticker new">
                        New  
                    </span>
            </span>
            </div>
          <div className="img-0-slide">Configurable Phone</div>
            <div className="align-stars">
                <div className="rating-box">
                    <div className="rating"></div>             
                </div>
            <span className="amount">1 review(s)</span>
            </div>
          <span className="img-0-slide">$700.00</span> 
          </Slide>
          <Slide index={6}><div className="image-slides"><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/p/h/phone07a_2.jpg"></img>
          <span className="sticker-wrapper top-left">
                    <span className="sticker new">
                        New  
                    </span>
            </span>
            </div>
          <div className="img-0-slide">Simple Phone</div>
            <div className="align-stars">
                <div className="rating-box">
                    <div className="rating"></div>             
                </div>
            <span className="amount">1 review(s)</span>
            </div>
          <span className="img-0-slide">$699.00</span> 
          </Slide>
          <Slide index={7}><div className="image-slides"><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/p/h/phone10.jpg"></img>
          <span className="sticker-wrapper top-left">
                    <span className="sticker new">
                        New  
                    </span>
            </span>
            </div>
          <div className="img-0-slide">Grouped Product</div>
            <div className="align-stars">
                <div className="rating-box">
                    <div className="rating"></div>             
                </div>
            <span className="amount">1 review(s)</span>
            </div>
          <span className="img-0-slide">Starting at: $45.00</span> 
          </Slide>
          <Slide index={8}><div className="image-slides"><img className="img-slide2" src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/p/h/phone05_2.jpg"></img>
          <span className="sticker-wrapper top-left">
                    <span className="sticker new">
                        New  
                    </span>
            </span>
            </div>
          <div className="img-0-slide">Big Smartphone</div>
            <div className="align-stars">
                <div className="rating-box">
                    <div className="rating"></div>             
                </div>
            <span className="amount">1 review(s)</span>
            </div>
          <span className="img-0-slide">$124.00</span> 
          </Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}
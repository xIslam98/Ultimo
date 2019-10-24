import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class SliderBrand extends React.Component {
  render() {
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
          <Slide index={0}><img className="img-slide-brand" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/brands/brandisimi.png"></img> 
          
          </Slide>      
          <Slide index={1}><img className="img-slide-brand" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/brands/samplemanufacturer.png"></img>
          
          </Slide>
          <Slide index={2}><img className="img-slide-brand" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/brands/thebrand.png"></img>
          
          </Slide>
          <Slide index={3}><img className="img-slide-brand" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/brands/bluelogo.png"></img>
          
          </Slide>
          <Slide index={4}><img className="img-slide-brand" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/brands/publisher.png"></img>
          
          </Slide>
          <Slide index={5}><img className="img-slide-brand" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/brands/company.png"></img>
          
          </Slide>
          <Slide index={6}><img className="img-slide-brand" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/brands/soundwave.png"></img>
         
          </Slide>
          <Slide index={7}><img className="img-slide-brand" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/brands/logofashion.png"></img>
          
          </Slide>
          <Slide index={8}><img className="img-slide-brand" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/brands/samsung.png"></img>
         
          </Slide>
          <Slide index={9}><img className="img-slide-brand" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/brands/apple.png"></img>
         
          </Slide>
        </Slider>
        
      </CarouselProvider>
    );
  }
}
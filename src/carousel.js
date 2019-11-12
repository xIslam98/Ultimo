import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
let screen=window.screen.width;
export default class Slidero extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={45}
        totalSlides={2}        
      >
        
        <Slider>
          <Slide index={0}><img className="img-slide" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/slideshow/c01.jpg"></img></Slide>
          <Slide index={1}><img className="img-slide" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/slideshow/c02.png"></img></Slide>
        </Slider>
        {
          (screen>678)
        ?<span>
        <ButtonBack className="homepage"> &#8592; </ButtonBack>
        <ButtonNext className="homepage" > &rarr; </ButtonNext>
        </span>
        : <span>

        </span>
        }
      </CarouselProvider>
    );
  }
}
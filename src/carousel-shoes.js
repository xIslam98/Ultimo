import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Shoes extends React.Component {
  render() {
    let settings = {
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
    <Slider {...settings}>
        <div >
          <div className="regroup4">
          <img src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/4/2/428507-0066_1_1.jpg">   
          </img> <span>Sample Shoe <p className="related-p">$ 75.95</p></span>
          </div>
        </div>
        <div>
        <div className="regroup4">
          <img src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/4/2/428381-0001_1_1.jpg">   
          </img> <span>Metropolis Small Shoe<p className="related-p">$ 55.95</p></span>
          </div>
        </div>
        <div>
        <div className="regroup4">
          <img src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/4/2/428374-0023_1_1.jpg">   
          </img> <span>White Hand Shoe <p className="related-p">$ 99.00</p></span>
          </div>
        </div>
        <div>
        <div className="regroup4">
          <img src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/4/2/428446-0067_1_1_1_1_1.jpg">   
          </img> <span>Marina Shopping Shoe<p className="related-p">$ 75.95</p></span>
          </div>
        </div>
        <div>
        <div className="regroup4">
          <img src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/small_image/196x/040ec09b1e35df139433887a97daa66f/4/2/428357-0001_1_1_1.jpg">   
          </img> <span>Sky blue Min<p className="related-p">$ 75.95</p></span>
          </div>
        </div>
      </Slider>
    );
  }
}
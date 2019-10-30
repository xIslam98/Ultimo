import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Related extends React.Component {
  render() {
    let settings = {
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical:true,
      arrows:true
    };
    return (
    <Slider {...settings}>
        <div >
          <div className="regroup">
          <img src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/8/5/857055-0115_1_2.jpg">   
          </img> <span>Sample Bag <p className="related-p">$ 75.95</p><p className="related-p">Add to Wishlist</p></span>
          </div>
        </div>
        <div>
        <div className="regroup">
          <img src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/7/3/734198-0056_1_2.jpg">   
          </img> <span>Metropolis Small Bag<p className="related-p">$ 55.95</p><p className="related-p">Add to Wishlist</p></span>
          </div>
        </div>
        <div>
        <div className="regroup">
          <img src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/5/4/546029-0013_1_2.jpg">   
          </img> <span>White Hand Bag <p className="related-p">$ 99.00</p><p className="related-p">Add to Wishlist</p></span>
          </div>
        </div>
        <div>
        <div className="regroup">
          <img src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/8/7/870044-0032_1_2.jpg">   
          </img> <span>Marina Shopping Bag<p className="related-p">$ 75.95</p><p className="related-p">Add to Wishlist</p></span>
          </div>
        </div>
        <div>
        <div className="regroup">
          <img src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/9/9/996093-0100_1.jpg">   
          </img> <span>Sky blue Min<p className="related-p">$ 75.95</p><p className="related-p">Add to Wishlist</p></span>
          </div>
        </div>
        <div>
        <div className="regroup">
          <img src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/8/5/857055-0115_1_2.jpg">   
          </img> <span>Sample Bag <p className="related-p">$ 75.95</p><p className="related-p">Add to Wishlist</p></span>
          </div>
        </div>
        <div>
        <div className="regroup">
          <img src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/2/7/271669-0054_1.jpg">   
          </img> <span>Sample Bag <p className="related-p">$ 75.95</p><p className="related-p">Add to Wishlist</p></span>
          </div>
        </div>
        <div>
        <div className="regroup">
          <img src="http://ultimo.infortis-themes.com/demo/media/catalog/product/cache/4/thumbnail/100x/040ec09b1e35df139433887a97daa66f/6/7/677188-0067_1.jpg">   
          </img> <span>Sample Bag <p className="related-p">$ 75.95</p><p className="related-p">Add to Wishlist</p></span>
          </div>
        </div>
      </Slider>
    );
  }
}
/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import './font-awesome/css/brands.css';
import './font-awesome/css/solid.css';
import './font-awesome/css/all.css';
import ContentZoom from 'react-content-zoom';
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemPanel,AccordionItemButton} from 'react-accessible-accordion';
import Related from './carousel-related';
import Shoes from './carousel-shoes'
import axios from 'axios';
import BottomBag from './carousel-bottom-bag'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
 
let tempo;
let index;
let contact;
let utente;

export default class FeatureShoes extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            s: 1,
            color: "",
            size: "",
            data: "undefined",
            data2:"undefined"
          }
          this.select = this.select.bind(this)
          this.addNumber = this.addNumber.bind(this)
          this.removeNumber = this.removeNumber.bind(this)
          this.changeColor = this.changeColor.bind(this)
          this.changesize = this.changesize.bind(this)
          this.Addcart=this.Addcart.bind(this)
        }
    componentDidMount () {
        axios.get('http://127.0.0.1:7000/utenti')
      .then((response) => {
    this.data2 = response.data;
      console.log(this.data2)
      this.setState({data2: response.data});
      });
        axios.get('http://127.0.0.1:7000/menu')
        .then((response) => {
      this.data = response.data;
      console.log(this.data)
      this.setState({data: response.data});
      });
    }
    Addcart(e){
        if(sessionStorage.length>0){
            const  dataindex = location.search.split("=");
           contact = sessionStorage.getItem("user");
         utente=this.state.data2.find((element) => { return element.username === contact})
         index=this.state.data2.indexOf(utente);
         let cart= [];
         cart= this.state.data2[index].cart
         let exElementi = [
            { 
            id:this.state.data[14].submenu[dataindex[1]].id, 
            title:this.state.data[14].submenu[dataindex[1]].title,
            image:this.state.data[14].submenu[dataindex[1]].image,
            offer:this.state.data[14].submenu[dataindex[1]].offer,
            offer_price:this.state.data[14].submenu[dataindex[1]].offer_price,
            price:this.state.data[14].submenu[dataindex[1]].price,
            image2:this.state.data[14].submenu[dataindex[1]].image2 
            }
          ]
          cart.push(exElementi);
          console.log(this.state.data2);
         axios.patch(`http://127.0.0.1:7000/utenti/${utente.id}`, {cart})
         .then(res => {
           console.log(res);
           console.log(res.data);
         })
         const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
      })              
      Toast.fire({
          type: 'success',
          title: 'Signed in successfully'
      })
      window.location.reload();
    }else{
          window.location.href = "http://localhost:3000/login";
        }
      }
        addNumber(){
            tempo=this.state.s+1
            this.setState({s: tempo})
        }
        removeNumber(){
            tempo=this.state.s-1
            this.setState({s: tempo})
        }
        select(e){
        this.setState({s: e.target.value})
        }
        changeColor(e){
            if(e.target.dataset.set==="white"){
            this.setState({color: "White"})
            }else{
                this.setState({color: "Black"})  
            }
            
        }
        changesize(e){
            if(e.target.dataset.set==="s"){
                this.setState({size: "S"})
                }else{
                    this.setState({size: "M"})  
                }
        }
    render() {
        // eslint-disable-next-line no-restricted-globals
        const  dataindex = location.search.split("=");
        if(this.state.data[0].title){
      return(
          <div>
              <div className="back">
                  <div className="regroup-feature mobile">
                      <div className="img-feature">
                      <div className="zoom1-flex">
                    <ContentZoom zoomPercent={350}
                            largeImageUrl={this.state.data[14].submenu[dataindex[1]].image} class="cloud-zoom product-image-gallery"
                            imageUrl={this.state.data[14].submenu[dataindex[1]].image} class="cloud-zoom product-image-gallery"
                            contentHeight={357}
                            contentWidth={268} />
                      </div>
                      <div className="zoom2-flex">
                            <button className="Zoom"> Zoom </button>
                      </div>
                      </div>
                      <div className="Feature-sample-fashion">
                          <h2 className="feature-h2">{this.state.data[14].submenu[dataindex[1]].title}</h2>
                          <div className="align-stars">
                                <div className="rating-box">
                                    <div className="rating"></div>             
                                </div>
                            <span className="amount">Be the first to review this product</span>
                            </div>
                            <p className="p-feature">A Configurable product offers the customers a variety of options, which are selected from drop-down lists. For example, a tee shirt that comes in three colors and three sizes would have two drop-down lists of options for Color and Size.</p>
                            <Accordion allowZeroExpanded={true} >
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                       Only 14 Left
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        <div className="regroup2">
                                            <p className="para-title">Product Name</p><p className="para-title" >Qty</p>
                                        </div>
                                        <span className="section-line"></span>
                                        <div className="regroup2">
                                            <p className="para">Sample Fashion Product (White S)</p><p className="para">5</p>
                                        </div>
                                        <div className="regroup2">
                                            <p className="para">Sample Fashion Product (Black S)</p><p className="para">6</p>
                                        </div>
                                        <div className="regroup2">
                                            <p className="para">Sample Fashion Product (White M)</p><p className="para"> 2</p>
                                        </div>
                                        <div className="regroup2">
                                            <p className="para">Sample Fashion Product (White M)</p><p className="para">1</p>
                                        </div>
                                        
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            </Accordion>
                           <div className="regroup2">
                             <div className="price">{this.state.data[14].submenu[dataindex[1]].price}$</div>
                             <div className="stock">Avaibility:In Stock</div>  
                           </div>
                           <div>Color: {this.state.color}</div>
                           <div className="regroup">
                               <div className="white" onClick={this.changeColor} data-set="white"></div>
                               <div className="black" onClick={this.changeColor} data-set="black"></div>

                           </div>
                           <div>Size: {this.state.size}</div>
                           <div className="regroup">
                               <div className="size-s" onClick={this.changesize} data-set="s">S</div>
                               <div className="size-m" onClick={this.changesize} data-set="m">M</div>

                           </div>
                           <div className="regroup2 mobile">
                           <button className="add-to-cart" onClick={(e)=>{this.Addcart(e)}}>Add To Cart</button>
                                <span>Qty:</span>
                                <div className="regroup3">
                                    <input type="text"  className="qty" value={this.state.s} data-set="quantity" onChange={this.select}></input>                              
                                    <div className="regroup4">
                                        <i class="fas fa-angle-up" onClick={this.addNumber} ></i>
                                        <i class="fas fa-angle-down" onClick={this.removeNumber} ></i>
                                    </div>
                                </div>
                            </div>
                            <span className="section-line"></span>
                            <div className="wishlist-inline">   
                            <div className="wishlist2"><i class="fas fa-heart"></i><span>Add To Wishlist</span></div>
                            <div className="wishlist2"><i class="fas fa-cubes"></i><span>Add To Compare</span></div>
                            <div className="wishlist2"> <i class="fas fa-share-alt"></i><span>Share</span></div>
                            </div>
                      </div>
                      <div className="company-feature">
                          <img className="img-company" src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/brands/logofashion.png"></img>
                          <ul>
                              <li><div className="regroup"><div><i class="fas fa-plane"></i></div><div className="about-block"><p className="para">We will send this product in 2 days.</p></div></div></li>
                              <li><div className="regroup"><div><i class="fas fa-phone-square-alt"></i></div><div className="about-block"><p className="para">Call us now for more info about our products.</p></div></div></li>
                              <li><div className="regroup"><div><i class="fas fa-sync-alt"></i></div><div className="about-block"><p className="para">Return purchased items and get all your money back.</p></div></div></li>
                              <li><div className="regroup"><div><i class="fas fa-star-half-alt"></i></div ><div className="about-block"><p className="para">Buy this product and earn 10 special loyalty points!</p></div></div></li>
                          </ul>
                          <span className="section-line"></span>
                      </div>
                  </div>
                  <div className="feature-second-part">
                      <div className="regroup">
                          <div className="accordion-shoes">
                          <div className="accordion">
                  <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                               <div className="regroup2"> <span> Details </span> <i class="fas fa-angle-double-down"></i> </div><span className="section-line"></span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Configurable Products let your customers select the variant they desire by choosing options. For example, you sell t-shirts in two colors and three sizes. You’d create the six variants as individual products (with their own skus) and then add these six to a configurable product from where customers can choose size and color, then add to cart. If desired you could also have customers search for “red medium t-shirt” and land on the specific page for this variant.

                            Complex products in Magento are a way to consolidate product variants onto a single product info page in the front-end. The variants themselves are actually simple products and have their own SKUs and stock management. This is very powerful - it allows you to let customers search for the individual variants, but browse only to the consolidated product pages. Here are some selected options of Magento catalog management:
                            <div className="regroup2">
                                <ul>
                                    <li>Create Store-specific attributes on the fly</li>
                                    <li>Simple, Configurable (e.g. size, color, etc.),Bundled and Grouped Products</li>
                                    <li>Downloadable/Digital Products, Virtual Products</li>
                                    <li>Customer Personalized Products - upload text for embroidery, monogramming, etc.</li>
                                    <li>Inventory Management with Backordered items</li>
                                    <li>Tax Rates per location, customer group and product type</li>
                                    <li>Advanced Pricing Rules and support for Special Prices</li>
                                </ul>
                                <ul>
                                    <li>Attribute Sets for quick product creation of different item types</li>
                                    <li>Approve, Edit and Delete Product Reviews and Tags</li>
                                    <li>Media Manager with automatic image resizing and watermarking</li>
                                    <li>Search Results rewrites and redirects</li>
                                    <li>Batch Import and Export of catalog</li>
                                    <li>Batch Updates to products in admin panel</li>
                                    <li>RSS feed for Low Inventory Alerts</li>
                                </ul>
                            </div>
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            <div className="regroup2"> <span> Additional Info </span> <i class="fas fa-angle-double-down"></i> </div><span className="section-line"></span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                <div className="regroup">
                                    <p className="para-title">Country of Manufacture</p>
                                    <p className="para">China</p>
                                    <span className="section-line"></span>
                                </div>
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            <div className="regroup2"> <span> Reviews </span> <i class="fas fa-angle-double-down"></i> </div><span className="section-line"></span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                <h2>Write Your Own Review</h2>
                                <p>Only registered users can write reviews. Please, log in or register</p>
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            <div className="regroup2"> <span> Tags </span> <i class="fas fa-angle-double-down"></i> </div><span className="section-line"></span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            <div className="regroup2"> <span> Custom tab 1 </span> <i class="fas fa-angle-double-down"></i> </div><span className="section-line"></span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            <div className="regroup2"> <span> Custom tab 2 </span> <i class="fas fa-angle-double-down"></i> </div><span className="section-line"></span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Another custom CMS block displayed as a tab. You can use it to display info about returns and refunds, latest promotions etc. You can put your own content here: text, HTML, images - whatever you like. There are many similar blocks accross the store. All CMS blocks are editable from the admin panel.

Lorem ipsum dolor sit, consectetur adipiscing elit. Etiam neque velit, blandit sed scelerisque quis. Nullam ornare enim nec justo bibendum lobortis. In eget metus.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <div className="related-carousel-shoes">
                <h1 className="shoes-title">You may also be interested in the following product(s)</h1>
                <span className="section-line"></span>
                <BottomBag />
                </div>
                </div>
                </div>
                <div className="related">
                    <span className="relative-relate" >Related</span><span className="section-line relative-relate"></span>
                <Related />
                </div>
                </div>
                  </div>
              </div>
          </div>
      )
    }else{return <div> </div>}
    }
}
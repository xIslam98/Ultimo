import React, { Component } from 'react';
import './font-awesome/css/brands.css';
import './font-awesome/css/solid.css';
import './font-awesome/css/all.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import MenuBottom from './menubottom'
let utente;
let tempo;
let index;
let contact;
let tempora;
let contprice=0;
export default class Wishlist extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            data: "undefined",
            data2:"undefined",
            s:1
          }
          this.takeindex=this.takeindex.bind(this);
          this.select=this.select.bind(this);
          this.addNumber=this.addNumber.bind(this);
          this.removeNumber=this.removeNumber.bind(this);
          this.removewishcart=this.removewishcart.bind(this);


        }
    componentDidMount () {
        axios.get('http://127.0.0.1:7000/utenti')
        .then((response) => {
        this.data2 = response.data;
        console.log(this.data2)
        this.setState({data2: response.data});
        tempo= this.state.data2
        });
        axios.get('http://127.0.0.1:7000/menu')
        .then((response) => {
      this.data = response.data;
      console.log(this.data)
      this.setState({data: response.data});
      tempo= this.state.data
      });
   
    }
    select(e){
        this.setState({s: e.target.value})
    }
    addNumber(){
        
        if(this.state.s>0){
        tempora=this.state.s+1
        this.setState({s: tempora})
        }
    }
    removeNumber(){
        if(this.state.s>1){
        tempora=this.state.s-1
        this.setState({s: tempora})
        }else{
            alert("Non si puo diminuire la quantita al di sotto di 1");
        }
    }
    removewishcart(e){
        alert("i'm here");
        let cont=e.target.dataset.set;
        //let tempodelete=this.state.data2[index].wishlist[cont][0].id;
        this.state.data2[index].wishlist.splice(cont,1)
        let utenti=this.state.data2;
        this.setState({data2: utenti})
    }
    takeindex(){
    contact = sessionStorage.getItem("user");
    utente=this.state.data2.find((element) => { return element.username === contact})
    index=this.state.data2.indexOf(utente); 
     console.log( this.state.data2[index].wishlist) ;
    }
    
    insertWishlist(position){
        contprice=contprice+this.state.data2[index].wishlist[position][0].price;
        return (
            <div>
        <div className="title">
            <span className="title-1">Product Name</span>
            <span className="title-2">Unit Price</span>
            <span className="title-3">Qty</span>
        </div>
        <div className="contenitor-wishcart"> 
            <div className="simple-flex border">
                <div className="image-cont"><img  className="img-wishcart" src={this.state.data2[index].wishlist[position][0].image}></img></div>
                <div className="title-cont">{this.state.data2[index].wishlist[position][0].title}</div>
                <div className="price-cont"><span className="margin-adjust-span">{this.state.data2[index].wishlist[position][0].price}$</span></div>
                <div className="regroup3 wishcart">
                                    <input type="text"  className="qty" value={this.state.s} data-set="quantity" onChange={this.select}></input>                              
                                    <div className="regroup4">
                                        <i class="fas fa-angle-up wishcart" onClick={this.addNumber}></i>
                                        <i class="fas fa-angle-down wishcart" onClick={this.removeNumber}></i>
                                    </div>
                </div>
                <div className="remove wishlist">
                    <i class="far fa-times-circle" data-set={position} onClick={(e)=>this.removewishcart(e)}></i>

                </div>
            </div>
        </div>
        </div>
        )
    }
render(){
    if(this.state.data[0].title){
    return(
        <div className="back">
            <h1 className="title-wishcart">Wishlist</h1>
            {this.takeindex()}
            {
                
                   this.state.data2[index].wishlist.map((mater,index)=>{
                       return(
                       <div>{this.insertWishlist(index)}</div>
                       )
                   }) 
            }
            <div className="regroup-bet">
                <div><button className="button-wishcart">Continue Shopping</button></div>
                <div><button className="button-wishcart2">Update Shopping Cart</button></div>
            </div>
            <span className="section-line"></span>
            <div className="regroup-bet">
                <div className="bottom-wishcart-left">
                    <img src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/banners/cart-discount.png"></img>
                    <div className="simple-flex">
                        <div className="first-part-wishcart-left">
                            <span className="estimate-discount">Estimate Shipping and Tax</span>
                            <span className="section-line"></span>
                            <p>Enter your destination to get a shipping estimate.</p>
                            <label>Country</label>
                            <select className="country">    
                            <option value="AFG">Afghanistan</option>
                            <option value="ALA">Åland Islands</option>
                            <option value="ALB">Albania</option>
                            <option value="DZA">Algeria</option>
                            <option value="ASM">American Samoa</option>
                            <option value="AND">Andorra</option>
                            <option value="AGO">Angola</option>
                            <option value="AIA">Anguilla</option>
                            <option value="ATA">Antarctica</option>
                            <option value="ATG">Antigua and Barbuda</option>
                            <option value="ARG">Argentina</option>
                            <option value="ARM">Armenia</option>
                            <option value="ABW">Aruba</option>
                            <option value="AUS">Australia</option>
                            <option value="AUT">Austria</option>
                            <option value="AZE">Azerbaijan</option>
                            <option value="BHS">Bahamas</option>
                            <option value="BHR">Bahrain</option>
                            <option value="BGD">Bangladesh</option>
                            <option value="BRB">Barbados</option>
                            <option value="BLR">Belarus</option>
                            <option value="BEL">Belgium</option>
                            <option value="BLZ">Belize</option>
                            <option value="BEN">Benin</option>
                            <option value="BMU">Bermuda</option>
                            <option value="BTN">Bhutan</option>
                            <option value="BOL">Bolivia, Plurinational State of</option>
                            <option value="BES">Bonaire, Sint Eustatius and Saba</option>
                            <option value="BIH">Bosnia and Herzegovina</option>
                            <option value="BWA">Botswana</option>
                            <option value="BVT">Bouvet Island</option>
                            <option value="BRA">Brazil</option>
                            <option value="IOT">British Indian Ocean Territory</option>
                            <option value="BRN">Brunei Darussalam</option>
                            <option value="BGR">Bulgaria</option>
                            <option value="BFA">Burkina Faso</option>
                            <option value="BDI">Burundi</option>
                            <option value="KHM">Cambodia</option>
                            <option value="CMR">Cameroon</option>
                            <option value="CAN">Canada</option>
                            <option value="CPV">Cape Verde</option>
                            <option value="CYM">Cayman Islands</option>
                            <option value="CAF">Central African Republic</option>
                            <option value="TCD">Chad</option>
                            <option value="CHL">Chile</option>
                            <option value="CHN">China</option>
                            <option value="CXR">Christmas Island</option>
                            <option value="CCK">Cocos (Keeling) Islands</option>
                            <option value="COL">Colombia</option>
                            <option value="COM">Comoros</option>
                            <option value="COG">Congo</option>
                            <option value="COD">Congo, the Democratic Republic of the</option>
                            <option value="COK">Cook Islands</option>
                            <option value="CRI">Costa Rica</option>
                            <option value="CIV">Côte d'Ivoire</option>
                            <option value="HRV">Croatia</option>
                            <option value="CUB">Cuba</option>
                            <option value="CUW">Curaçao</option>
                            <option value="CYP">Cyprus</option>
                            <option value="CZE">Czech Republic</option>
                            <option value="DNK">Denmark</option>
                            <option value="DJI">Djibouti</option>
                            <option value="DMA">Dominica</option>
                            <option value="DOM">Dominican Republic</option>
                            <option value="ECU">Ecuador</option>
                            <option value="EGY">Egypt</option>
                            <option value="SLV">El Salvador</option>
                            <option value="GNQ">Equatorial Guinea</option>
                            <option value="ERI">Eritrea</option>
                            <option value="EST">Estonia</option>
                            <option value="ETH">Ethiopia</option>
                            <option value="FLK">Falkland Islands (Malvinas)</option>
                            <option value="FRO">Faroe Islands</option>
                            <option value="FJI">Fiji</option>
                            <option value="FIN">Finland</option>
                            <option value="FRA">France</option>
                            <option value="GUF">French Guiana</option>
                            <option value="PYF">French Polynesia</option>
                            <option value="ATF">French Southern Territories</option>
                            <option value="GAB">Gabon</option>
                            <option value="GMB">Gambia</option>
                            <option value="GEO">Georgia</option>
                            <option value="DEU">Germany</option>
                            <option value="GHA">Ghana</option>
                            <option value="GIB">Gibraltar</option>
                            <option value="GRC">Greece</option>
                            <option value="GRL">Greenland</option>
                            <option value="GRD">Grenada</option>
                            <option value="GLP">Guadeloupe</option>
                            <option value="GUM">Guam</option>
                            <option value="GTM">Guatemala</option>
                            <option value="GGY">Guernsey</option>
                            <option value="GIN">Guinea</option>
                            <option value="GNB">Guinea-Bissau</option>
                            <option value="GUY">Guyana</option>
                            <option value="HTI">Haiti</option>
                            <option value="HMD">Heard Island and McDonald Islands</option>
                            <option value="VAT">Holy See (Vatican City State)</option>
                            <option value="HND">Honduras</option>
                            <option value="HKG">Hong Kong</option>
                            <option value="HUN">Hungary</option>
                            <option value="ISL">Iceland</option>
                            <option value="IND">India</option>
                            <option value="IDN">Indonesia</option>
                            <option value="IRN">Iran, Islamic Republic of</option>
                            <option value="IRQ">Iraq</option>
                            <option value="IRL">Ireland</option>
                            <option value="IMN">Isle of Man</option>
                            <option value="ISR">Israel</option>
                            <option value="ITA">Italy</option>
                            <option value="JAM">Jamaica</option>
                            <option value="JPN">Japan</option>
                            <option value="JEY">Jersey</option>
                            <option value="JOR">Jordan</option>
                            <option value="KAZ">Kazakhstan</option>
                            <option value="KEN">Kenya</option>
                            <option value="KIR">Kiribati</option>
                            <option value="PRK">Korea, Democratic People's Republic of</option>
                            <option value="KOR">Korea, Republic of</option>
                            <option value="KWT">Kuwait</option>
                            <option value="KGZ">Kyrgyzstan</option>
                            <option value="LAO">Lao People's Democratic Republic</option>
                            <option value="LVA">Latvia</option>
                            <option value="LBN">Lebanon</option>
                            <option value="LSO">Lesotho</option>
                            <option value="LBR">Liberia</option>
                            <option value="LBY">Libya</option>
                            <option value="LIE">Liechtenstein</option>
                            <option value="LTU">Lithuania</option>
                            <option value="LUX">Luxembourg</option>
                            <option value="MAC">Macao</option>
                            <option value="MKD">Macedonia, the former Yugoslav Republic of</option>
                            <option value="MDG">Madagascar</option>
                            <option value="MWI">Malawi</option>
                            <option value="MYS">Malaysia</option>
                            <option value="MDV">Maldives</option>
                            <option value="MLI">Mali</option>
                            <option value="MLT">Malta</option>
                            <option value="MHL">Marshall Islands</option>
                            <option value="MTQ">Martinique</option>
                            <option value="MRT">Mauritania</option>
                            <option value="MUS">Mauritius</option>
                            <option value="MYT">Mayotte</option>
                            <option value="MEX">Mexico</option>
                            <option value="FSM">Micronesia, Federated States of</option>
                            <option value="MDA">Moldova, Republic of</option>
                            <option value="MCO">Monaco</option>
                            <option value="MNG">Mongolia</option>
                            <option value="MNE">Montenegro</option>
                            <option value="MSR">Montserrat</option>
                            <option value="MAR">Morocco</option>
                            <option value="MOZ">Mozambique</option>
                            <option value="MMR">Myanmar</option>
                            <option value="NAM">Namibia</option>
                            <option value="NRU">Nauru</option>
                            <option value="NPL">Nepal</option>
                            <option value="NLD">Netherlands</option>
                            <option value="NCL">New Caledonia</option>
                            <option value="NZL">New Zealand</option>
                            <option value="NIC">Nicaragua</option>
                            <option value="NER">Niger</option>
                            <option value="NGA">Nigeria</option>
                            <option value="NIU">Niue</option>
                            <option value="NFK">Norfolk Island</option>
                            <option value="MNP">Northern Mariana Islands</option>
                            <option value="NOR">Norway</option>
                            <option value="OMN">Oman</option>
                            <option value="PAK">Pakistan</option>
                            <option value="PLW">Palau</option>
                            <option value="PSE">Palestinian Territory, Occupied</option>
                            <option value="PAN">Panama</option>
                            <option value="PNG">Papua New Guinea</option>
                            <option value="PRY">Paraguay</option>
                            <option value="PER">Peru</option>
                            <option value="PHL">Philippines</option>
                            <option value="PCN">Pitcairn</option>
                            <option value="POL">Poland</option>
                            <option value="PRT">Portugal</option>
                            <option value="PRI">Puerto Rico</option>
                            <option value="QAT">Qatar</option>
                            <option value="REU">Réunion</option>
                            <option value="ROU">Romania</option>
                            <option value="RUS">Russian Federation</option>
                            <option value="RWA">Rwanda</option>
                            <option value="BLM">Saint Barthélemy</option>
                            <option value="SHN">Saint Helena, Ascension and Tristan da Cunha</option>
                            <option value="KNA">Saint Kitts and Nevis</option>
                            <option value="LCA">Saint Lucia</option>
                            <option value="MAF">Saint Martin (French part)</option>
                            <option value="SPM">Saint Pierre and Miquelon</option>
                            <option value="VCT">Saint Vincent and the Grenadines</option>
                            <option value="WSM">Samoa</option>
                            <option value="SMR">San Marino</option>
                            <option value="STP">Sao Tome and Principe</option>
                            <option value="SAU">Saudi Arabia</option>
                            <option value="SEN">Senegal</option>
                            <option value="SRB">Serbia</option>
                            <option value="SYC">Seychelles</option>
                            <option value="SLE">Sierra Leone</option>
                            <option value="SGP">Singapore</option>
                            <option value="SXM">Sint Maarten (Dutch part)</option>
                            <option value="SVK">Slovakia</option>
                            <option value="SVN">Slovenia</option>
                            <option value="SLB">Solomon Islands</option>
                            <option value="SOM">Somalia</option>
                            <option value="ZAF">South Africa</option>
                            <option value="SGS">South Georgia and the South Sandwich Islands</option>
                            <option value="SSD">South Sudan</option>
                            <option value="ESP">Spain</option>
                            <option value="LKA">Sri Lanka</option>
                            <option value="SDN">Sudan</option>
                            <option value="SUR">Suriname</option>
                            <option value="SJM">Svalbard and Jan Mayen</option>
                            <option value="SWZ">Swaziland</option>
                            <option value="SWE">Sweden</option>
                            <option value="CHE">Switzerland</option>
                            <option value="SYR">Syrian Arab Republic</option>
                            <option value="TWN">Taiwan, Province of China</option>
                            <option value="TJK">Tajikistan</option>
                            <option value="TZA">Tanzania, United Republic of</option>
                            <option value="THA">Thailand</option>
                            <option value="TLS">Timor-Leste</option>
                            <option value="TGO">Togo</option>
                            <option value="TKL">Tokelau</option>
                            <option value="TON">Tonga</option>
                            <option value="TTO">Trinidad and Tobago</option>
                            <option value="TUN">Tunisia</option>
                            <option value="TUR">Turkey</option>
                            <option value="TKM">Turkmenistan</option>
                            <option value="TCA">Turks and Caicos Islands</option>
                            <option value="TUV">Tuvalu</option>
                            <option value="UGA">Uganda</option>
                            <option value="UKR">Ukraine</option>
                            <option value="ARE">United Arab Emirates</option>
                            <option value="GBR">United Kingdom</option>
                            <option value="USA">United States</option>
                            <option value="UMI">United States Minor Outlying Islands</option>
                            <option value="URY">Uruguay</option>
                            <option value="UZB">Uzbekistan</option>
                            <option value="VUT">Vanuatu</option>
                            <option value="VEN">Venezuela, Bolivarian Republic of</option>
                            <option value="VNM">Viet Nam</option>
                            <option value="VGB">Virgin Islands, British</option>
                            <option value="VIR">Virgin Islands, U.S.</option>
                            <option value="WLF">Wallis and Futuna</option>
                            <option value="ESH">Western Sahara</option>
                            <option value="YEM">Yemen</option>
                            <option value="ZMB">Zambia</option>
                            <option value="ZWE">Zimbabwe</option>
                        </select>
                            <label>State/Province</label>
                            <input></input>
                            <label>Zip/Postal Code</label>
                            <input></input>
                            <button>Get a Quote</button>
                        </div>
                        <div className="first-part-wishcart-right">
                            <span className="estimate-discount">Discount Codes</span>
                            <span className="section-line"></span>
                            <p>Enter your coupon code if you have one.</p>
                            <input className="input-coupon"></input>
                            <button className="button-coupons">Apply coupon</button>
                        </div>                     
                    </div>
                </div>
                <div className="bottom-wishcart-right-upper">
                    <div className="bottom-wishcart-right">
                        <div className="wei-low">Subtotal (Excl. Tax) ${contprice}.00</div>
                        <div className="wei-low">Subtotal (Incl. Tax) ${contprice}.00</div>
                        <div className="wei-high">Grand Total ${contprice}.00</div>
                        <button className="button-cart-wishcart">Proceed to Checkout</button>
                        <span className="hoverize">Checkout with Multiple Addresses</span>
                    </div>
                    <div className="simple-flex">
                        <span className="span-bottom-certificate">Sample info about SSL Certificate</span>
                        <img src="http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/ultimo/custom/block_cart_below_totals.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
    }else{return <div></div>}  
}
}
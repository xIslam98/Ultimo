import React, { Component } from 'react';
import './font-awesome/css/brands.css';
import './font-awesome/css/solid.css';
import './font-awesome/css/all.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SliderWomen from './sliderwome'


let tempo=0;
let tempo2;
let tempo3=[];
export default class Women extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: "undefined",
            list:"product",
            opener: "+",
            openeract:"size types",
            opener2: "+",
            openeract2:"size types",
            opener3: "+",
            openeract3:"size types",
            opener4: "+",
            openeract4:"size types",
            opener5: "+",
            openeract5:"size types",
            opener6: "+",
            openeract6:"size types",
            opener7: "+",
            openeract7:"size types",
            opener8: "+",
            openeract8:"size types",
          }
          this.orderbyname = this.orderbyname.bind(this)
          this.select=this.select.bind(this)
          this.orderbyprice=this.orderbyprice.bind(this)
          this.price=this.price.bind(this)
          this.createlist=this.createlist.bind(this);
          this.creategrid=this.creategrid.bind(this);
          this.openAll=this.openAll.bind(this);
        }
    componentDidMount () {
        axios.get('http://127.0.0.1:7000/menu')
        .then((response) => {
      this.data = response.data;
      console.log(this.data)
      this.setState({data: response.data});
      tempo= this.state.data
      });
    }
    orderbyname(){
        tempo2=this.state.data
        tempo = this.state.data[17].submenu.sort(this.dynamicSort('title'));
        tempo2[17].submenu=tempo;
        console.log(tempo2)
        this.setState({data: tempo2});
        console.log(this.state.data)
    }
    orderbyprice(){  
        tempo2=this.state.data
        tempo = this.state.data[17].submenu.sort(this.dynamicSort('price'));
        tempo2[17].submenu=tempo;
        console.log(tempo2)
        this.setState({data: tempo2});
        console.log(this.state.data)
    }
    orderbyposition(){
         axios.get('http://127.0.0.1:7000/menu')
        .then((response) => {
      this.data = response.data;
      console.log(this.data)
      this.setState({data: response.data});
      let tempo= this.state.data
    });
    }
    dynamicSort(property) {
        return function(a, b) {
            return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        }
    }
    price(PriceDefineStart,PriceDefineEnd,e){
        e.preventDefault()
        for(let i=0;i<this.state.data[17].submenu.length;i++){
            if((PriceDefineStart<this.state.data[17].submenu[i].price) && (PriceDefineEnd >this.state.data[17].submenu[i].price))
            tempo3.push(this.state.data[17].submenu[i])
        }
        tempo2=this.state.data
        tempo2[17].submenu=tempo3;
        console.log(tempo3);
        console.log(tempo2);
        this.setState({data: tempo2});
    }
    select(e){
        e.preventDefault()
        console.log(e.target.value)
        if(e.target.value==="name"){
            this.orderbyname();
        }else if(e.target.value==="price"){
            this.orderbyprice();
        }else if(e.target.value==="position"){
            this.orderbyposition();
        }
        
    }
    createlist(e){
        e.preventDefault()
        let temporanea = "product list"
        this.setState({list: temporanea});
    }
    creategrid(e){
        e.preventDefault()
        let temporanea = "product"
        this.setState({list: temporanea});
    }
    openAll(e,index,x,y){
        if(index==="+"){
          this.setState({[x]: "-"})
        this.setState({[y]: "size"})  
        }else{
            this.setState({[x]: "+"})
            this.setState({[y]: "size types"})
        }
        
    }
render(){
    if(this.state.data[0].title){
    return(
        <div className="back">
            <div className="shirt-shop">
                <div className="regroup-pdl">
                    <div className="lateral-bar">
                    <h3 className="h3-shirt">Categories: Fashion</h3>
                    <span className="section-line"></span>
                   
                    <div className="div-size">                    
                    <div className="simple-flex-relative"><li className="size2">Tops  </li> <span className="call" onClick={(e)=>this.openAll(e,this.state.opener,"opener","openeract")}>{this.state.opener}</span></div>                
                                <li className={this.state.openeract}>Casual Tops</li>
                                <li className={this.state.openeract}>Shirts</li>
                                <li className={this.state.openeract}>Tunics</li>
                                <li className={this.state.openeract}>Vests</li>
                        <div className="simple-flex-relative"><li className="size2">Bags  </li> <span className="call" onClick={(e)=>this.openAll(e,this.state.opener2,"opener2","openeract2")}>{this.state.opener2}</span></div>                
                                <li className={this.state.openeract2}>Designer Bags</li>
                                <li className={this.state.openeract2}>Handbags</li>
                                <li className={this.state.openeract2}>Purses</li>
                                <li className={this.state.openeract2}>Shoulder Bags</li>
                        
                        <div className="simple-flex-relative"><li className="size2">Shoes  </li> <span className="call" onClick={(e)=>this.openAll(e,this.state.opener3,"opener3","openeract3")}>{this.state.opener3}</span></div>                
                                <li className={this.state.openeract3}>Flat Shoes</li>
                                <li className={this.state.openeract3}>Flat Sandals</li>
                                <li className={this.state.openeract3}>Boots</li>
                                <li className={this.state.openeract3}>Heels</li>
                        
                        <div className="simple-flex-relative"><li className="size2">Jewelry  </li> <span className="call" onClick={(e)=>this.openAll(e,this.state.opener4,"opener4","openeract4")}>{this.state.opener4}</span></div>                
                                <li className={this.state.openeract4}>Bracelets</li>
                                <li className={this.state.openeract4}>Necklaces & Pendants</li>
                                <li className={this.state.openeract4}>Pins & Brooches</li>
                        <div className="simple-flex-relative"><li className="size2">Dresses  </li> <span className="call" onClick={(e)=>this.openAll(e,this.state.opener5,"opener5","openeract5")}>{this.state.opener5}</span></div>                
                                <li className={this.state.openeract5}>Casual Dresses</li>
                                <li className={this.state.openeract5}>Evening</li>
                                <li className={this.state.openeract5}>Designer</li>
                                <li className={this.state.openeract5}>Party</li>
                        <div className="simple-flex-relative"><li className="size2">Lingerie  </li> <span className="call" onClick={(e)=>this.openAll(e,this.state.opener6,"opener6","openeract6")}>{this.state.opener6}</span></div>                
                                <li className={this.state.openeract6}>Bras</li>
                                <li className={this.state.openeract6}>Bodies</li>
                                <li className={this.state.openeract6}>Lingerie Sets</li>
                                <li className={this.state.openeract6}>Shapewear</li>
                        <div className="simple-flex-relative"><li className="size2">Jackets  </li> <span className="call" onClick={(e)=>this.openAll(e,this.state.opener7,"opener7","openeract7")}>{this.state.opener7}</span></div>                
                                <li className={this.state.openeract7}>Jackets</li>
                                <li className={this.state.openeract7}>Leather Jacket</li>
                                <li className={this.state.openeract7}>Blazers</li>
                        <div className="simple-flex-relative"><li className="size2">Swimwear  </li> <span className="call" onClick={(e)=>this.openAll(e,this.state.opener8,"opener8","openeract8")}>{this.state.opener8}</span></div>                
                                <li className={this.state.openeract8}>Swimsuits</li>
                                <li className={this.state.openeract8}>Beach Clothing</li>
                                <li className={this.state.openeract8}>Bikinis</li>
                                
                    </div>              
                    <h3 className="h3-shirt">Shop By</h3>
                    <span className="section-line"></span>
                    <div className="price-navbar">
                        <p className="title-navbar-weight">Price</p>
                        <div className="simple-flex-navbar"><i class="fas fa-caret-right"></i><li className="price" onClick={(e)=>this.price(0,59.99,e)}>$0()-$59.99()</li></div>
                        <div className="simple-flex-navbar"><i class="fas fa-caret-right"></i><li className="price" onClick={(e)=>this.price(69.99,79.99,e)}>$70.00()-$79.99()</li></div>
                        <div className="simple-flex-navbar"><i class="fas fa-caret-right"></i ><li className="price" onClick={(e)=>this.price(79.99,1000000,e)}>$90.00() and above</li></div>
                    </div>
                    <div className="Manufacter">
                    <p className="title-navbar-weight">Manufacter</p>
                    <div className="simple-flex-navbar-2">
                        <div className="simple-flex-2"><i class="fas fa-caret-right"></i><li className="price">Brandismi()</li></div>
                        <div className="simple-flex-2"><i class="fas fa-caret-right"></i><li className="price">BlueLogo()</li></div>
                        <div className="simple-flex-2"><i class="fas fa-caret-right"></i><li className="price">LogoFashion()</li></div>
                        
                        </div>
                    </div>
                    <div className="Color-navbar">
                        <p className="title-navbar-weight">Color</p>
                        <div className="regroup-color"><div className="white-color" ></div><p className="parents">()</p></div>
                        <div className="regroup-color"><div className="ligthgrey-color"></div><p className="parents">()</p></div>
                        <div className="regroup-color"><div className="grey-color"></div><p className="parents">()</p></div>
                        <div className="regroup-color"><div className="black-color"></div><p className="parents">()</p></div>
                        <div className="regroup-color"><div className="blue-color"></div><p className="parents">()</p></div>
                    </div>
                    <h3 className="h3-shirt">Custom Block (top)</h3>
                    <span className="section-line"></span>
                    <p className="custo-top">Custom CMS block displayed at the top of the left sidebar. Put your own content here.</p>
                    </div>
                    <div className="shirt-div">
                    <h1 className="shirt-title">Fashion</h1>
                    <span className="section-line"></span>
                    <SliderWomen />
                    <span className="section-line"></span>
                    <div className="option-pdl">
                            <div className="simple-flex">
                                <p className="number-item-pdl">3 Item(s)</p>
                                <p className="para-item-pdl">Sort By</p>
                                <select className="select-item-pdl" onChange={(e)=>this.select(e)}>                 
                                <option value="position">Position</option>
                                <option value="name" >Name</option>
                                <option value="price">Price</option>
                                </select>
                                <i class="fas fa-arrow-up"></i>
                                <p className="para-item-pdl" >Show</p>
                                <select className="select-item-pdl">                 
                                <option value="4">4</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                                <option value="9">9</option>
                                <option value="30">30</option>
                                <option value="90">90</option>
                                </select>
                                <p className="para-item-pdl" >per page</p>
                            </div>
                            <div className="simple-flex">
                                <p className="para-item-pdl">View as: </p>
                                <i class="fas fa-th-large" onClick={(e)=>this.creategrid(e)}></i>
                                <i class="fas fa-list" onClick={(e)=>this.createlist(e)}></i>
                            </div>
                            </div>
                            <span className="section-line"></span>
                            <div className={this.state.list}>
                            { this.state.list ==="product"
                            
                            ? <span className="adjust-list">
                                {  this.state.data[17].submenu.map((mater,index)=>{
                                    return(
                                        <div className="product-plp">
                                { this.state.data[17].submenu[index].offer  
                                ? 
                                <Link to={`/Feature-phone?id=${index}`}>
                                    <div className="simple-flex-shirt">
                                    <div className="simple-relative"> <img className="img-slide2" src={this.state.data[17].submenu[index].image}></img>
                                         { this.state.data[17].submenu[index].image2  
                                         ? 
                                             <img className="img-slide-hide-3" src={this.state.data[17].submenu[index].image2}></img>
                                            : <span></span>
                                        }<i class="fas fa-heart wishlist"></i>
                                        <i class="fas fa-box"></i>
                                        </div>
                                    <span className="sticker-wrapper">
                                        <span className="sticker sale">
                                            Sale
                                        </span>
                                        </span>
                                    </div>
                                        <div className="img-0-slide">{this.state.data[17].submenu[index].title}</div> 
                                        <div className="simple-flex2">                           
                                        <span className="img-1-price">{this.state.data[17].submenu[index].price}$</span>
                                    <span className="img-2-offer">{this.state.data[17].submenu[index].offer_price}</span>
                                    <button className="hover-apparence">Add to Cart</button>
                                    </div>
                                        </Link> 
                                :
                                <Link to={`/Feature-phone?id=${index}`}>
                                   <div className="simple-relative"> <img className="img-slide2" src={this.state.data[17].submenu[index].image}></img>
                                         { this.state.data[17].submenu[index].image2  
                                         ? 
                                             <img className="img-slide-hide-2" src={this.state.data[17].submenu[index].image2}></img>
                                            : <span></span>
                                        }<i class="fas fa-heart wishlist"></i>
                                        <i class="fas fa-box"></i>
                                        </div>
                                    <div className="img-0-slide">{this.state.data[17].submenu[index].title}</div>
                                    <div className="simple-flex2">
                                    <span className="img-0-slide">{this.state.data[17].submenu[index].price}$</span>
                                    <button className="hover-apparence">Add to cart</button>
                                    </div>
                                    </Link> 
                                    
                                }
                                </div>
                                )  
                            })
                            }</span >
                    :   <span className="adjust-list">
                    {  this.state.data[17].submenu.map((mater,index)=>{
                        return(
                            <div className="product-plp">
                    { this.state.data[17].submenu[index].offer  
                    ? 
                    <div className="simple-flex mobile">
                        <div className="contenitor-list">
                    <Link to={`/Feature-phone?id=${index}`}>
                        <img className="img-slide2" src={this.state.data[17].submenu[index].image}></img>
                        <span className="sticker-wrapper">
                                <span className="sticker sale">
                            Sale
                             </span>
                    </span>
                    </Link>
                    </div>
                        <div className="regroup-list2">
                        <div className="regroup-list">
                            <div className="img-0-slide">{this.state.data[17].submenu[index].title}</div>
                            <span className="img-2-offer">{this.state.data[17].submenu[index].offer_price}</span>
                        </div>
                        <div className="regroup-list">
                            <div className="simple-flex">
                                <div className="white-color"></div>
                                <div className="black-color"></div>
                            </div>
                            <Link to={`/Feature-phone?id=${index}`}><button>View Details</button></Link>
                        </div>
                        <div className="simple-flex">
                        <span className="img-0-description">{this.state.data[17].submenu[index].description}$</span>
                        <div className="regroup2-list">
                            <a className="link-list">Add to WishList</a>
                            <a className="link-list">Add to Compare</a>
                        </div>                     
                        </div>
                        </div>
                        
                        </div>
                    :
                    <div className="simple-flex mobile">
                        <div className="contenitor-list">
                    <Link to={`/Feature-phone?id=${index}`}>
                    <div className="simple-relative"> <img className="img-slide2" src={this.state.data[17].submenu[index].image}></img>
                                         { this.state.data[17].submenu[index].image2  
                                         ? 
                                             <img className="img-slide-hide-3" src={this.state.data[17].submenu[index].image2}></img>
                                            : <span></span>
                                        }
                                        </div>
                    </Link></div>
                        <div className="regroup-list2">
                        <div className="regroup-list">
                            <div className="img-0-slide">{this.state.data[17].submenu[index].title}</div>
                            <span className="img-0-slide">{this.state.data[17].submenu[index].price}$</span>
                        </div>
                        <div className="regroup-list">
                            <div className="simple-flex">
                                <div className="white-color"></div>
                                <div className="black-color"></div>
                            </div>
                            <button>View Details</button>
                        </div>
                        <div className="simple-flex">
                        <span className="img-0-description">{this.state.data[17].submenu[index].description}$</span>
                        <div className="regroup2-list">
                            <a className="link-list">Add to WishList</a>
                            <a className="link-list">Add to Compare</a>
                        </div>                     
                        </div>
                        </div>
                        
                        </div>
                        
                    }
                    </div>
                    )  
                })
                }</span>
                    
                }
                    </div>
                    <span className="section-line"></span>
                    </div>
                </div>   
            </div>
        </div>
    )
}else{return <div></div>}
}

}
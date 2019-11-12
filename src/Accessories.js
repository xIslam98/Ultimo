import React, { Component } from 'react';
import './font-awesome/css/brands.css';
import './font-awesome/css/solid.css';
import './font-awesome/css/all.css';
import { Link } from 'react-router-dom';
import axios from 'axios'


let tempo=0;
let tempo2;
let tempo3=[];
export default class Accessories extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: "undefined",
            list:"product"
          }
          this.orderbyname = this.orderbyname.bind(this)
          this.select=this.select.bind(this)
          this.orderbyprice=this.orderbyprice.bind(this)
          this.price=this.price.bind(this)
          this.createlist=this.createlist.bind(this);
          this.creategrid=this.creategrid.bind(this);
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
        tempo = this.state.data[16].submenu.sort(this.dynamicSort('title'));
        tempo2[16].submenu=tempo;
        console.log(tempo2)
        this.setState({data: tempo2});
        console.log(this.state.data)
    }
    orderbyprice(){  
        tempo2=this.state.data
        tempo = this.state.data[16].submenu.sort(this.dynamicSort('price'));
        tempo2[16].submenu=tempo;
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
        for(let i=0;i<this.state.data[16].submenu.length;i++){
            if((PriceDefineStart<this.state.data[16].submenu[i].price) && (PriceDefineEnd >this.state.data[16].submenu[i].price))
            tempo3.push(this.state.data[16].submenu[i])
        }
        tempo2=this.state.data
        tempo2[16].submenu=tempo3;
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
render(){
    if(this.state.data[0].title){
    return(
        <div className="back">
            <div className="shirt-shop">
                <div className="regroup-pdl">
                    <div className="lateral-bar">
                    <h3 className="h3-shirt">Categories & Tops</h3>
                    <span className="section-line"></span>
                    <div className="div-size">
                        <li className="size">Headsets</li>                       
                        <li className="size">Bluetooth Wireless</li>                       
                        <li className="size">Earphones</li>  
                        <li className="size">Batteries</li>
                        <li className="size">Screen Protectors</li> 
                        <li className="size">Memory Cards</li> 
                        <li className="size">Cables & Adapters</li> 
                        <li className="size">Cleaning Cloth</li> 
                        <li className="size">Chargers</li> 
                        <li className="size">Cases</li> 
                        <li className="size">Covers</li> 
                        <li className="size">Skins</li>            
                    </div>
                    <h3 className="h3-shirt">Shop By</h3>
                    <span className="section-line"></span>
                    <div className="price-navbar">
                        <p className="title-navbar-weight">Price</p>
                        <div className="simple-flex-navbar"><i class="fas fa-caret-right"></i><li className="price" onClick={(e)=>this.price(0,516.1616,e)}>$0()-$516.1616()</li></div>
                        <div className="simple-flex-navbar"><i class="fas fa-caret-right"></i><li className="price" onClick={(e)=>this.price(616.1616,716.1616,e)}>$70.00()-$716.1616()</li></div>
                        <div className="simple-flex-navbar"><i class="fas fa-caret-right"></i ><li className="price" onClick={(e)=>this.price(716.1616,1000000,e)}>$160.00() and above</li></div>
                    </div>
                    <div className="Manufacter">
                    <p className="title-navbar-weight">Manufacter</p>
                    <div className="simple-flex-navbar"><i class="fas fa-caret-right"></i><li className="price">SoundWave()</li></div>
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
                    <h1 className="shirt-title">Accessories</h1>
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
                                <option value="16">16</option>
                                <option value="12">12</option>
                                <option value="16">16</option>
                                <option value="30">30</option>
                                <option value="160">160</option>
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
                                {  this.state.data[16].submenu.map((mater,index)=>{
                                    return(
                                        <div className="product-plp">
                                { this.state.data[16].submenu[index].offer  
                                ? 
                                <Link to={`/Feature-accessories?id=${index}`}>
                                    <div className="simple-flex-shirt">
                                    <div className="simple-relative">
                                    <img className="img-slide2" src={this.state.data[16].submenu[index].image}></img>
                                    <i class="fas fa-heart wishlist"  onClick={(e)=>this.AddProductWish(e)} data-set={index}></i>
                                    <i class="fas fa-box"></i>
                                    </div>
                                        <span className="sticker-wrapper">
                                        <span className="sticker sale">
                                            Sale
                                        </span>
                                        </span>
                                    </div>
                                        <div className="img-0-slide">{this.state.data[16].submenu[index].title}</div> 
                                        <div className="simple-flex2">                           
                                        <span className="img-1-price">{this.state.data[16].submenu[index].price}$</span>
                                    <span className="img-2-offer">{this.state.data[16].submenu[index].offer_price}</span>
                                    <Link to={`/Feature-accessories?id=${index}`}> <button className="hover-apparence">View Details</button></Link>
                                    </div>
                                        </Link> 
                                :
                                <Link to={`/Feature-accessories?id=${index}`}>
                                     <div className="simple-relative">
                                    <img className="img-slide2" src={this.state.data[16].submenu[index].image}></img>
                                    <i class="fas fa-heart wishlist"  onClick={(e)=>this.AddProductWish(e)} data-set={index}></i>
                                    <i class="fas fa-box"></i>
                                    </div>
                                    <div className="img-0-slide">{this.state.data[16].submenu[index].title}</div>
                                    <div className="simple-flex2">
                                    <span className="img-0-slide">{this.state.data[16].submenu[index].price}$</span>
                                    <Link to={`/Feature-accessories?id=${index}`}> <button className="hover-apparence">View Details</button></Link>
                                    </div>
                                    </Link> 
                                    
                                }
                                </div>
                                )  
                            })
                            }</span >
                    :   <span className="adjust-list">
                    {  this.state.data[16].submenu.map((mater,index)=>{
                        return(
                            <div className="product-plp">
                    { this.state.data[16].submenu[index].offer  
                    ? 
                    <div className="simple-flex mobile">
                        <div className="contenitor-list">
                    <Link to={`/Feature-accessories?id=${index}`}>
                        <img className="img-slide2" src={this.state.data[16].submenu[index].image}></img>
                        <span className="sticker-wrapper">
                                <span className="sticker sale">
                            Sale
                             </span>
                    </span>
                    </Link>
                    </div>
                        <div className="regroup-list2">
                        <div className="regroup-list">
                            <div className="img-0-slide">{this.state.data[16].submenu[index].title}</div>
                            <span className="img-2-offer">{this.state.data[16].submenu[index].offer_price}</span>
                        </div>
                        <div className="regroup-list">
                            <div className="simple-flex">
                                <div className="white-color"></div>
                                <div className="black-color"></div>
                            </div>
                            <Link to={`/Feature-accessories?id=${index}`}> <button className="hover-apparence">View Details</button></Link>
                        </div>
                        <div className="simple-flex">
                        <span className="img-0-description">{this.state.data[16].submenu[index].description}$</span>
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
                    <Link to={`/Feature-accessories?id=${index}`}>
                        <img className="img-slide2" src={this.state.data[16].submenu[index].image}></img>
                    </Link></div>
                        <div className="regroup-list2">
                        <div className="regroup-list">
                            <div className="img-0-slide">{this.state.data[16].submenu[index].title}</div>
                            <span className="img-0-slide">{this.state.data[16].submenu[index].price}$</span>
                        </div>
                        <div className="regroup-list">
                            <div className="simple-flex">
                                <div className="white-color"></div>
                                <div className="black-color"></div>
                            </div>
                            <Link to={`/Feature-accessories?id=${index}`}> <button className="hover-apparence">View Details</button></Link>
                        </div>
                        <div className="simple-flex">
                        <span className="img-0-description">{this.state.data[16].submenu[index].description}$</span>
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
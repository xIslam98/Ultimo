import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
let contact;
let utente;
let index;
export default class SliderFeature extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        data: "undefined",
        data2: [],
    }
    this.AddProductWish=this.AddProductWish.bind(this);
}
    componentDidMount () {
    axios.get('http://127.0.0.1:7000/menu')
    .then((response) => {
    this.data = response.data;
    console.log(this.data)
    this.setState({data: response.data});
    });
    axios.get('http://127.0.0.1:7000/utenti')
      .then((response) => {
    this.data2 = response.data;
      console.log(this.data2)
      this.setState({data2: response.data});
      });
    }
    AddProductWish(e){
      if(sessionStorage.length>0){
         contact = sessionStorage.getItem("user");
       utente=this.state.data2.find((element) => { return element.username === contact})
       index=this.state.data2.indexOf(utente);
       let s=e.target.dataset.set
       let wishlist= [];
       wishlist= this.state.data2[index].wishlist
       let exElementi = [
          { 
          id:this.state.data[8].submenu[s].id, 
          title:this.state.data[8].submenu[s].title,
          image:this.state.data[8].submenu[s].image,
          offer:this.state.data[8].submenu[s].offer,
          offer_price:this.state.data[8].submenu[s].offer_price,
          price:this.state.data[8].submenu[s].price,
          image2:this.state.data[8].submenu[s].image2 
          }
        ]
        wishlist.push(exElementi);
        console.log(this.state.data2);
       axios.patch(`http://127.0.0.1:7000/utenti/${utente.id}`, {wishlist})
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
      }else{
        window.location.href = "http://localhost:3000/login";
      }
    }
  render() {
    if (this.state.data[0].title) {
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
        {  this.state.data[8].submenu.map((mater,index)=>{
            return(
                 
              <Slide index={index} key={index}> 
              { this.state.data[8].submenu[index].offer  
              ? 
              <Link to={`/Feature-cell?id=${index}`}>
                <div className="simple-relative" ><img className="img-slide2" src={this.state.data[8].submenu[index].image}></img>
                { this.state.data[8].submenu[index].image2  
              ? 
                <img className="img-slide-hide" src={this.state.data[8].submenu[index].image2}></img>
                : <span></span>
                }<Link to ={'/'} ><i class="fas fa-heart wishlist"  onClick={(e)=>this.AddProductWish(e)} data-set={index}></i></Link>
                <i class="fas fa-box"></i>
                </div>
                <span className="sticker-wrapper top-right">
                    <span className="sticker sale">
                        Sale
                    </span>
                    </span>
                    <div className="img-0-slide">{this.state.data[8].submenu[index].title}</div>                             
                  <span className="img-2-offer">{this.state.data[8].submenu[index].offer_price}</span>
                    </Link> 
               :
               <Link to={`/Feature-cell?id=${index}`}>
                 <div className="simple-relative"> <img className="img-slide2" src={this.state.data[8].submenu[index].image}></img>
                  { this.state.data[8].submenu[index].image2  
              ? 
                <img className="img-slide-hide" src={this.state.data[8].submenu[index].image2}></img>
                : <span></span>
                } <Link to={`/`}><i class="fas fa-heart wishlist" onClick={(e)=>this.AddProductWish(e)} data-set={index}></i></Link>
                <i class="fas fa-box"></i>
                </div>
                  <div className="img-0-slide">{this.state.data[8].submenu[index].title}</div>
                  <span className="img-0-slide">{this.state.data[8].submenu[index].price}$</span>
                </Link> 
              }  
              </Slide>  
                      
            )
         })
         }
        </Slider>
        
      </CarouselProvider>
    )
  }else{return <div> </div>}
}
}
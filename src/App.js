import React, { Component } from 'react';
import './sass/App.scss';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Feature from './Feature';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Shirt from './Shirt';
import Shoe from './Shoes';
import FeatureShoes from './Featuureshoes';
import Bag from './Bags';
import FeatureBag from './Featurebag';
import Phone from './Phone';
import FeaturePhone from './FeaturePhone';
import Accessories from './Accessories';
import FeatureAccessories from './FeatureAccessories';
import Login from './Login';
import Register from './registration';
import Women from './Women';
import Account from './Account';
import Wishlist from './wishlist'
export default class App extends Component {
 render(){
        return (
            <Router>
        <div className="principal">
           
            <div className='Home'>
                <Header />            
                    <Route exact path="/" > 
                        <Home />
                    </Route>
                    <Route path="/Feature-Cell" > 
                    <Feature />                   
                    </Route>
                    <Route path="/Feature-Shoes" > 
                    <FeatureShoes />                   
                    </Route>
                    <Route path="/Store-Cell" > 
                    </Route>
                    <Route path="/Shirt" >
                        <Shirt /> 
                    </Route>
                    <Route path="/Shoe" >
                        <Shoe /> 
                    </Route>
                    <Route path="/bag" >
                        <Bag /> 
                    </Route>
                    <Route path="/Feature-bag" >
                        <FeatureBag /> 
                    </Route>
                    <Route path="/Phone" >
                        <Phone /> 
                    </Route>
                    <Route path="/Feature-phone" >
                        <FeaturePhone /> 
                    </Route>
                    <Route path="/Accessories" >
                        <Accessories /> 
                    </Route>
                    <Route path="/Feature-accessories" >
                        <FeatureAccessories /> 
                    </Route>
                    <Route path="/login" >
                        <Login /> 
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/women">
                        <Women />
                    </Route>
                    <Route path="/account">
                        <Account />
                    </Route>
                    <Route path="/wishlist">
                        <Wishlist />
                    </Route>
                <About />
                <Footer />  
            </div> 
        </div>
        </Router>
        );
    }
}

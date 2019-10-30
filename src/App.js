import React, { Component } from 'react';
import './sass/App.scss';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Feature from './Feature';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import axios from 'axios';
import Shirt from './Shirt'

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
                    <Route path="/Store-Cell" > 
                    </Route>
                    <Route path="/Shirt" >
                        <Shirt /> 
                    </Route>
                <About />
                <Footer />  
            </div> 
        </div>
        </Router>
        );
    }
}

import React, { Component } from 'react';
import './sass/App.scss';
import Home from './Home';

export default class App extends Component {
    render(){
        return (
        <div className="principal">
         <Home />   
        </div>
        );
    }
}

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from './menu';
import {Header} from './header';
import { connect } from "redux-zero/react";
//import { } from "./actions";

const App = ({food, selectedFood}) => {
    const plate = food.map( e => e.name);
    return (
      <div>
        <Header />
        <Menu 
        food={food} 
        selectedFood={selectedFood}/>
         <h1>FOOD</h1>
         {plate}
      </div>
    );

}

const mapToProps = ({food, selectedFood}) => ({food, selectedFood});

export default connect(mapToProps)(App);

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from './menu';
import { connect } from "redux-zero/react";
import { NavLink} from 'react-router-dom';
import FirstView from "./FirstView"
import Cart from "./Cart"

const App = ({food , cart}) => {
    return (
      <div className="container">
         <h1>FOOD</h1>
         {
           cart.length>0?
           <Cart cart={cart}/>:
           <div></div>
         }
         
         <FirstView food={food}/>
      </div>
    );
}

const mapToProps = ({food , cart}) => ({food ,cart});

export default connect(mapToProps)(App);

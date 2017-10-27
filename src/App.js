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
         <div className="row">
            <NavLink to="/checkout" className="btn btn-lg btn-danger">CHECHOUT</NavLink>
         </div>
          <div>
         <h1>FOOD</h1>
         <Cart cart={cart}/>
         <FirstView food={food}/>
      </div>
      </div>
    );
}

const mapToProps = ({food , cart}) => ({food ,cart});

export default connect(mapToProps)(App);

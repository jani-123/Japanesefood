import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
import { NavLink} from 'react-router-dom';
//import { } from "./actions";


const App = ({food , cart}) => {
    return (
      <div className="container">
         <div className="row">
          <NavLink to="/checkout" className="btn btn-lg btn-danger">CHECHOUT</NavLink>
         </div>
      </div>
    );

}

const mapToProps = ({food , cart}) => ({food ,cart});

export default connect(mapToProps)(App);

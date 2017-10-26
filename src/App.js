import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
//import { } from "./actions";

const App = ({food}) => {
    const plate = food.map( e => e.name);
    return (
      <div>
         <h1>FOOD</h1>
         {plate}
      </div>
    );

}

const mapToProps = ({food}) => ({food});

export default connect(mapToProps)(App);

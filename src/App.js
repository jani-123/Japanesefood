import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
import Cart from "./Cart"
//import { } from "./actions";

const App = ({food,cart}) => {
    const plate = food.map( e => e.name);
    return (
      <div>
         <h1>FOOD</h1>
         <Cart cart={cart}/>
      </div>
    );
}

const mapToProps = ({food,cart}) => ({food,cart});
export default connect(mapToProps)(App);

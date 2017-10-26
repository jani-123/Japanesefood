import React, { Component } from 'react';
import './App.css';
import { connect } from "redux-zero/react";

//import { } from "./actions";


const CHECHOUT = ({food}) => {
    const price = food.map(e => e.price);
    return (
      <div className="container">
         <div className="row">
          <p>{price}</p>
         </div>
      </div>
    );

}

const mapToProps = ({food }) => ({food});

export default connect(mapToProps)(CHECHOUT);

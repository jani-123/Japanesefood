import React, { Component } from 'react';
import './App.css';
import { connect } from "redux-zero/react";

//import { } from "./actions";


const CHECHOUT = ({cart}) => {
    const img = cart.map(e => e.img);
    const name = cart.map(e=> e.name);
    return (
      <div className="container">
         <div id="details-checkout">
           <h1>Orden Details</h1>
           <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quanty</th>
              
              <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div><img src={img}/>
                                
                  <span className="product-name">{name}</span>
                  </div>
                  </td>
                  <td>
                    <input></input>
                    </td>
                    <td>
                      <p className="table-price">$4.00</p>
                      </td>
                </tr>
              </tbody>
           </table>
           <p id="total-checkout">
            <span>TOTAL :$4.00</span></p>
           <a className="cancel-order" href="#">cancel order</a>
           <button className="order-now">order now!</button>
          
         </div>
      </div>
    );

}

const mapToProps = ({cart }) => ({cart});

export default connect(mapToProps)(CHECHOUT);

import React, { Component } from 'react';
import './App.css';
import { connect } from "redux-zero/react";
import { calculatePrice } from "./actions";
import './checkout.css';

const CHECHOUT = ({ cart, total }) => {
  const priceTotal = e => {
    let quantity = this.inputPrice.value;
    let price = e.target.id;
    calculatePrice(quantity, price)
  };

  return (
    <div className="container su">
      <div className="row">
      <div className="col-sx-12 col-lg-12 col-md-12 col-sm-12">
      <div id="details-checkout">
        <h1>Orden Details</h1>
        <table className="su-table">
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
                <div><img src={cart[0].img} className="js-imagen"/>
                  <span className="product-name">{cart[0].name}</span>
                </div>
              </td>
              <td><input type="number" ref={e => (this.inputPrice = e)} /></td>
              <td><p className="table-price">{cart[0].price}</p></td>
            </tr>
          </tbody>
        </table>
        
          <p id="total-checkout" className="text-rigth">
          <button className="btn btn-link" onClick={priceTotal} id={cart[0].price}>Total:</button>
          <span className="">{total}</span></p>
        
        <a className="cancel-order" href="#">cancel order</a>
        <button className="order-now" href="#">order now!</button>
      
      </div>
    </div>
    </div>
    </div>
  )
}
const mapToProps = ({ cart, total }) => ({ cart, total });
export default connect(mapToProps)(CHECHOUT)

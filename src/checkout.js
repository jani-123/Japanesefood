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
  const foodTable = cart.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <div><img src={item.img} className="js-imagen" />
              <span className="product-name">{item.name}</span>
            </div>
          </td>
          <td><input type="number" ref={e => (this.inputPrice = e)} /></td>
          <td><p className="table-price">{item.price}</p></td>
        </tr>
      )
  });

  return (
    <div className="container su">
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
            {foodTable}
          </tbody>
        </table>
        <div id="total-checkout">
          <button className="btn btn-link" onClick={priceTotal} id={cart[0].price}>Total:</button>
          <h3>{total}</h3>
        </div>
        <a className="cancel-order" href="#">cancel order</a>
        <button className="order-now" href="#">order now!</button>
      </div>
    </div>
  )
}

const mapToProps = ({ cart, total }) => ({ cart, total });
export default connect(mapToProps)(CHECHOUT)

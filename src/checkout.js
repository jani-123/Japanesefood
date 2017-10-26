import React, { Component } from 'react';
import './App.css';
import { connect } from "redux-zero/react";
import { calculatePrice } from "./actions";

const CHECHOUT = ({ cart, total }) => {
  const priceTotal = e => {
    let quantity = this.inputPrice.value;
    let price = e.target.id;
    console.log(this.inputPrice.value);
    console.log(e.target.id);
    calculatePrice(quantity, price)
  };
  const img = cart.map(e => e.img);
  const name = cart.map(e => e.name);
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
                <div><img src={img} />

                  <span className="product-name">{name}</span>
                </div>
              </td>
              <td>
                <input type="number" ref={e => (this.inputPrice = e)} />
              </td>
              <td>
                <p className="table-price">{cart[0].price}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div id="total-checkout">
          <button className="btn btn-link" onClick={priceTotal} id={cart[0].price}>Total:</button>
          <h3>{total}</h3>
        </div>
        <a className="cancel-order" href="#">cancel order</a>
        <button className="order-now">order now!</button>
      </div>
    </div>
  )
}
        const mapToProps = ({ cart, total }) => ({ cart, total });

  export default connect(mapToProps)(CHECHOUT)

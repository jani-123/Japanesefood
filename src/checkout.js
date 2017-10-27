import React, { Component } from 'react';
import './App.css';
import { connect } from "redux-zero/react";
import { calculatePrice ,sumPrice} from "./actions";
import './checkout.css';

const CHECHOUT = ({food,cart}) => {
  console.log("che",cart);
  const priceTotal = e => {
    let quantity = this.inputPrice.value;
    let price = e.target.id;
    calculatePrice(quantity, price)
  };
  const foodTable = cart.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <div><img src={food[item.id].img} className="js-imagen" />
              <span className="product-name">{food[item.id].name}</span>
            </div>
          </td>
          <td><input type="number" ref={e => (this.inputPrice = e)} /></td>
          <td><p className="table-price">{food[item.id].price}</p></td>
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
          <button className="btn btn-link" onClick={priceTotal} >Total:</button>
          <h3>${sumPrice().toFixed(2)}</h3>
        </div>
        <a className="cancel-order" href="#">cancel order</a>
        <button className="order-now" href="#">order now!</button>
      </div>
    </div>
  )
}

const mapToProps = ({food,cart}) => ({food,cart});
export default connect(mapToProps)(CHECHOUT)

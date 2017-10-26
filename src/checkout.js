import React, { Component } from 'react';
import './App.css';
import { connect } from "redux-zero/react";
import {calculatePrice } from "./actions";


const CHECHOUT = ({cart , total}) => {
    //const price = food.map(e => e.price);
    const priceTotal = e =>{
       let quantity = this.inputPrice.value;
       let price = e.target.id;
       console.log(this.inputPrice.value);
       console.log(e.target.id);
       calculatePrice(quantity,price)
    };
    return (
      <div className="container">
         <div className="row">
         <table className="table">
          <tbody>
            <tr>
              <td>imagen</td>
              <td>nombre</td>
              <td>quantity</td>
              <td>price</td>
            </tr>
            <tr>
            <td>img</td>
            <td>{cart[0].name}</td>
            <td><input type="number" ref={e => (this.inputPrice = e)}/></td>
            <td>{cart[0].price}</td>
          </tr>
          </tbody>
        </table>
        <div>
          <button className="btn btn-link" onClick={priceTotal} id={cart[0].price}>Total:</button>
          <h3>{total}</h3>
        </div>
         </div>
      </div>
    );

}

const mapToProps = ({cart , total}) => ({cart,total});

export default connect(mapToProps)(CHECHOUT);

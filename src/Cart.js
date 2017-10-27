import React, { Component } from 'react';

import { NavLink} from 'react-router-dom';
import {getInfoProduct,addPrices,emptyCart} from './actions';
const CartProduct=({product,index})=>{
    return (
        <div className="so-cart-product">
            <img src={getInfoProduct(product.id).img}/>
            <span>{product.quantity}x${(getInfoProduct(product.id).price).toFixed(2)}</span>
            <div className="so-delete"> X </div>
        </div>
    );
}
const Cart=({cart})=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-offset-1 col-md-8 col-sm-offset-1 col-sm-8 col-xs-offset-1 col-xs-8 so-cart">
                    {
                        cart.map((item,index)=>{
                            return <CartProduct key={index} product={item} index={index}/>;
                        })
                    }
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2 so-cart-total">
                        <h6 className="so-less-padding">Your Shopping cart</h6>
                        <h1 className="so-less-padding">${addPrices().toFixed(2)}</h1>
                        <button className="btn-link so-btn-empty" onClick={emptyCart}>EMPTY CART</button>
                        <NavLink to="/checkout" className="so-btn-checkout">CHECKOUT</NavLink>
                </div>
            </div>
        </div>
    );
}
export default Cart;
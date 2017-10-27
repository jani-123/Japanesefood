import React, { Component } from 'react';
import './header.css';
export const Header = ({cart}) => {
    return (
            <div id="mar-header">
                    <h1 className="logo"><a href="#/"></a></h1>
                    <div className="btn-header">
                        <a id="cart-info" href="#">Shopping Cart
                            <span><span data-bind="text: cart.contentsCount">{cart.length}</span> items</span>
                        </a>
                    </div>
            </div>
    )
}
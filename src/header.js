import React, { Component } from 'react';
import { nextFood } from './actionsMariley';
import './header.css';
export const Header = () => {
    return (
            <div id="mar-header">
                    <h1 class="logo"><a href="#/"></a></h1>
                    <a id="cart-info" href="#">Shopping Cart
                        <span><span data-bind="text: cart.contentsCount">0</span> items</span>
                    </a>
            </div>
    )
}
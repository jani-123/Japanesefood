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
export const Footer = () => {
    return (
        <div id="footer">
                    <p>CoolCode<sup>®</sup></p>
                   <p> [ Kely Añamuro ]
                    [ Janet Quispe ]
                    [ Haydi Dueñas ]
                    [ Susy Talavera ]
                    [ Solimar Huayhua ]
                    [ Mariley Erika ]</p>
                    <p>Copyright © 2017</p>
        </div>
    )
}
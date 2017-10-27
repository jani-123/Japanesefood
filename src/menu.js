import React, { Component } from 'react';

import { connect } from "redux-zero/react";
import {nextFood} from './actionsMariley';
const Menu = ({food, selectedFood}) => {
    console.log("select", selectedFood);
    return (
        <div className="container k-whiteFont"> 
            <div className="row" id="details-top-image"></div>
            <div className="row">
                <div>
                <div className="col-md-1 col-xs-1 col-sm-1 k-back">
                    <a className='btn k-btn' onClick={() => nextFood(-1) }><img src="./img/nav-prev.png"/></a>
                </div>
                <div className="col-sm-3 col-md-3 col-xs-12"><img className="k-imgDetails" src={food[selectedFood].img}/></div>
                <div className="col-sm-4 col-md-4 col-xs-12">
                    <Description foodDetail={food[selectedFood]}/>
                </div>
                <div className="col-sm-3 col-md-3 col-xs-12">
                    <Nutrition foodDetail={food[selectedFood]}/>
                </div>
                <div className="col-md-1 col-xs-1 col-sm-1 k-next">
                    <a className='btn k-btn' onClick={() => nextFood(1) }><img src="./img/nav-next.png"/></a>
                </div>
                </div>
            </div>
            <div className="row" id="details-bottom-image"></div>
        </div>
    )
}

const Description =({foodDetail}) => {
    return (
        <div>
            <h3>{foodDetail.name}</h3>
            <label>{foodDetail.description}</label><br />
            <div>{foodDetail.price}</div>
            <button>Add to Cart</button>
        </div>
    )
}
const Nutrition = ({foodDetail}) => {
    return (
        <div className="row">
            <table class="table table-responsive k-table">
                <thead>
                    <tr>
                    <th colspan="2">Nutritional Information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Protein</td>
                    <td className="text-right">{foodDetail.nutritional[0]}</td>
                    </tr>
                    <tr>
                    <td>Fat (total)</td>
                    <td className="text-right">{foodDetail.nutritional[1]}</td>
                    </tr>
                    <tr>
                    <td>Carbohydrate</td>
                    <td className="text-right">{foodDetail.nutritional[2]}</td>
                    </tr>
                    <tr>
                    <td>Energy (kJ)</td>
                    <td className="text-right">{foodDetail.nutritional[2]}</td>
                    </tr>
                    <tr>
                    <td>Energy (kcal)</td>
                    <td className="text-right">{foodDetail.nutritional[2]}</td>
                    </tr>
                    <tr>
                    <td>Sugar</td>
                    <td className="text-right">{foodDetail.nutritional[2]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
const mapToProps = ({food , selectedFood}) => ({food ,selectedFood});

export default connect(mapToProps)(Menu);
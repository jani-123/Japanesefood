import React, { Component } from 'react';
import {nextFood} from './actionsMariley';
export const Menu = ({food, selectedFood}) => {
    console.log("select", selectedFood);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-1">
                    <a> anterior </a>
                </div>
                <div className="col-sm-3">{food[selectedFood].img}</div>
                <div className="col-sm-4">
                    <Description foodDetail={food[selectedFood]}/>
                </div>
                <div className="col-sm-3">
                    <Nutrition foodDetail={food[selectedFood]}/>
                </div>
                <div className="col-sm-1">
                    <a className="btn" onClick={nextFood}> >>> </a>
                </div>
            </div>
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
    let list = foodDetail.nutritional.map((elemen, index) => {
        return (
            <li>
                {elemen}
            </li>
        )
    });
    return (<ul>{list}</ul>)
}
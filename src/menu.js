import React, { Component } from 'react';
import {} from './actionsMariley';
export const Menu = ({food}) => {
    console.log(food);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">{food[0].img}</div>
                <div className="col-sm-4">
                    <Description foodDetail={food[0]}/>
                </div>
                <div className="col-sm-4">
                    <Nutrition foodDetail={food[0]}/>
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
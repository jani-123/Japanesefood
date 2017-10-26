import React, { Component } from 'react';
import {} from './actionsMariley';
export const Menu = ({food}) => {
    console.log(food);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-1 col-xs-1 col-sm-1 k-back"></div>
                <div className="col-sm-3 col-md-3 col-xs-12"><img className="k-imgDetails img-responsive" src={food[0].img}/></div>
                <div className="col-sm-4 col-md-4 col-xs-12">
                    <Description foodDetail={food[0]}/>
                </div>
                <div className="col-sm-3 col-md-3 col-xs-12">
                    <Nutrition foodDetail={food[0]}/>
                </div>
                <div className="col-md-1 col-xs-1 col-sm-1 k-next"></div>
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
    return (
        <div className="row">
            <table class="table table-responsive">
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

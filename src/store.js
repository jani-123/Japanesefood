import createStore from "redux-zero";


let FOOD = [{
        name: "sushi",
        price: 2.00,
        description: "plato tradicional japones",
        nutritional: [{
            protein: 2.100,
            fat: 0.4433,
            carbohydrate: 0.600,
            energyKl: 7.3000,
            energyKcal: 3.344,
            sugar: 0.344
        }]
    },
    {
        name: "Sashimi salad",
        price: 12,
        description: "Organic greens topped with fresh sashimi, wasabi soy vinaigrette.",
        nutritional: ['2.9156', '2.4396', '2.4396', '17.5775', '4.2011', '0.3738'],
        img: "img/sashimi-salad.jpg",
    },
    {
        name: "Chirashi sushi",
        price: 21,
        description: "Sushi bar variety with sushi rice.",
        nutritional: ['2.3138', '0.6041', '0.6041', '7.5314', '1.8000', '0.3114'],
        img: "img/chirashi-sushi.jpg",
    },
    {
        
        name: "Seaweed salad",
        price: 17,
        description: "Boiled soy beans with salt",
        nutritional: ['0.229', '2.2852', '2.2852', '5.1003', '1.2190', '0.0037'],
        img: "img/seaweed-salad.jpg",
    },
    {
        name: "Edamame",
        price: 4,
        description: "Boiled soy beans with salt",
        nutritional: ['0.7436', '1.9771', '1.9771', '17.294', '4.1334', '0.1028'],
        img: "img/edamame.jpg",
    },
];
const initialState = {
    food: FOOD,
    selectedFood: -1
};

const store = createStore(initialState);

export default store;
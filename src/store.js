import createStore from "redux-zero";


let FOOD = [
	{
    name: "Miso soup",
    price: 4.00,
    description: "Soy bean soup with Wacame seaweed, tofu and spring onion.",
    nutritional: [2.7642, 2.1552, 2.1552, 9.393, 2.2450, 0.1399],
    img: "img/miso-soup.jpg"
  },
  { 
    name: "Maguro",
    price: 12.50,
    description: "Tuna pieces.",
    nutritional: [2.2293, 0.7329, 0.7459, 28.2176, 2.2450, 2.7442],
    img: "img/maguro.jpg"
  },
  { 
    name: "Shake",
    price: 10.00,
    description: "Salmon and rice",
    nutritional: [0.7459, 28.2176, 2.2293, 0.7329, 2.2450, 7.7442],
    img: "img/shake.jpg"
  },
  { 
    name: "Shiromi",
    price: 9.50,
    description: "White fish pieces.",
    nutritional: [2.2293, 0.7329, 2.2450, 6.7442, 0.7459, 28.2176],
    img: "img/shiromi.jpg"
  }
];

const initialState = {
	food: FOOD,
	selectedFood: -1
};

const store = createStore(initialState);

export default store;

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
  },
  {
    name: "Tekka maki",
    price: 6,
    description:"Tuna roll with wasabi. - 6 pieces",
    nutritional:[0.9559,1.6395,1.6395,9.7847,2.3386,0.4771],
    img:"img/tekka-maki.jpg"

  },
  {
      name: "Hosomaki Mix",
      price: 17,
      description:"18 pieces.",
      nutritional:[2.683,2.858,2.858,23.8901,5.7099,0.4839],
      img:"img/hosomaki-mix.jpg"
  },
  {
      name: "California rolls",
      price: 7.75,
      description:"Crab sticks, avocado and cucumber. - 8 pieces",
      nutritional:[0.848,0.1205,0.1205,18.6541,4.4584,0.0174],
      img:"img/california-rolls.jpg"
  },
  {
      name:"Seattle rolls",
      price:8,
      description:"Smoked salmon. Cucumber. Cream cheese.",
      nutritional:[2.2802,2.309,2.309,18.6961,4.4685,0.2533],
      img:"img/seattle-rolls.jpg"
  }
];

const initialState = {
	food: FOOD,
	selectedFood: -1
};

const store = createStore(initialState);

export default store;

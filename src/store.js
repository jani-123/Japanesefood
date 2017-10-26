import createStore from "redux-zero";

let FOOD = [
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
  },
  {
    name : "Spicy Tuna rolls",
    price : 6,
    description: "Spicy tuna, spring onion and avocado. - 6 pieces",
    nutritional : [1.0003,1.5621,1.5621,25.0911,5.9969,0.0474],
    img : "img/spicy-tuna-rolls.jpg"

},
{
    name : "Ebi rolls",
    price : 8,
    description: "King prawns, avocado and asparagus. - 8 pieces",
    nutritional : [2.826,2.854,2.854,19.2756,4.6070,0.439],
    img : "img/ebi-rolls.jpg"

},
{
    name : "Chicken Teriyaki",
    price : 12,
    description: "Sauted chicken with teiyaki sauce.",
    nutritional : [1.0003,1.5621,1.5621,25.0911,5.9969,0.0474],
    img : "img/chicken-teriyaki.jpg"

},
    {
    name : "Salmon Teriyaki",
    price : 13.50,
    description: "Sauted salmon with teriyaki sauce.",
    nutritional : [2.826,2.854,2.854,19.2756,4.6070,0.439],
    img : "img/salmon-teriyaki.jpg"

},
  {
		name: "Gohan",
		price: 3.00,
		description: 'Steamed rice.',
		nutricional: ["2.4622","2.672","2.672","25.1129","6.0021","0.3426"],
		img: "img/gohan.jpg"
	},
	{
		name: "Tori Katsu",
		price: 11.00,
		description: 'Steamed rice.',
		nutricional: ["2.4622","2.672","2.672","25.1129","6.0021","0.3426"],
		img: "img/tori-katsu.jpg"
	},
	{
		name: "Yaki Udon",
		price: 11.50,
		description: 'Steamed rice.',
		nutricional: ["2.4622","2.672","2.672","25.1129","6.0021","0.3426"],
		img: "img/yaki-udon.jpg"
	}
];
let Cart=[
  {
    name:"Yaki Udon",
    price: 11.50,
    img: "img/yaki-udon.jpg"
  }
]
const initialState = {
    food: FOOD,
    cart:Cart,
    selectedFood: -1
};

const store = createStore(initialState);

export default store;
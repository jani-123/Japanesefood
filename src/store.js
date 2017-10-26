import createStore from "redux-zero";


let FOOD = [
	{
    name: "sushi",
    price: 2.00,
    description: "plato tradicional japones",
    nutritional: [{
      protein:2.100,
      fat:0.4433,
      carbohydrate:0.600,
      energyKl: 7.3000,
      energyKcal: 3.344,
      sugar: 0.344
    }]
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
	},
];
const initialState = {
	food: FOOD,
	selectedFood: -1
};

const store = createStore(initialState);

export default store;

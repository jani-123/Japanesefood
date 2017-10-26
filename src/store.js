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
  }
];
const initialState = {
	food: FOOD,
	selectedFood: -1
};

const store = createStore(initialState);

export default store;

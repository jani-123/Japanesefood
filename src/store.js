import createStore from "redux-zero";


let FOOD = [
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

import createStore from "redux-zero";


let FOOD = [
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
];
const initialState = {
	food: FOOD,
	selectedFood: -1
};

const store = createStore(initialState);

export default store;

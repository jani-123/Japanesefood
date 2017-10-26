import store from "./store";
export const nextFood = () => {

    let selectedFood = store.getState().selectedFood + 1
    if (selectedFood == store.getState().food.length - 1)
        selectedFood = 0

    store.setState({
        selectedFood: selectedFood
    })
}
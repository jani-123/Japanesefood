import store from "./store";
export const nextFood = (n) => {
    console.log("store", store.getState().food.length - 1)
    let selectedFood = store.getState().selectedFood + n;
    if (selectedFood >= store.getState().food.length - 1) {
        selectedFood = 0;
    } else if (selectedFood == -1) {
        selectedFood = 18;
    }

    store.setState({
        selectedFood: selectedFood
    })
}
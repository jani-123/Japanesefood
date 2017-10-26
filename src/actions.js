import store from "./store";

/************************SOLI-inicio****************************/

export const getInfoProduct=(id)=>{
    let prod = store.getState().food[id];
    return prod;
}
export const addPrices=()=>{
    let sum=0;
    for(var i of store.getState().cart){
        let prod = store.getState().food[i.id];
        sum+=(prod.price*i.quantity);
    }
    return sum;
}
export const emptyCart=()=>{
    console.log("aaaaaaaa")
    store.setState({
        cart:[]
    })
}

/************************SOLI-fin****************************/
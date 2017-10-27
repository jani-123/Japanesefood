import store from "./store";

/* parte janeth-susy */

export const calculatePrice = (quantity,price) =>{
   let total = store.getState().total;
   let priceTotal = (quantity * price) ;
   store.setState({
     total: priceTotal
   })
}

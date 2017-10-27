import store from "./store";

/**************************************************Inicio Haidy*********************************************************/
export const addCart = (index) =>{
 let newCart = [...store.getState().cart]

     for(let i in newCart) {
        let id = newCart[i].id;

        if(index===id){
            newCart[i].quantity = newCart[i].quantity + 1;
            store.setState({
                cart : newCart
           })
            return;
        } 
    }
        newCart.push({
            id : index,
            quantity : 1
        })

        store.setState({
             cart : newCart
        })
}



/**************************************************Fin Haidy*********************************************************/

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
    store.setState({
        cart:[],
    })
}
export const deleteProduct=(index)=>{
    
    let list=[...store.getState().cart];
    for(let i in list){
        if(list[i].id === index){
            if(list[i].quantity>1){
                list[i].quantity-=1;
                store.setState({
                    cart:list
                })
            }
            else{
                list.splice(i,1);
                store.setState({
                    cart:list
                })
            }
            return;
        }
    }
       
}
/************************SOLI-fin****************************/

/* parte janeth-susy */

export const calculatePrice = (quantity,price) =>{
   let total = store.getState().total;
   let priceTotal = (quantity * price) ;
   store.setState({
     total: priceTotal
   })
}

export const sumPrice = () =>{
    let c = 0;
    for(var i of store.getState().cart){
        let prod = store.getState().food[i.id];
        c +=(prod.price * i.quantity);
    }
    return c;
}

/****************************/
export const changeSelectedFood=(index)=>{
    store.setState({
        selectedFood:index
    })
}
import store from "./store";
/**************************************************Inicio Haidy*********************************************************/
const addCart = ({index}) =>{
 let existList = store.getState().cart
    for (let i = 0; i < existList.length; i++) { 
        if (existList[i].id === index){
             let add = store.getState().quantity + 1;
        }else{
            let newCart = {
                id : 0,
                quantity : 1
            }
            store.setState({
                cart : newCart
            })
        }
    }
}
export default addCart
/**************************************************Fin Haidy*********************************************************/


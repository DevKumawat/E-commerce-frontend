export const addToCart = (product)=>{
    return{
        type : "ADDTOCART" ,
        payload : product
    }
};

export const increaseQuantity = (itemId) => ({
    type: "INCREASE_QUANTITY",
    payload: itemId ,
  });

export const decreaseQuantity = (itemId) => ({
    type: "DECREASE_QUANTITY",
    payload: itemId ,
  });
export const removeItem = (itemId) => ({
    type: "REMOVE_ITEM",
    payload: itemId ,
  });
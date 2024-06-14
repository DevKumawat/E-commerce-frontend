const initialState = {
    cartItems: [],
}

const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDTOCART":
            return { ...state, cartItems: [...state.cartItems, action.payload] }

        case "INCREASE_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity ? item.quantity + 1 : 2, total: item.total ? item.price * (item.quantity + 1) : item.price * 2 }
                        : item
                ),
            };

        case "DECREASE_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1, total: item.total ? item.price * (item.quantity - 1) : item.price }
                        : item
                ),
            };

            case "REMOVE_ITEM" :
                return {
                    ...state ,
                    cartItems : state.cartItems.filter((eachObj)=> eachObj.id !== action.payload) 
                }

        default:
            return state;
    }
}

export default addToCartReducer;

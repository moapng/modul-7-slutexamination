const initialState = { cart: [] }

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        product: action.payload
                    }]

            }
        case 'RESET_CART':
            return {
                cart: initialState.cart
            }

        default: return state;
    }
}

export default cartReducer;
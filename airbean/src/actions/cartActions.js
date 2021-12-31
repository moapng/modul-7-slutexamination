export const addToCart = (product) => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: product
    }
}

export const resetCart = () => {
    return {
        type: 'RESET_CART'
    }
}
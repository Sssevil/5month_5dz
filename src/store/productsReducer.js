import products from '../products.json'

const defaultState = {
    products,
    counter: 0,
}
export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'BASKET_COUNTER':
            return {
                ...state,
                counter: state.counter + 1,
            }
        default:
            return state
    }
}

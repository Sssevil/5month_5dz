import { productsReducer } from './productsReducer'
import { cardReducer } from './cardReducer'
import { legacy_createStore as createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    products: productsReducer,
    cards: cardReducer,
})

export const store = createStore(rootReducer)

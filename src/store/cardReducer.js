const defaultState = {
    cards: [],
}

export const cardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            const newCard = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
            }
            return {
                ...state,
                cards: [...state.cards, newCard],
            }
        default:
            return state
    }
}

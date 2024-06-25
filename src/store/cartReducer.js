const defaultState = {
  products: [],
};

export const cartReducer = (state = defaultState, action) => {
  let addedProduct;
  switch (action.type) {
    case 'ADD_PRODUCT':
      addedProduct = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
      };
      return {
        ...state,
        products: [ ...state.products, addedProduct ],
      };
    default:
      return state;
  }
};

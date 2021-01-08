import CartActionTypes from './cart.types';

const initailState = {
    hidden: true
}

const cartReducer = (state= initailState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer
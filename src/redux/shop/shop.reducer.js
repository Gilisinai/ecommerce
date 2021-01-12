

import ShopActionTypes from './shop.types'

const initailState = {
    collections: null
}

const shopReducer = (state= initailState, action) => {
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }

}

export default shopReducer
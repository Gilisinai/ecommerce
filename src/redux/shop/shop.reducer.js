

import ShopActionTypes from './shop.types'

const initailState = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state= initailState, action) => {
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
               ...state,
               isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                isFetching: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FALIURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }

}

export default shopReducer
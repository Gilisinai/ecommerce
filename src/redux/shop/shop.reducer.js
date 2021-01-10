import SHOP_DATA from './shop.data'

const initailState = {
    collections: SHOP_DATA
}

const shopReducer = (state= initailState, action) => {
    switch(action.type){
        default:
            return state
    }

}

export default shopReducer
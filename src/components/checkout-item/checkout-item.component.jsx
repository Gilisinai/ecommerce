import React from 'react'
import './checkout-item.styles.scss'

import {createStructuredSelector} from 'reselect'


const CheckoutItem = ({ cartItem: { name, price , imageUrl, quantity}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <sapn className='name'>{name}</sapn>
        <sapn className='quantity'>{quantity}</sapn>
        <sapn className='price'>{price}</sapn>
        <div className='remove-btn'>&#10005;</div>

    </div>
)




export default CheckoutItem
import React from 'react'
import { useAppSelector } from '../../../hooks/redux';
import CartItem from './cart-item/CartItem'


const CartList = () => {
    const { products } = useAppSelector((state) => state.cart)
    return (
        <div>
            {products.map((product) => (
                <CartItem key={product.id} item={product} />
            ))}
        </div>
    )
}

export default CartList
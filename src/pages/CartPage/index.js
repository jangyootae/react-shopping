import React from 'react'
import { useAppSelector } from '../../hooks/redux';
import CartList from './cart-list/CartList';

const CartPage = () => {
  const { products } = useAppSelector((state) => state.cart);
  return (
    <div className='page'>
        <div className='container'>
          <h1>장바구니</h1>
          <CartList />
        </div>
    </div >
  )
}

export default CartPage
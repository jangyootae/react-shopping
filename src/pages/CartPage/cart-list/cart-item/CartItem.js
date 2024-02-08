import React from "react";
import { Link } from "react-router-dom";
import {
  deleteFromCart,
  incrementProduct,
  decrementProduct,
} from "../../../../redux/cart.slice";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppDispatch } from "../../../../hooks/redux";
import styled from "styled-components";

const CartItem = ({ item }) => {
  const dispatch = useAppDispatch();

  const deleteProduct = () => {
    dispatch(deleteFromCart(item.id));
  };

  const incrementCount = () => {
    dispatch(incrementProduct(item.id));
  };

  const decrementCount = () => {
    dispatch(decrementProduct(item.id));
  };

  return (
    <Cart_item>
      <Link to={`/card/${item.id}`}>
        <img src={item.image} alt="product card" />
      </Link>
      <Cart_description>
        <h3>{item.category}</h3>
        <h2>{item.title}</h2>
        <span>
          {item.price} x {item.quantity} = $ {item.total.toFixed(2)}
        </span>
      </Cart_description>

      <Cart_count>
        <div>
          <button disabled={item.quantity === 1} onClick={decrementCount}>
            -
          </button>
          <span>{item.quantity}</span>
          <button disabled={item.quantity === 10} onClick={incrementCount}>
            +
          </button>
        </div>
      </Cart_count>
      <Cart_del>
        <button onClick={deleteProduct} className="del">
          <AiOutlineDelete />
        </button>
      </Cart_del>
    </Cart_item>
  );
};
const Cart_item = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(182 179 179);

  img {
    width: 100%;
    max-width: 100px;
    height: 120px;
  }
  .del {
    display: flex;
    align-items: center;
  }
`;
const Cart_description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;
  margin-left: 20px;
  text-align: start;
`;
const Cart_count = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      padding: 5px 10px;
      color: #333;
      font-weight: 400;
      font-size: 10px;
      background: none;
      border: 2px solid rgb(39 39 39 / 10%);
      cursor: pointer;
      transition: 0.3s ease-out;

      &:disabled {
        color: rgb(39 39 39 / 10%);
        cursor: default;
      }

      &:hover {
        border: 2px solid #333;
      }
    }
  }
`;
const Cart_del = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  button {
    height: 30px;
  }
`;
export default CartItem;

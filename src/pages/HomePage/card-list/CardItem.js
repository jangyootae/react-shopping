import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addToCart } from "../../../redux/cart.slice";
import styled from "styled-components";

const CardItem = ({ item }) => {
  const { products } = useAppSelector((state) => state.cart);
  const productMatching = products.some((product) => product.id === item.id);
  const dispatch = useAppDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <Card_Item>
      <li>
        <Link to={`/product/${item.id}`}>
          <img src={item.image} width="80%" height="200px" alt="product card" />
        </Link>

        <h5>{item.title.substring(0, 15)}...</h5>

        <div>
          <button
            disabled={productMatching}
            onClick={() => !productMatching && addItemToCart()}
          >
            {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
          </button>
          <p>$ {item.price}</p>
        </div>
      </li>
    </Card_Item>
  );
};
const Card_Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-right: 10px;
  margin-bottom: 30px;
  padding: 30px;
  border: 1px solid #b6b2b2;
  transition: transform 0.2s ease-in-out;
`;
export default CardItem;

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchProducts } from "../../../redux/products.slice";
import CardItem from "./CardItem";
import styled from "styled-components";

const CardList = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);
  const category = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchProducts(category?.toLowerCase()));
  }, [category]);

  return (
    <Lis>
      {products.map((product) => (
        <CardItem key={product.id} item={product} />
      ))}
    </Lis>
  );
};
const Lis = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;
export default CardList;

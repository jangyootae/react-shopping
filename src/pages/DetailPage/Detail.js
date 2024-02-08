import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProduct } from "../../redux/product.slice";
import { addToCart } from "../../redux/cart.slice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import styled from "styled-components";

const Detail = () => {
  const { id } = useParams();
  const productId = Number(id);
  const dispatch = useAppDispatch();
  const { product, isLoading } = useAppSelector((state) => state.product);
  const { products } = useAppSelector((state) => state.cart);
  const productMatching = products.some((cartProduct) => cartProduct.id === productId);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId]);
  const addItemToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <Detail_P>
      <div className="card_img">
        <img src={product.image} alt="product card" />
      </div>
      <div className="description">
        <h3>{product.category}</h3>
        <h1>{product.title}</h1>

        <h4>${product.price}</h4>
        <p>{product.description}</p>
        <div>
          <button
            disabled={productMatching}
            onClick={() => !productMatching && addItemToCart()}
          >
            {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
          </button>
          <Link to={"/cart"}>장바구니로 이동</Link>
        </div>
      </div>
    </Detail_P>
  );
};

const Detail_P = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 80px;
  padding: 5px;
  .card_img{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin-bottom: 50px;
    img {
        width: 100%;
        max-width: 200px;
        height: auto;
    }
  }
  .description{
    width: 100%;
    text-align: start;
  }
  @media (min-width: 576px) {
    padding: 15px;
  }

  @media (min-width: 990px) {
    flex-flow: row wrap;
    padding: 5px;
  }
`;
export default Detail;

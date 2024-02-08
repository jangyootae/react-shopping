import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("데이터를 불러오는 중 에러 발생:", error);
      }
    };
    fetchData();
  }, []);

  const skipdecription = (description, maxLength) => {
    return description.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;
  };
  const handleProductClick = (productId) => {
    navigate(`/detail/${productId}`);
  };
  const handleCategoryClick = (category) => {
    // 카테고리 버튼 클릭 시 해당 카테고리로 상품 필터링
    setSelectedCategory(category);
  };
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  return (
    <MainContainer>
      <h2>Product</h2>
      <Category>
        <button onClick={() => handleCategoryClick(null)}>모두</button>
        <button onClick={() => handleCategoryClick("electronics")}>
          전자기기
        </button>
        <button onClick={() => handleCategoryClick("jewelery")}>쥬얼리</button>
        <button onClick={() => handleCategoryClick("men's clothing")}>
          남성 의류
        </button>
        <button onClick={() => handleCategoryClick("women's clothing")}>
          여성 의류
        </button>
      </Category>

      {/* 상품 목록 출력 */}
      <ProductList>
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            onClick={() => {
              handleProductClick(product.id);
            }}
          >
            <img src={product.image} alt={product.title} />
            <p>{skipdecription(product.title, 40)}</p>
            <p>{product.price} 원</p>
            <p>{skipdecription(product.description, 50)}</p>
            <p>
              평점: {product.rating.rate} ({product.rating.count} 개의 평가)
            </p>
          </ProductItem>
        ))}
      </ProductList>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 20px;
  h2 {
    display: flex;
    justify-content: center;
  }
`;
const Category = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  button {
    width: 150px;
    margin-left: 100px;
    font-size: 1.5rem;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 20px 20px 20px;
`;

const ProductItem = styled.div`
  text-align: center;
  width: 200px;
  height: 400px;
  margin: 2px;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 10px;
  }
`;

export default Main;

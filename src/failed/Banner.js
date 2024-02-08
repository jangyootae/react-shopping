import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login")
  }
  const handleMain = () => {
    navigate("/main")
  }
  const handleBasket = () => {
    navigate("/basket")
  }
  
  return (
    <Top>
        <div className="ban">
        <button onClick={handleMain}>홈피</button>    
        </div>
        <div className="ban">
          <button onClick={handleBasket}>장바구니</button>
          <button>개인정보</button>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
    </Top>
  );
};
const Top = styled.div`
display: flex;
justify-content: space-between;
height: 100%;
.ban {
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

export default Banner;

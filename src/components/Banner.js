import React from "react";
import styled from "styled-components";
import {Outlet, useNavigate } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';

const Banner = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login")
  }
  const handleMain = () => {
    navigate("/")
  }
  const handleBasket = () => {
    navigate("/cart")
  }
  const { isAuth } = useAuth();
  return (
    <div>
      <Top>
        <div className="ban">
        <button onClick={handleMain}>홈피</button>    
        </div>
        <div className="ban">
          <button onClick={handleBasket}>장바구니</button>
          <button>개인정보</button>
          <button onClick={handleLogout}>{isAuth ? "로그아웃" : "로그인"}</button>
        </div>
    </Top>
    <Outlet />
    </div>
    
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

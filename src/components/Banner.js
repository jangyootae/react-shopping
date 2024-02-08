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
        <CateButton onClick={handleMain}>홈페이지</CateButton>    
        </div>
        <div className="ban">
          <CateButton onClick={handleBasket}>장바구니</CateButton>
          <CateButton onClick={handleLogout}>{isAuth ? "로그아웃" : "로그인"}</CateButton>
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
box-shadow: 5px 5px 5px lightgray;
`;
const CateButton = styled.button`
    width: auto;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px 40px;
    font-weight: 500;
    font-size: 15px;
    background: #fff;
    border: 1px solid lightgray;
    cursor: pointer;
    transition: 0.3s all ease;
    border-radius: 4px;

    &:hover {
        color: #fff;
        background: gray;
    }
`;
export default Banner;

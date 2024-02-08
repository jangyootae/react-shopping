import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setActiveCategory } from '../../../redux/categories.slice';
import styled from 'styled-components';

const CategoryTab = ({ text, categoryName }) => {
    const dispatch = useAppDispatch();
    const category = useAppSelector((state) => state.categories);

    const getActiveCategory = () => {
        dispatch(setActiveCategory(categoryName));
    };

    return (
        <div>
            {categoryName === category ? (
                <ActiveCateButton onClick={getActiveCategory}>{text}</ActiveCateButton>
            ) : (
                <CateButton onClick={getActiveCategory}>{text}</CateButton>
            )}
        </div>
    );
};
const CateButton = styled.button`
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px 40px;
    font-weight: 500;
    font-size: 15px;
    background: #fff;
    border: 1px solid black;
    cursor: pointer;
    transition: 0.3s all ease;
    border-radius: 4px;

    &:hover {
        color: #fff;
        background: gray;
    }

    @media (min-width: 992px) {
        margin-right: 20px;
        margin-bottom: 20px;
        padding: 19px 65px;
        font-weight: 500;
        font-size: 17px;
    }
`;

const ActiveCateButton = styled(CateButton)`
    color: #fff;
    background: gray;
    border: 1px solid black;
`;

export default CategoryTab;

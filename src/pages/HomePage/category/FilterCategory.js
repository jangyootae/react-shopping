import React from 'react';
import { CategoriesName } from '../../../redux/categories.type';
import CategoryTab from './CategoryTab';
import styled from 'styled-components';
const FilterCategory = () => {
    return (
        <Category className='cate'>
            <CategoryTab text={"모두"} categoryName={CategoriesName.All} />
            <CategoryTab text={"전자기기"} categoryName={CategoriesName.Electronics} />
            <CategoryTab text={"쥬얼리"} categoryName={CategoriesName.Jewelry} />
            <CategoryTab text={"남성의류"} categoryName={CategoriesName.MensClothing} />
            <CategoryTab text={"여성의류"} categoryName={CategoriesName.WomensClothing} />
        </Category>
    );
};
const Category = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 16px;
`
export default FilterCategory;

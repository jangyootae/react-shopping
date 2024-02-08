import React from 'react';
import CardList from './card-list/CardList';
import FilterCategory from './category/FilterCategory';
import CountProducts from './count-products/CountProducts';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Page>
      <div className='container'>
        <h1>Products</h1>
        <div className="cate">
        <FilterCategory />
        </div>
        
        <CountProducts />
        <CardList className='Jan'/>
      </div>
    </Page>
  );
};
const Page = styled.div`

`
export default HomePage;

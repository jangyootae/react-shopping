import React from 'react';
import { useAppSelector } from '../../../hooks/redux';

const CountProducts = () => {
    const { products, isLoading } = useAppSelector((state) => state.products);

    return (
        <div>
            {!isLoading && (
                <p>
                    Showing: {products.length} items
                </p>
            )}
        </div>
    );
};

export default CountProducts;

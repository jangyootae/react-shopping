import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchOrder } from '../../redux/order.slice';
import OrderItem from './OrderItem';

const OrdersList = () => {
    const { id } = useAuth();
    const { order } = useAppSelector((state) => state.order);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchOrder(id));
    }, [id]);

    return (
        <div>
            {order.map((item) => (
                <div key={item.id}>
                    <div>
                        <h3>주문 번호_{item.id}</h3>
                        <p>합계: $ {item.totalPrice.toFixed(2)}</p>
                    </div>

                    <ul>
                        {item.products.map((order) => (
                            <OrderItem key={order.id} order={order} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default OrdersList;

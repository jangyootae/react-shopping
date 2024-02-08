import React from 'react';
import { Link } from 'react-router-dom';

const OrderItem = ({ order }) => {
    return (
        <li>
            <Link to={`/product/${order.id}`}>
                <img src={order.image} alt="product card" />
            </Link>
            <div>
                <h4>{order.category}</h4>
                <h3>{order.title}</h3>
            </div>
            <div>
                <h4>가격: </h4>
                <span>
                    $ {order.price} x {order.quantity}{" "}
                </span>
            </div>
            <div>
                <h4>합계 :</h4>
                <span>$ {order.total}</span>
            </div>
        </li>
    );
};

export default OrderItem;

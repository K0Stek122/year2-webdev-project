import React from 'react';
import './css/OrderInfo.css';

type OrderInfoProps = object;

const OrderInfo: React.FC<OrderInfoProps> = () => {
    return (
        <div className="order-info">
            <p>Buy Get One Free!</p>
        </div>
    );
};

export default OrderInfo;
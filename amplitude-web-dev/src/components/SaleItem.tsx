import React from 'react';
import './css/SaleItem.css';

interface SaleItemProps {
    name: string;
    price: number;
}

const SaleItem: React.FC<SaleItemProps> = ({ name, price }) => {
    return (
        <div className="card">
            <p className="item-title">{name}</p>
            <p className="item-price">Price: ${price.toFixed(2)}</p>
            <button className="item-button">Add to Cart</button>
        </div>
    );
};

export default SaleItem;
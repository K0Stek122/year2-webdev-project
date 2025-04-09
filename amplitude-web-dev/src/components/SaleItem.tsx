import React from 'react';
import './css/SaleItem.css';

interface SaleItemProps {
    name: string;
    price: number;
}

const SaleItem: React.FC<SaleItemProps> = ({ name, price }) => {
    const addToCart = () => {
        // Check if user is logged in
        // Logic to add the item to the cart
        console.log(`Added ${name} to cart at price £${price.toFixed(2)}`);
    };
    return (
        <div className="card">
            <p className="item-title">{name}</p>
            <p className="item-price">Price: £{price.toFixed(2)}</p>
            <button className="item-button" onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default SaleItem;
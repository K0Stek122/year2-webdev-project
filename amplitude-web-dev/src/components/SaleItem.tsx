import React from 'react';
import './css/SaleItem.css';
import Button from './Button';

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
            <Button name="Add to Cart" onclick={addToCart} />
        </div>
    );
};

export default SaleItem;
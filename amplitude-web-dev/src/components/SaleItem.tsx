import React from 'react';

interface SaleItemProps {
    name: string;
    price: number;
}

const SaleItem: React.FC<SaleItemProps> = ({ name, price }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: ${price.toFixed(2)}</p>
        </div>
    );
};

export default SaleItem;
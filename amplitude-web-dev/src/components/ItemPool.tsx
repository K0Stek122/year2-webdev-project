import React from 'react';

interface ItemPoolProps {
    name: string;
    price: number;
}

const ItemPool: React.FC<ItemPoolProps> = ({ name, price }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: ${price.toFixed(2)}</p>
        </div>
    );
};

export default SaleItem;
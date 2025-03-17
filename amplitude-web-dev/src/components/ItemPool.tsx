import React from 'react';
import './css/ItemPool.css';
import './SaleItem'
import SaleItem from './SaleItem';

type ItemPoolProps = object;

const ItemPool: React.FC<ItemPoolProps> = () => {
    return (
        <div className="item-pool">
            {Array.from({ length: 5 }).map((_, index) => (
                <SaleItem key={index} name={`Item ${index + 1}`} price={Math.floor(Math.random() * 100) + 1} />
            ))}
        </div>
    );
};

export default ItemPool;
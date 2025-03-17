import React from 'react';
import './css/Filter.css';

type FilterProps = object;

const Filter: React.FC<FilterProps> = () => {
    return (
        <div className="filter">
            <div className="filter-container">
                <p>Element 1</p>
            </div>
        </div>
    );
};

export default Filter;
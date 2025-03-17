import React from 'react';
import './css/Category.css';

type CategoryProps = {
    name: string;
    onclick?: () => void;
};

const Category: React.FC<CategoryProps> = (CategoryProps) => {
    return (
        <div className="category">
            <p onClick={CategoryProps.onclick}>{CategoryProps.name}</p>
        </div>
    );
}

export default Category;
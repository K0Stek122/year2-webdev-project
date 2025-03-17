import React from 'react';
import './css/Category.css';

type CategoryProps = {
    name: string;
};

const Category: React.FC<CategoryProps> = (CategoryProps) => {
    return (
        <div className="category">
            <p>{CategoryProps.name}</p>
        </div>
    );
}

export default Category;
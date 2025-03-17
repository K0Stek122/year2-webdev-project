import React from 'react';
import './css/Categories.css';
import Category from './Category';

type CategoriesProps = object;

const Categories: React.FC<CategoriesProps> = () => {
    return (
        <div className="categories">
            <Category name="Test" />
            <Category name="Test 2" />
        </div>
    );
};

export default Categories;
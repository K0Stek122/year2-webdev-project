import React from 'react';
import './css/Categories.css';
import Category from './Category';

type CategoriesProps = object;

const Categories: React.FC<CategoriesProps> = () => {
    return (
        <div className="categories">
            <Category name="Stereo Equipment" />
            <Category name="Guitars" />
            <Category name="Keyboards" />
            <Category name="Drums" />
            <Category name="Car Parts" />
            <Category name="DJ and Audio Gear" />
        </div>
    );
};

export default Categories;
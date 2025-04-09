import React from 'react';
import './css/HomePage.css';
import ItemPool from '../components/ItemPool';
import Filter from '../components/Filter';

const MainContent: React.FC = () => {
    return (
        <div className="main-content">
            <Filter />
            <ItemPool />
        </div>
    );
};

export default MainContent;
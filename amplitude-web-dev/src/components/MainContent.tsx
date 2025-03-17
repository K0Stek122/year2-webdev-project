import React from 'react';
import './css/MainContent.css';
import ItemPool from './ItemPool';
import Filter from './Filter';

const MainContent: React.FC = () => {
    return (
        <div className="main-content">
            <Filter />
            <ItemPool />
        </div>
    );
};

export default MainContent;
import React from 'react';
import './css/HomePage.css';
import ItemPool from '../components/ItemPool';

const MainContent: React.FC = () => {
    return (
        <div className="main-content">
            <ItemPool />
        </div>
    );
};

export default MainContent;
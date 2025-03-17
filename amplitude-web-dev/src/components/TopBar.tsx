import React from 'react';
import './css/TopBar.css';
import Route from './Route';
import Categories from './Categories';
import LogoSearchLogin from './LogoSearchLogin';
import OrderInfo from './OrderInfo';

type TopBarProps = object;

const TopBar: React.FC<TopBarProps> = () => {
    return (
        <div className="top-bar">
            <OrderInfo />
            <LogoSearchLogin />
            <Categories />
            <Route />
        </div>
    );
};

export default TopBar;
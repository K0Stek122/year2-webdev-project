import React from 'react';
import { useLocation } from 'react-router-dom';
import './css/Route.css';

type RouteProps = object;

const Route: React.FC<RouteProps> = () => {
    const location = useLocation();
    const isHomeRoute = location.pathname === "/";

    return (
        <div className="route">
            <p>{isHomeRoute ? "Home" : "Not Home"}</p>
        </div>
    );
};

export default Route;
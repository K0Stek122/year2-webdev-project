import React from 'react';
import { useLocation } from 'react-router-dom';
import './css/Route.css';

type RouteProps = object;

const Route: React.FC<RouteProps> = () => {
    const location = useLocation();

    const determineRoute = () => {
        const path = location.pathname;
        let strippedPath = path.replace(/^\//, '').replace(/-+/g, ' ');
        strippedPath = strippedPath.charAt(0).toUpperCase() + strippedPath.slice(1);
        if (strippedPath !== 'Home') {
            if (strippedPath === "Login") {
                return strippedPath
            }
            return "Home -> " + strippedPath;
        }
        return strippedPath;

    };

    return (
        <div className="route">
            <p>{determineRoute()}</p>
        </div>
    );
};

export default Route;
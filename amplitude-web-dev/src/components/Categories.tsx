import React from 'react';
import './css/Categories.css';
import Category from './Category';
import { useNavigate } from 'react-router-dom';

type CategoriesProps = object;

const Categories: React.FC<CategoriesProps> = () => {
    const navigate = useNavigate();

    const handleGuitarClick = () => {
        navigate('/guitars');
    };

    const handleStereoClick = () => {
        navigate('/stereo');
    };

    const handleKeyboardsClick = () => {
        navigate('/keyboards');
    };

    const handleDrumsClick = () => {
        navigate('/drums');
    };

    const handleCarPartsClick = () => {
        navigate('/car-parts');
    };

    const handleDjAudioGearClick = () => {
        navigate('/dj-audio-gear');
    };

    return (
        <div className="categories">
            <Category name="Stereo Equipment" onclick={handleStereoClick} />
            <Category name="Guitars" onclick={handleGuitarClick} />
            <Category name="Keyboards" onclick={handleKeyboardsClick} />
            <Category name="Drums" onclick={handleDrumsClick} />
            <Category name="Car Parts" onclick={handleCarPartsClick} />
            <Category name="DJ and Audio Gear" onclick={handleDjAudioGearClick} />
        </div>
    );
};

export default Categories;
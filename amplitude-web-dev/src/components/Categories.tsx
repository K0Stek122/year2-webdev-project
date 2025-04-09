import React from 'react';
import './css/Categories.css';
import Button from './Button';
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
            <Button name="Stereo Equipment" onclick={handleStereoClick} />
            <Button name="Guitars" onclick={handleGuitarClick} />
            <Button name="Keyboards" onclick={handleKeyboardsClick} />
            <Button name="Drums" onclick={handleDrumsClick} />
            <Button name="Car Parts" onclick={handleCarPartsClick} />
            <Button name="DJ and Audio Gear" onclick={handleDjAudioGearClick} />
        </div>
    );
};

export default Categories;
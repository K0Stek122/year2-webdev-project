import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, Mock } from 'vitest';
import Categories from '../../components/Categories';
import { useNavigate } from 'react-router-dom';

vi.mock('react-router-dom', () => ({
    useNavigate: vi.fn(), // A mock function that simulates useNavigate from Categories.tsx
}));

describe('Categories', () => {
    it('Renders all categories', () => {
        render(<Categories />);
        expect(screen.getByText('Stereo Equipment')).toBeTruthy();
        expect(screen.getByText('Guitars')).toBeTruthy();
        expect(screen.getByText('Keyboards')).toBeTruthy();
        expect(screen.getByText('Drums')).toBeTruthy();
        expect(screen.getByText('Car Parts')).toBeTruthy();
        expect(screen.getByText('DJ and Audio Gear')).toBeTruthy();
    });

    it('Navigates to correct page when clicked', () => {
        const navigate = vi.fn();
        (useNavigate as Mock).mockReturnValue(navigate);
        
        render(<Categories />);
        screen.getByText('Stereo Equipment').click();
        expect(navigate).toHaveBeenCalledWith('/stereo');
        screen.getByText('Guitars').click();
        expect(navigate).toHaveBeenCalledWith('/guitars');
        screen.getByText('Keyboards').click();
        expect(navigate).toHaveBeenCalledWith('/keyboards');
        screen.getByText('Drums').click();
        expect(navigate).toHaveBeenCalledWith('/drums');
        screen.getByText('Car Parts').click();
        expect(navigate).toHaveBeenCalledWith('/car-parts');
        screen.getByText('DJ and Audio Gear').click();
        expect(navigate).toHaveBeenCalledWith('/dj-audio-gear');
    });

    it('Has className = "category"', () => {
        render(<Categories />);
        expect(screen.getByText('Stereo Equipment').parentElement).toHaveClass('category');
    });
});

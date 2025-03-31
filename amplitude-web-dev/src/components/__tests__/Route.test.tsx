import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, Mock } from 'vitest';
import Route from '../../components/Route';
import '@testing-library/jest-dom';
import { useLocation } from 'react-router-dom';

vi.mock('react-router-dom', () => ({
    mockOnClick: vi.fn(),
    useLocation: vi.fn(),
}));

describe('Route Component', () => {
    it('Render route text', () => {
        (useLocation as Mock).mockReturnValue({ pathname: '/' });
        render(<Route />);
        expect(screen.getByText('Home ->')).toBeInTheDocument();
    });

    it('determineRoute returns correct route', () => {
        (useLocation as Mock).mockReturnValue({ pathname: '/stereo' });
        render(<Route />);
        expect(screen.getByText('Home -> Stereo')).toBeInTheDocument();
    });
});

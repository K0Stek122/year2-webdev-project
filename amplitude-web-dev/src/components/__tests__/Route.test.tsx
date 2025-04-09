import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, Mock } from 'vitest';
import Route from '../../components/Route';
import { useLocation } from 'react-router-dom';

vi.mock('react-router-dom', () => ({
    mockOnClick: vi.fn(),
    useLocation: vi.fn(),
}));

describe('Route Component', () => {
    it('Render route text', () => {
        (useLocation as Mock).mockReturnValue({ pathname: '/' });
        render(<Route />);
        expect(screen.getByText('Home ->')).toBeTruthy();
    });

    it('determineRoute returns correct route', () => {
        (useLocation as Mock).mockReturnValue({ pathname: '/stereo' });
        render(<Route />);
        expect(screen.getByText('Home -> Stereo')).toBeTruthy();
    });
});

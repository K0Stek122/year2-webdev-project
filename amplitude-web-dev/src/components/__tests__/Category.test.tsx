import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Category from '../../components/Category';
import '@testing-library/jest-dom';

vi.mock('react-router-dom', () => ({
    mockOnClick: vi.fn(), // A mock function that simulates onClick from Category.tsx
}));

describe('Category Component', () => {
    it('Renders a category', () => {
        render(<Category name="Guitars" />);
        expect(screen.getByText('Guitars')).toBeInTheDocument();
    });
    it ('triggers event when clicked', () => {
        const mockOnClick = vi.fn();
        render(<Category name="Guitars" onclick={mockOnClick} />);
        screen.getByText('Guitars').click();
        expect(mockOnClick).toHaveBeenCalled();
    });
});
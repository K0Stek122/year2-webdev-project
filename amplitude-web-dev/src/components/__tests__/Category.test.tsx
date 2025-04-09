import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import Category from '../../components/Category';

vi.mock('react-router-dom', () => ({
    mockOnClick: vi.fn(), // A mock function that simulates onClick from Category.tsx
}));

describe('Category Component', () => {
    it('Renders a category', () => {
        render(<Category name="Guitars" />);
        expect(screen.getByText('Guitars')).toBeTruthy();
    });
    it ('triggers event when clicked', () => {
        const mockOnClick = vi.fn();
        render(<Category name="Guitars" onclick={mockOnClick} />);
        screen.getByText('Guitars').click();
        expect(mockOnClick).toHaveBeenCalled();
    });
});
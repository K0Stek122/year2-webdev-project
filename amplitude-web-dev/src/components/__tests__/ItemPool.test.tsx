import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ItemPool from '../../components/ItemPool';
import '@testing-library/jest-dom';

vi.mock('react-router-dom', () => ({
    mockOnClick: vi.fn(),
}));

describe('ItemPool Component', () => {
    it('has SaleItem components', () => {
        render(<ItemPool />);
        expect(screen.getByText('Item 1')).toBeInTheDocument();
    });
});
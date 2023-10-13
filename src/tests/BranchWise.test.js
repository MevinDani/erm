import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BranchWiseSales from '../reusables/BranchWiseSales';



describe('TodaySales', () => {

    it('renders Todays Sales with a button', () => {
        const { getByText } = render(<BranchWiseSales />);

        const branchName = getByText(/Branch name/i);
        const todaySales = getByText(/Today Sales/i);

        expect(branchName).toBeInTheDocument();
        expect(todaySales).toBeInTheDocument();
    });
})
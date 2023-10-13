import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodaySales from '../reusables/TodaySales';

describe('TodaySales', () => {

    it('renders Todays Sales with a button', () => {
        const { getByText } = render(<TodaySales />);
        const todaysSalesText = getByText(/Todays Sales/i);
        const viewListButton = getByText(/view list/i);

        expect(todaysSalesText).toBeInTheDocument();
        expect(viewListButton).toBeInTheDocument();
    });


    it('toggleDropdown toggles isOpen state', () => {
        const { getByTestId, getByText } = render(<TodaySales />);

        const sortDownIcon = getByTestId('dropdown-clicker'); 
        fireEvent.click(sortDownIcon);

        const dropdown = getByText('Last 10 days');
        expect(dropdown).toBeInTheDocument();
    });

})


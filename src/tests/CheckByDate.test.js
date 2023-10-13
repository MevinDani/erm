import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckByDate from '../reusables/CheckByDate';


describe('TodaySales', () => {

    it('renders Todays Sales with a button', () => {
        const { getByText } = render(<CheckByDate />);
        const todaysSalesText = getByText(/Check by date/i);
        const viewListButton = getByText(/view list/i);

        expect(todaysSalesText).toBeInTheDocument();
        expect(viewListButton).toBeInTheDocument();
    });


    it('toggleDropdown toggles isOpen state', () => {
        const { getByTestId, getByText } = render(<CheckByDate />);

        const sortDownIcon = getByTestId('dropdown-clicker');
        fireEvent.click(sortDownIcon);

        const dropdown = getByText('Last 10 days');
        expect(dropdown).toBeInTheDocument();
    });

})


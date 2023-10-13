import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DoughnutChart from '../reusables/Doughnut';




describe('TodaySales', () => {

    it('renders Todays Sales with a button', () => {
        const { getByText } = render(<DoughnutChart />);
        const topProd = getByText(/Top 5 products/i);
        const currMonth = getByText(/current month/i);

        expect(topProd).toBeInTheDocument();
        expect(currMonth).toBeInTheDocument();
    });


    it('toggleDropdown toggles isOpen state', () => {
        const { getByTestId, getByText } = render(<DoughnutChart />);

        const sortDownIcon1 = getByTestId('dropdown-clicker-1'); 
        const sortDownIcon2 = getByTestId('dropdown-clicker-2'); 
        fireEvent.click(sortDownIcon1);
        fireEvent.click(sortDownIcon2);

        const dropdown1 = getByText('Clutch');
        const dropdown2 = getByText('Last 10 days');
        expect(dropdown1).toBeInTheDocument();
        expect(dropdown2).toBeInTheDocument();
    });

})


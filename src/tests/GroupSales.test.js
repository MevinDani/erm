import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import GroupSales, { getDeptData } from '../components/GroupSales';



describe('GroupSales Component', () => {
    it('should make the API call, when dates are given and button is clicked, and data is updated on ui', async () => {
        const mockData = [
            {
                "DEPTNO": "BR8     ",
                "GROUP": null,
                "NETCASH SALES": 0.00000,
                "NETCREDIT SALES": 0.00000,
                "NET SALERETURN": 0.000000,
                "VAT AMT": 0.000,
                "NET SALES EXCLVAT": 0.00000
            }
        ];

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        );


        const { getByLabelText, getByText, queryByText } = render(<GroupSales />);

        // Get input elements
        const fromDateInput = getByLabelText('From:');
        const toDateInput = getByLabelText('To:');

        // Get button element
        const goButton = getByText('Go');

        fireEvent.change(fromDateInput, { target: { value: '2023-10-12' } });
        fireEvent.change(toDateInput, { target: { value: '2023-10-15' } });
        fireEvent.click(goButton);

        // Wait for the fetch to resolve
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0));
        });

        expect(global.fetch).toHaveBeenCalledWith(`https://api-eproc.premierauto.ae/api/SalesAnalysis/SalesGroup?dateStart=2023-10-12&dateEnd=2023-10-15`);

        expect(queryByText("GROUP")).toBeInTheDocument();
    });

    it('should show an error message when API call fails', async () => {
        global.fetch = jest.fn(() =>
            Promise.reject(new Error('Some Error'))
        )

        const { getByLabelText, getByText } = render(<GroupSales />);

        // Get input elements
        const fromDateInput = getByLabelText('From:');
        const toDateInput = getByLabelText('To:');

        // Get button element
        const goButton = getByText('Go');

        fireEvent.change(fromDateInput, { target: { value: '2023-10-12' } });
        fireEvent.change(toDateInput, { target: { value: '2023-10-15' } });
        fireEvent.click(goButton);

        // Wait for the fetch to resolve
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0));
        });

        expect(getByText("Some Error Occured in the backend, Please try again later")).toBeInTheDocument();
    })

    it('should calculate sums by group when targetDeptNo is "all"', async () => {
        const mockData = [
            {
                DEPTNO: "BR8",
                GROUP: "Group1",
                "NETCASH SALES": 10,
                "NETCREDIT SALES": 20,
                "NET SALERETURN": 5,
                "VAT AMT": 2,
                "NET SALES EXCLVAT": 25
            },
            {
                DEPTNO: "BR1",
                GROUP: "Group2",
                "NETCASH SALES": 15,
                "NETCREDIT SALES": 25,
                "NET SALERETURN": 8,
                "VAT AMT": 3,
                "NET SALES EXCLVAT": 30
            },
            // Add more mock data as needed
        ]

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        );


        const { getByLabelText, getByText, queryByText } = render(<GroupSales />);

        // Get input elements
        const fromDateInput = getByLabelText('From:');
        const toDateInput = getByLabelText('To:');

        // Get button element
        const goButton = getByText('Go');

        fireEvent.change(fromDateInput, { target: { value: '2023-10-12' } });
        fireEvent.change(toDateInput, { target: { value: '2023-10-15' } });
        fireEvent.click(goButton);

        // Wait for the fetch to resolve
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0));
        });

        const option = getByLabelText("Filter By Branch:")

        fireEvent.change(option, { target: { value: 'all' } });

        expect(queryByText("BR8")).toBeInTheDocument();
        expect(queryByText("BR1")).toBeInTheDocument();
    })

    it('should filter data by department number when targetDeptNo is not "all"', async () => {
        const mockData = [
            {
                DEPTNO: "BR8",
                GROUP: "Group1",
                "NETCASH SALES": 10,
                "NETCREDIT SALES": 20,
                "NET SALERETURN": 5,
                "VAT AMT": 2,
                "NET SALES EXCLVAT": 25
            },
            {
                DEPTNO: "BR8",
                GROUP: "Group2",
                "NETCASH SALES": 15,
                "NETCREDIT SALES": 25,
                "NET SALERETURN": 8,
                "VAT AMT": 3,
                "NET SALES EXCLVAT": 30
            },
            // Add more mock data as needed
        ]

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        );


        const { getByLabelText, getByText, queryByText } = render(<GroupSales />);

        // Get input elements
        const fromDateInput = getByLabelText('From:');
        const toDateInput = getByLabelText('To:');

        // Get button element
        const goButton = getByText('Go');

        fireEvent.change(fromDateInput, { target: { value: '2023-10-12' } });
        fireEvent.change(toDateInput, { target: { value: '2023-10-15' } });
        fireEvent.click(goButton);

        // Wait for the fetch to resolve
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0));
        });

        const option = getByLabelText("Filter By Branch:")

        fireEvent.change(option, { target: { value: 'BR8' } });

        expect(queryByText("BR8")).toBeInTheDocument();
    })



});

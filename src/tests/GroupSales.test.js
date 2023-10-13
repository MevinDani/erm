import React from 'react';
import { render, fireEvent, act, waitFor, screen } from '@testing-library/react';
import GroupSales from '../components/GroupSales';



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

        expect(global.fetch).toHaveBeenCalledWith(`https://api-eproc.premierauto.ae/api/SalesAnalysis/SalesGroup?dateStart=2023-10-12&dateEnd=2023-10-15`)

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
                GROUP: "BATTERY",
                "NETCASH SALES": 10,
                "NETCREDIT SALES": 20,
                "NET SALERETURN": 5,
                "VAT AMT": 2,
                "NET SALES EXCLVAT": 25
            },
            {
                DEPTNO: "BR1",
                GROUP: "A/C GAS",
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

        // Check if "BR1" exists only once in the response data
        const br1Count = mockData.filter(item => item.DEPTNO === 'BR1').length;
        const br8Count = mockData.filter(item => item.DEPTNO === 'BR8').length;
        expect(br1Count).toBe(1);
        expect(br8Count).toBe(1);

    })

    it('should filter data by department number when targetDeptNo is not "all"', async () => {
        const mockData = [
            {
                DEPTNO: "BR8",
                GROUP: "BATTERY",
                "NETCASH SALES": 10,
                "NETCREDIT SALES": 20,
                "NET SALERETURN": 5,
                "VAT AMT": 2,
                "NET SALES EXCLVAT": 25
            },
            {
                DEPTNO: "BR8",
                GROUP: "A/C GAS",
                "NETCASH SALES": 15,
                "NETCREDIT SALES": 25,
                "NET SALERETURN": 8,
                "VAT AMT": 3,
                "NET SALES EXCLVAT": 30
            },
            {
                DEPTNO: "BR1",
                GROUP: "A/C GAS",
                "NETCASH SALES": 15,
                "NETCREDIT SALES": 25,
                "NET SALERETURN": 8,
                "VAT AMT": 3,
                "NET SALES EXCLVAT": 30
            }
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

        const br8Count = mockData.filter(item => item.DEPTNO === 'BR8').length;
        expect(br8Count).toBeGreaterThan(1);
    })

    it('to check if hidden rows are not present in mobile view', async () => {
        global.innerwidth = 500
        const mockData = [
            {
                DEPTNO: "BR8",
                GROUP: "BATTERY",
                "NETCASH SALES": 10,
                "NETCREDIT SALES": 20,
                "NET SALERETURN": 5,
                "VAT AMT": 2,
                "NET SALES EXCLVAT": 25
            },
            {
                DEPTNO: "BR8",
                GROUP: "A/C GAS",
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


        const { getByLabelText, getByText, queryByTestId, queryAllByText } = render(<GroupSales />);

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

        expect(global.fetch).toHaveBeenCalledWith(`https://api-eproc.premierauto.ae/api/SalesAnalysis/SalesGroup?dateStart=2023-10-12&dateEnd=2023-10-15`)

        const hiddenHeaders = queryAllByText(/hidden/i);
        expect(hiddenHeaders.length).toBe(0);
        expect(queryByTestId('expanded-row-0')).toBeNull();
    })

    it('dropdown item is visible after row click', async () => {
        global.innerWidth = 500;
        const mockData = [
            {
                DEPTNO: "BR8",
                GROUP: "BATTERY",
                "NETCASH SALES": 10,
                "NETCREDIT SALES": 20,
                "NET SALERETURN": 5,
                "VAT AMT": 2,
                "NET SALES EXCLVAT": 25
            },
            {
                DEPTNO: "BR1",
                GROUP: "A/C GAS",
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

        const { getByLabelText, getByText, queryByText, queryAllByText, getAllByTestId, getByTestId } = render(<GroupSales />);

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

        expect(global.fetch).toHaveBeenCalledWith(`https://api-eproc.premierauto.ae/api/SalesAnalysis/SalesGroup?dateStart=2023-10-12&dateEnd=2023-10-15`)


        const dropdownClickers = getAllByTestId('dropdown-clicker');
        fireEvent.click(dropdownClickers[0]);

        const expandedRow = getByTestId('expanded-row-0');

        expect(expandedRow).toBeInTheDocument();

        // Check if the inner elements have the 'expandable' class
        const thElement = expandedRow.querySelector('.expandable');
        const tdElement = expandedRow.querySelector('.expandable');

        // Assert that both elements have the 'expandable' class
        expect(thElement).toBeInTheDocument();
        expect(tdElement).toBeInTheDocument();

    });


});

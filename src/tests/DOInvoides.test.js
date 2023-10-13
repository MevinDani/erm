import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import DOInvoiced from '../components/DOInvoiced';


describe('DOInvoiced', () => {
    it('should make the API call, when dates are given and button is clicked, and data is updated on ui', async () => {
        const mockData = [
            {
                "DEPTNO": "BR9 ",
                "DONO": 935279.0,
                "DATE": "2023-10-12T00:00:00",
                "CUSTOMER": "BRIGHT SPARK AUTO REPAIRING L.L.C",
                "AMOUNT": 262.500,
                "VAT": 12.50,
                "AMOUNT_EXCLVAT": 250.000,
                "INV NO": 0.0,
                "SALESMAN": "BINUK"
            },
            {
                "DEPTNO": "BR9 ",
                "DONO": 935278.0,
                "DATE": "2023-10-12T00:00:00",
                "CUSTOMER": "AL MADAM TECHNICAL RESOURCES EST.",
                "AMOUNT": 645.750,
                "VAT": 30.75,
                "AMOUNT_EXCLVAT": 615.000,
                "INV NO": 0.0,
                "SALESMAN": "SAPIN"
            }
        ];

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        );


        const { getByLabelText, getByText, queryByText } = render(<DOInvoiced />);

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

        expect(global.fetch).toHaveBeenCalledWith(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DOINVOICED?dateStart=2023-10-12&dateEnd=2023-10-15`)

        expect(queryByText("DEPTNO")).toBeInTheDocument()
    });

    it('should show an error message when API call fails', async () => {
        global.fetch = jest.fn(() =>
            Promise.reject(new Error('Some Error'))
        )

        const { getByLabelText, getByText } = render(<DOInvoiced />);

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

    it('to check if hidden rows are not present in mobile view', async () => {
        global.innerwidth = 500
        const mockData = [
            {
                "DEPTNO": "BR9 ",
                "DONO": 935279.0,
                "DATE": "2023-10-12T00:00:00",
                "CUSTOMER": "BRIGHT SPARK AUTO REPAIRING L.L.C",
                "AMOUNT": 262.500,
                "VAT": 12.50,
                "AMOUNT_EXCLVAT": 250.000,
                "INV NO": 0.0,
                "SALESMAN": "BINUK"
            },
            {
                "DEPTNO": "BR9 ",
                "DONO": 935278.0,
                "DATE": "2023-10-12T00:00:00",
                "CUSTOMER": "AL MADAM TECHNICAL RESOURCES EST.",
                "AMOUNT": 645.750,
                "VAT": 30.75,
                "AMOUNT_EXCLVAT": 615.000,
                "INV NO": 0.0,
                "SALESMAN": "SAPIN"
            }
        ];

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        );


        const { getByLabelText, getByText, queryByTestId, queryAllByText } = render(<DOInvoiced />);

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

        expect(global.fetch).toHaveBeenCalledWith(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DOINVOICED?dateStart=2023-10-12&dateEnd=2023-10-15`)

        const hiddenHeaders = queryAllByText(/hidden/i);
        expect(hiddenHeaders.length).toBe(0);
        expect(queryByTestId('expanded-row-0')).toBeNull();
    })

    it('dropdown item is visible after row click', async () => {
        global.innerWidth = 500;
        const mockData = [
            {
                "DEPTNO": "BR9 ",
                "DONO": 935279.0,
                "DATE": "2023-10-12T00:00:00",
                "CUSTOMER": "BRIGHT SPARK AUTO REPAIRING L.L.C",
                "AMOUNT": 262.500,
                "VAT": 12.50,
                "AMOUNT_EXCLVAT": 250.000,
                "INV NO": 0.0,
                "SALESMAN": "BINUK"
            },
            {
                "DEPTNO": "BR9 ",
                "DONO": 935278.0,
                "DATE": "2023-10-12T00:00:00",
                "CUSTOMER": "AL MADAM TECHNICAL RESOURCES EST.",
                "AMOUNT": 645.750,
                "VAT": 30.75,
                "AMOUNT_EXCLVAT": 615.000,
                "INV NO": 0.0,
                "SALESMAN": "SAPIN"
            }
        ];


        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        );

        const { getByLabelText, getByText, queryByText, queryAllByText, getAllByTestId, getByTestId } = render(<DOInvoiced />);

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

        expect(global.fetch).toHaveBeenCalledWith(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DOINVOICED?dateStart=2023-10-12&dateEnd=2023-10-15`)


        const dropdownClickers = getAllByTestId('dropdown-clicker');
        fireEvent.click(dropdownClickers[0]);

        const expandedRow = getByTestId('expanded-row-0');

        // Check if the inner elements have the 'expandable' class
        const thElement = expandedRow.querySelector('.expandable');
        const tdElement = expandedRow.querySelector('.expandable');

        // Assert that both elements have the 'expandable' class
        expect(thElement).toBeInTheDocument();
        expect(tdElement).toBeInTheDocument();

    });



})
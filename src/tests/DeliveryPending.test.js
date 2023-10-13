import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import DeliveryPendItems from '../components/DeliveryPendItems';


describe('Delivery Pending Items', () => {
    it('should make the API call, when dates are given and button is clicked, and data is updated on ui', async () => {
        const mockData = [
            {
                "DEPTNO": "BR9 ",
                "DONO": 935275.0,
                "DATE": "2023-10-12T00:00:00",
                "CODE": "MMC894601",
                "DESCRIPTION": "SP-PAD KIT,FR BRAKE *S/S*",
                "DO QTY": 1.0,
                "INV QTY": 0.000,
                "ADJ_QTY": 0.0,
                "PEND QTY": 1.000,
                "UNIT PRICE": 475.000,
                "TOTAL": 475.000000,
                "SALES MAN": "IRSHAD",
                "GROUP": "MITSUBISHI",
                "SUBGROUP": "MF 1",
                "CATEG": "",
                "SCATEG": "GENERAL"
            }
        ];

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        );


        const { getByLabelText, getByText, queryByText } = render(<DeliveryPendItems />);

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

        expect(global.fetch).toHaveBeenCalledWith(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DOreport/DOPending/Item?dateStart=2023-10-12&dateEnd=2023-10-15`)

        expect(queryByText("DEPTNO")).toBeInTheDocument();
    });

    it('should show an error message when API call fails', async () => {
        global.fetch = jest.fn(() =>
            Promise.reject(new Error('Some Error'))
        )

        const { getByLabelText, getByText } = render(<DeliveryPendItems />);

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
                "DONO": 935275.0,
                "DATE": "2023-10-12T00:00:00",
                "CODE": "MMC894601",
                "DESCRIPTION": "SP-PAD KIT,FR BRAKE *S/S*",
                "DO QTY": 1.0,
                "INV QTY": 0.000,
                "ADJ_QTY": 0.0,
                "PEND QTY": 1.000,
                "UNIT PRICE": 475.000,
                "TOTAL": 475.000000,
                "SALES MAN": "IRSHAD",
                "SUBGROUP": "MF 1",
                "CATEG": "",
                "SCATEG": "GENERAL"
            }
        ];

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        );


        const { getByLabelText, getByText, queryByTestId, queryAllByText } = render(<DeliveryPendItems />);

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

        expect(global.fetch).toHaveBeenCalledWith(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DOreport/DOPending/Item?dateStart=2023-10-12&dateEnd=2023-10-15`)

        const hiddenHeaders = queryAllByText(/hidden/i);
        expect(hiddenHeaders.length).toBe(0);
        expect(queryByTestId('expanded-row-0')).toBeNull();
    })

    it('dropdown item is visible after row click', async () => {
        global.innerWidth = 500;
        const mockData = [
            {
                "DEPTNO": "BR9 ",
                "DONO": 935308.0,
                "DATE": "2023-10-13T00:00:00",
                "CODE": "MMZ691140",
                "DESCRIPTION": "SP-OIL FILTER(CARTRIDGE TYPE) *S/S*",
                "DO QTY": 10.0,
                "INV QTY": 0.000,
                "ADJ_QTY": 0.0,
                "PEND QTY": 10.000,
                "UNIT PRICE": 12.000,
                "TOTAL": 120.000000,
                "SALES MAN": "HANEEFA",
                "GROUP": "MITSUBISHI",
                "SUBGROUP": "MC 30",
                "CATEG": "LANCER-EX",
                "SCATEG": "SERVICE PARTS"
            },
            {
                "DEPTNO": "BR9 ",
                "DONO": 935307.0,
                "DATE": "2023-10-13T00:00:00",
                "CODE": "25570-3AA0C",
                "DESCRIPTION": "SP-SWITCH ASSY MIRROR CONTROL",
                "DO QTY": 5.0,
                "INV QTY": 0.000,
                "ADJ_QTY": 0.0,
                "PEND QTY": 5.000,
                "UNIT PRICE": 60.000,
                "TOTAL": 300.000000,
                "SALES MAN": "ASHKAR",
                "GROUP": "NISSAN",
                "SUBGROUP": "N 5",
                "CATEG": "SENTRA",
                "SCATEG": "ELECTRIC"
            },
            {
                "DEPTNO": "BR9 ",
                "DONO": 935306.0,
                "DATE": "2023-10-12T00:00:00",
                "CODE": "90916-02705",
                "DESCRIPTION": "SP-A/C BELT *S/S*",
                "DO QTY": 1.0,
                "INV QTY": 0.000,
                "ADJ_QTY": 0.0,
                "PEND QTY": 1.000,
                "UNIT PRICE": 75.000,
                "TOTAL": 75.000000,
                "SALES MAN": "IRSHAD",
                "GROUP": "TOYOTA",
                "SUBGROUP": "T 1",
                "CATEG": "",
                "SCATEG": "GENERAL"
            },
        ];


        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        );

        const { getByLabelText, getByText, queryByText, queryAllByText, getAllByTestId, getByTestId } = render(<DeliveryPendItems />);

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

        expect(global.fetch).toHaveBeenCalledWith(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DOreport/DOPending/Item?dateStart=2023-10-12&dateEnd=2023-10-15`)


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
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

        expect(global.fetch).toHaveBeenCalledWith(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DOreport/DOPending/Item?dateStart=2023-10-12&dateEnd=2023-10-15`);

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
})
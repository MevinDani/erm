import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import GroupSales from '../components/GroupSales';


describe('GroupSales Component', () => {
    it('should set data in state when API call is successful', async () => {
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

        let component;

        await act(async () => {
            component = render(<GroupSales />);
            await component.findByLabelText('From:').then(el => fireEvent.change(el, { target: { value: '2023-01-01' } }));
            await component.findByLabelText('To:').then(el => fireEvent.change(el, { target: { value: '2023-12-31' } }));
            await component.findByText('Go').then(el => fireEvent.click(el));
        });

        expect(component.getByText('BR8')).toBeInTheDocument();
    });

    it('should show an error message when API call fails', async () => {
        global.fetch = jest.fn(() =>
            Promise.reject(new Error('Some error message'))
        );

        let component;

        await act(async () => {
            component = render(<GroupSales />);
            await component.findByLabelText('From:').then(el => fireEvent.change(el, { target: { value: '2023-01-01' } }));
            await component.findByLabelText('To:').then(el => fireEvent.change(el, { target: { value: '2023-12-31' } }));
            await component.findByText('Go').then(el => fireEvent.click(el));
        });

        expect(component.getByText("Some Error Occured in the backend, Please try again later")).toBeInTheDocument();
    });
});

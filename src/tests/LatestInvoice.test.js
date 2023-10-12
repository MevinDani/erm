import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import LatestInvoice from '../components/LatestInvoice';


describe("Latest Invoice", () => {

    it('loads and displays invoice data', async () => {

        const mockData = [
            {
                "INVNO": 91448341,
                "INV_DATE": "2023-10-12T00:00:00",
                "CUSTOMER": "IQRA AUTO SPARE PARTS#",
                "LPO NO": "",
                "SO NO": "",
                "DO NO": "",
                "SALES MAN": "RAFFIK",
                "AMOUNT": 31.5,
                "CASHCRED": "C",
                "cust_acc": "19150014",
                "VATAMT": 1.5,
                "REMARKS": "",
                "USER": "RAFFIK",
                "ENTERED_ON": "2023-10-12  13:23:37  ",
                "ACTION": "ENTER BY RAFFIK AT 10 / 12 / 2023",
                "DELIVERY STATUS": "",
                "CONTACT_NO": "0526591498",
                "deptno": "SH14    "
            },
            {
                "INVNO": 91448340,
                "INV_DATE": "2023-10-12T00:00:00",
                "CUSTOMER": "GEAR STAR GARAGE#",
                "LPO NO": "",
                "SO NO": "",
                "DO NO": "",
                "SALES MAN": "RANEESH",
                "AMOUNT": 52.5,
                "CASHCRED": "C",
                "cust_acc": "19150014",
                "VATAMT": 2.5,
                "REMARKS": "",
                "USER": "RANEESH",
                "ENTERED_ON": "2023-10-12  12:58:55  ",
                "ACTION": "ENTER BY RANEESH AT 10 / 12 / 2023",
                "DELIVERY STATUS": "",
                "CONTACT_NO": "050",
                "deptno": "SH14    "
            }
        ]

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData)
            })
        )

        const { getByText } = render(<LatestInvoice />);
        expect(global.fetch).toHaveBeenCalledWith(`https://api-eproc.premierauto.ae/api/InvoiceSearch`)
        await waitFor(() => expect(getByText('INVNO')).toBeInTheDocument());

    })

    it('loads and displays error', async () => {

        global.fetch = jest.fn(() =>
            Promise.reject(new Error('Some Error'))
        )

        const { getByText } = render(<LatestInvoice />);
        await waitFor(() => expect(getByText("Some Error Occured in the backend, Please try again later")).toBeInTheDocument());

    })

    it('to check if hidden rows are not present in mobile view', async () => {
        global.innerwidth = 500
        const mockData = [
            {
                "INVNO": 91448341,
                "INV_DATE": "2023-10-12T00:00:00",
                "CUSTOMER": "IQRA AUTO SPARE PARTS#",
                "LPO NO": "",
                "SO NO": "",
                "DO NO": "",
                "SALES MAN": "RAFFIK",
                "AMOUNT": 31.5,
                "CASHCRED": "C",
                "cust_acc": "19150014",
                "VATAMT": 1.5,
                "REMARKS": "",
                "USER": "RAFFIK",
                "ENTERED_ON": "2023-10-12  13:23:37  ",
                "ACTION": "ENTER BY RAFFIK AT 10 / 12 / 2023",
                "DELIVERY STATUS": "",
                "CONTACT_NO": "0526591498",
                "deptno": "SH14    "
            },
            {
                "INVNO": 91448340,
                "INV_DATE": "2023-10-12T00:00:00",
                "CUSTOMER": "GEAR STAR GARAGE#",
                "LPO NO": "",
                "SO NO": "",
                "DO NO": "",
                "SALES MAN": "RANEESH",
                "AMOUNT": 52.5,
                "CASHCRED": "C",
                "cust_acc": "19150014",
                "VATAMT": 2.5,
                "REMARKS": "",
                "USER": "RANEESH",
                "ENTERED_ON": "2023-10-12  12:58:55  ",
                "ACTION": "ENTER BY RANEESH AT 10 / 12 / 2023",
                "DELIVERY STATUS": "",
                "CONTACT_NO": "050",
                "deptno": "SH14    "
            }
        ]

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        );


        const { getByText, queryAllByText } = render(<LatestInvoice />);
        expect(global.fetch).toHaveBeenCalledWith(`https://api-eproc.premierauto.ae/api/InvoiceSearch`)
        const hiddenHeaders = queryAllByText(/hidden/i);
        expect(hiddenHeaders.length).toBe(0);
    })

    it('dropdown item is visible after row click', async () => {
        global.innerWidth = 500;
        const mockData = [
            {
                "INVNO": 91448341,
                "INV_DATE": "2023-10-12T00:00:00",
                "CUSTOMER": "IQRA AUTO SPARE PARTS#",
                "LPO NO": "",
                "SO NO": "",
                "DO NO": "",
                "SALES MAN": "RAFFIK",
                "AMOUNT": 31.5,
                "CASHCRED": "C",
                "cust_acc": "19150014",
                "VATAMT": 1.5,
                "REMARKS": "",
                "USER": "RAFFIK",
                "ENTERED_ON": "2023-10-12  13:23:37  ",
                "ACTION": "ENTER BY RAFFIK AT 10 / 12 / 2023",
                "DELIVERY STATUS": "",
                "CONTACT_NO": "0526591498",
                "deptno": "SH14    "
            },
            {
                "INVNO": 91448340,
                "INV_DATE": "2023-10-12T00:00:00",
                "CUSTOMER": "GEAR STAR GARAGE#",
                "LPO NO": "",
                "SO NO": "",
                "DO NO": "",
                "SALES MAN": "RANEESH",
                "AMOUNT": 52.5,
                "CASHCRED": "C",
                "cust_acc": "19150014",
                "VATAMT": 2.5,
                "REMARKS": "",
                "USER": "RANEESH",
                "ENTERED_ON": "2023-10-12  12:58:55  ",
                "ACTION": "ENTER BY RANEESH AT 10 / 12 / 2023",
                "DELIVERY STATUS": "",
                "CONTACT_NO": "050",
                "deptno": "SH14    "
            }
        ]

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        );


        const { getAllByTestId, getByText, queryByText, queryAllByText, getByTestId } = render(<LatestInvoice />);
        expect(global.fetch).toHaveBeenCalledWith(`https://api-eproc.premierauto.ae/api/InvoiceSearch`)

        // Wait for the fetch to resolve
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0));
        });

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


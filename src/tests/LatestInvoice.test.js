import React from 'react';
import { render, act } from '@testing-library/react';
import LatestInvoice from '../components/LatestInvoice';

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

describe("Latest Invoice", () => {

    it('loads and displays invoice data', async () => {

        const { getByText } = render(<LatestInvoice />);
        await expect(getByText('INVNO')).toBeInTheDocument();

    })
})


import React, { useEffect, useState } from 'react'


const LatestInvoice = () => {

    const [displayData, setDisplayData] = useState([])

    const getlatestInvoice = async () => {
        const result = await fetch(`https://api-eproc.premierauto.ae/api/InvoiceSearch`)
        const data = await result.json()
        data && setDisplayData(data)
    }

    useEffect(() => {
        getlatestInvoice()
    }, [])


    return (
        <div className='grpContainer'>
            <span><strong>Latest 500 Invoice List</strong></span>
            {/* table */}

            <div div className='tableCont' >
                <table border="1">
                    <thead>
                        <tr>
                            <th>INVNO</th>
                            <th>deptno</th>
                            <th>INV_DATE</th>
                            <th>cust_acc</th>
                            <th>CUSTOMER</th>
                            <th>USER</th>
                            <th>SALES MAN</th>
                            <th>ENTERED_ON</th>
                            <th>ACTION</th>
                            <th>CONTACT_NO</th>
                            <th>VATAMT</th>
                            <th>AMOUNT</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            displayData && displayData.map((g, i) => (
                                <tr key={i}>
                                    <td>{g.INVNO || 'Unknown'}</td>
                                    <td>{g["deptno"]}</td>
                                    <td>{g["INV_DATE"]}</td>
                                    <td>{g["cust_acc"]}</td>
                                    <td>{g["CUSTOMER"]}</td>
                                    <td>{g["USER"]}</td>
                                    <td>{g["SALES MAN"]}</td>
                                    <td>{g["ENTERED_ON"]}</td>
                                    <td>{g["ACTION"]}</td>
                                    <td>{g["CONTACT_NO"]}</td>
                                    <td>{g["VATAMT"]}</td>
                                    <td>{g["AMOUNT"]}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div >
        </div >
    )

}

export default LatestInvoice
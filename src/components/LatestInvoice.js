import React, { useEffect, useState } from 'react'
import './LatestInvoice.css'


const LatestInvoice = () => {

    const [displayData, setDisplayData] = useState([])
    const [expandAll, setExpandAll] = useState(false);


    const getlatestInvoice = async () => {
        const result = await fetch(`https://api-eproc.premierauto.ae/api/InvoiceSearch`)
        const data = await result.json()
        data && setDisplayData(data.slice(0, 20))
    }

    const handleRowClick = () => {
        setExpandAll(prevState => !prevState);
    };

    useEffect(() => {
        getlatestInvoice()
    }, [])


    return (
        <div className='LtstContainer'>
            <span><strong>Latest 500 Invoice List</strong></span>
            {/* table */}

            <div div className='LtstTableCont' >
                <table border="1">
                    <thead>
                        <tr onClick={handleRowClick}>
                            <th>INVNO</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>deptno</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>INV_DATE</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>cust_acc</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>CUSTOMER</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>USER</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>SALES MAN</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>ENTERED_ON</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>ACTION</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>CONTACT_NO</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>VATAMT</th>
                            <th>AMOUNT</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            displayData && displayData.map((g, i) => (
                                <React.Fragment key={i}>
                                    <tr key={i}>
                                        <td>{g.INVNO || 'Unknown'}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["deptno"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["INV_DATE"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["cust_acc"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["CUSTOMER"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["USER"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["SALES MAN"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["ENTERED_ON"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["ACTION"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["CONTACT_NO"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["VATAMT"]}</td>
                                        <td>{g["AMOUNT"]}</td>
                                    </tr>
                                </React.Fragment>
                            ))
                        }
                    </tbody>
                </table>

            </div >
        </div >
    )

}

export default LatestInvoice
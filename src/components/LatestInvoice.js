import React, { useEffect, useState } from 'react'
import './LatestInvoice.css'


const LatestInvoice = () => {

    const [displayData, setDisplayData] = useState([])
    const [expandAll, setExpandAll] = useState(false);
    const [expandedRows, setExpandedRows] = useState([]);


    const getlatestInvoice = async () => {
        const result = await fetch(`https://api-eproc.premierauto.ae/api/InvoiceSearch`)
        const data = await result.json()
        data && setDisplayData(data.slice(0, 100))
    }

    // const handleRowClick = () => {
    //     setExpandAll(prevState => !prevState);
    // };

    const handleRowClick = (index) => {
        setExpandedRows(prevState => {
            if (prevState.includes(index)) {
                return prevState.filter(item => item !== index);
            } else {
                return [...prevState, index];
            }
        });
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
                    {/*  */}
                    {/*  */}
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
                                    <tr onClick={window.innerWidth <= 768 ? () => handleRowClick(i) : null}>
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
                                    {expandedRows.includes(i) && (
                                        <>
                                            <tr>
                                                <th className='expandable'>deptno</th>
                                                <td className='expandable'>{g["deptno"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>INV_DATE</th>
                                                <td className='expandable'>{g["INV_DATE"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>cust_acc</th>
                                                <td className='expandable'>{g["cust_acc"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>CUSTOMER</th>
                                                <td className='expandable'>{g["CUSTOMER"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>USER</th>
                                                <td className='expandable'>{g["USER"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>SALES MAN</th>
                                                <td className='expandable'>{g["SALES MAN"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>ENTERED_ON</th>
                                                <td className='expandable'>{g["ENTERED_ON"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>ACTION</th>
                                                <td className='expandable'>{g["ACTION"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>CONTACT_NO</th>
                                                <td className='expandable'>{g["CONTACT_NO"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>VATAMT</th>
                                                <td className='expandable'>{g["VATAMT"]}</td>
                                            </tr>
                                        </>

                                    )}
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
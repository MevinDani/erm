import React, { useEffect, useState } from 'react'
import './LatestInvoice.css'


const LatestInvoice = () => {

    const [displayData, setDisplayData] = useState([])
    const [expandAll, setExpandAll] = useState(false);
    const [expandedRows, setExpandedRows] = useState([]);
    const [hideonIpad, setHideonIpad] = useState(false)
    const [hideonMob, setHideonMob] = useState(false)


    const getlatestInvoice = async () => {
        try {
            const result = await fetch(`https://api-eproc.premierauto.ae/api/InvoiceSearch`)
            const data = await result.json()
            data && setDisplayData(data.slice(0, 100))
        } catch (error) {
            console.log(error)
            alert(error)
        }
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

    useEffect(() => {
        if (window.innerWidth <= 1124 || window.innerWidth <= 768) {
            setHideonIpad(true)
        }
        if (window.innerWidth <= 768) {
            setHideonMob(true)
        }
    }, [hideonIpad, hideonMob])


    return (
        <div className='LtstContainer'>
            <span><strong>Latest 500 Invoice List</strong></span>
            {/* table */}

            <div div className='LtstTableCont' >
                <table border="1">
                    {/*  */}
                    {/*  */}
                    <thead>
                        <tr>
                            <th>INVNO</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>deptno</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>INV_DATE</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>cust_acc</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>CUSTOMER</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>USER</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>SALES MAN</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>ENTERED_ON</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>ACTION</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>CONTACT_NO</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>VATAMT</th>
                            <th>AMOUNT</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            displayData && displayData.map((g, i) => (
                                <React.Fragment key={i}>
                                    <tr onClick={window.innerWidth <= 1124 ? () => handleRowClick(i) : null}>
                                        <td className='LtstplusTd'>{g.INVNO || 'Unknown'}<i class="fa-solid fa-sort-down"></i></td>
                                        <td className={hideonMob ? 'hidden' : 'expandable'}>{g["deptno"]}</td>
                                        <td className={hideonMob ? 'hidden' : 'expandable'}>{g["INV_DATE"]}</td>
                                        <td className={hideonMob ? 'hidden' : 'expandable'}>{g["cust_acc"]}</td>
                                        <td className={hideonIpad ? 'hidden' : 'expandable'}>{g["CUSTOMER"]}</td>
                                        <td className={hideonIpad ? 'hidden' : 'expandable'}>{g["USER"]}</td>
                                        <td className={hideonIpad ? 'hidden' : 'expandable'}>{g["SALES MAN"]}</td>
                                        <td className={hideonIpad ? 'hidden' : 'expandable'}>{g["ENTERED_ON"]}</td>
                                        <td className={hideonIpad ? 'hidden' : 'expandable'}>{g["ACTION"]}</td>
                                        <td className={hideonMob ? 'hidden' : 'expandable'}>{g["CONTACT_NO"]}</td>
                                        <td className={hideonMob ? 'hidden' : 'expandable'}>{g["VATAMT"]}</td>
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
import React, { useEffect, useState } from 'react'
import './DOInvoiced.css'


const DOInvoiced = () => {
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [allData, setAllData] = useState([])
    const [displayData, setDisplayData] = useState([])
    const [expandAll, setExpandAll] = useState(false);
    const [expandedRows, setExpandedRows] = useState([]);


    const handleGrpSearch = (e) => {
        e.preventDefault()
        if (!fromDate || !toDate) {
            alert("select a start and end Date")
        } else {
            searchGrp()
        }
    }

    const searchGrp = async () => {
        const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DOINVOICED?dateStart=${fromDate}&dateEnd=${toDate}`)
        const data = await result.json()
        data && setAllData(data) && setDisplayData(data)
    }

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
        if (allData) {
            setDisplayData(allData)
        }
    }, [allData])

    // const uniqueGroups = [...new Set(allData.map(item => item.GROUP))];
    // const uniqueDeptNo = [...new Set(allData.map(item => item.DEPTNO))];
    // const uniqueSalesMan = [...new Set(allData.map(item => item.SALESMAN))];
    // const uniqueCustomer = [...new Set(allData.map(item => item.CUSTOMER))]


    return (
        <div className='DIContainer'>
            {/* date select */}
            <div className='DIDateCont'>
                <span><strong>Delivery Order Invoiced</strong></span>
                <div className='DIDateInp'>
                    <div className='DIInp'>
                        <label htmlFor="fromDate">From:</label>
                        <input onChange={(e) => setFromDate(e.target.value)} type="date" id='fromDate' />
                    </div>
                    <div className='DIInp'>
                        <label htmlFor="toDate">To:</label>
                        <input onChange={(e) => setToDate(e.target.value)} type="date" id='toDate' />
                    </div>
                    <button onClick={handleGrpSearch} className='grpButton'>Go</button>
                </div>
            </div>
            {/* table */}

            <div div className='DItableCont' >
                <table border="1">
                    <thead>
                        <tr onClick={handleRowClick}>
                            <th>DEPTNO</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>DONO</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>DATE</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>CUSTOMER</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>AMOUNT</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>VAT</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>AMOUNT_EXCLVAT</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>INV NO</th>
                            <th>SALES MAN</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            displayData && displayData.map((g, i) => (
                                <React.Fragment key={i}>
                                    <tr onClick={window.innerWidth <= 768 ? () => handleRowClick(i) : null} key={i}>
                                        <td>{g.DEPTNO || 'Unknown'}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["DONO"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["DATE"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g.CUSTOMER}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["AMOUNT"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["VAT"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["AMOUNT_EXCLVAT"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["INV NO"]}</td>
                                        <td>{g["SALESMAN"]}</td>
                                    </tr>
                                    {expandedRows.includes(i) && (
                                        <>
                                            <tr>
                                                <th className='expandable'>DONO</th>
                                                <td className='expandable'>{g["DONO"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>DATE</th>
                                                <td className='expandable'>{g["DATE"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>CUSTOMER</th>
                                                <td className='expandable'>{g["CUSTOMER"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>AMOUNT</th>
                                                <td className='expandable'>{g["AMOUNT"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>VAT</th>
                                                <td className='expandable'>{g["VAT"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>AMOUNT_EXCLVAT</th>
                                                <td className='expandable'>{g["AMOUNT_EXCLVAT"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>ENTERED_ON</th>
                                                <td className='expandable'>{g["ENTERED_ON"]}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>INV NO</th>
                                                <td className='expandable'>{g["INV NO"]}</td>
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

export default DOInvoiced
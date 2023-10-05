import React, { useEffect, useState } from 'react'
import './DeliveryPendingItems.css'


const DeliveryPendItems = () => {
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [allData, setAllData] = useState([])
    const [displayData, setDisplayData] = useState([])
    const [expandAll, setExpandAll] = useState(false);


    const handleGrpSearch = (e) => {
        e.preventDefault()
        if (!fromDate && !toDate) {
            alert("select a start and end Date")
        } else {
            searchGrp()
        }
    }

    const searchGrp = async () => {
        const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DOreport/DOPending/Item?dateStart=${fromDate}&dateEnd=${toDate}`)
        const data = await result.json()
        data && setAllData(data) && setDisplayData(data)
    }

    const handleRowClick = () => {
        setExpandAll(prevState => !prevState);
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
        <div className='DPIContainer'>
            {/* date select */}
            <div className='DPIDateCont'>
                <span><strong>Delivery Pending Items</strong></span>
                <div className='DPIDateInp'>
                    <div className='DPIInp'>
                        <label htmlFor="fromDate">From:</label>
                        <input onChange={(e) => setFromDate(e.target.value)} type="date" id='fromDate' />
                    </div>
                    <div className='DPIInp'>
                        <label htmlFor="toDate">To:</label>
                        <input onChange={(e) => setToDate(e.target.value)} type="date" id='toDate' />
                    </div>
                    <button onClick={handleGrpSearch} className='grpButton'>Search</button>
                </div>
            </div>
            {/* table */}

            <div div className='DPItableCont' >
                <table border="1">
                    <thead>
                        <tr onClick={handleRowClick}>
                            <th>DEPTNO</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>DATE</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>CODE</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>DONO</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>DESCRIPTION</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>GROUP</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>SUBGROUP</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>SCATEG</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>SALES MAN</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>UNIT PRICE</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            displayData && displayData.map((g, i) => (
                                <React.Fragment key={i}>
                                    <tr key={i}>
                                        <td>{g.DEPTNO || 'Unknown'}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["DATE"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g.CODE}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["DONO"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["DESCRIPTION"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["GROUP"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["SUBGROUP"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["SCATEG"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["SALES MAN"]}</td>
                                        <td className={expandAll ? 'expandable' : 'hidden'}>{g["UNIT PRICE"]}</td>
                                        <td>{g["TOTAL"]}</td>
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

export default DeliveryPendItems
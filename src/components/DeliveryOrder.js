import React, { useEffect, useState } from 'react'
import './DeliveryOrder.css'


const DeliveryOrder = () => {

    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [allData, setAllData] = useState([])
    const [groupSums, setGroupSums] = useState([]);
    const [displayData, setDisplayData] = useState([])
    const [salesMan, setSalesMan] = useState('all')
    const [deptData, setDeptData] = useState('all')
    const [expandAll, setExpandAll] = useState(false);
    const [expandedRows, setExpandedRows] = useState([]);
    const [warningMessage, setWarningMsg] = useState("Enter Start Date and End Date")


    const handleGrpSearch = (e) => {
        e.preventDefault()
        if (!fromDate || !toDate) {
            alert("select a start and end Date")
        } else {
            searchGrp()
        }
    }

    const searchGrp = async () => {
        setWarningMsg("Resource Loading, Please Wait...")
        const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport?dateStart=${fromDate}&dateEnd=${toDate}`)
        const data = await result.json()
        if (data) {
            setAllData(data);
            setDisplayData(data);
        }
        else if (!data || data.length === 0) {
            setDisplayData([]); // Set displayData as an empty array if there's no data
        }
    }


    useEffect(() => {
        if (allData) {
            setDisplayData(allData)
        }
    }, [allData])

    const handleRowClick = (index) => {
        setExpandedRows(prevState => {
            if (prevState.includes(index)) {
                return prevState.filter(item => item !== index);
            } else {
                return [...prevState, index];
            }
        });
    };


    return (
        <div className='DelOContainer'>
            {/* date select */}
            <div className='DelODateCont'>
                <span><strong>Delivery Order Report</strong></span>
                <div className='DelODateInp'>
                    <div className='DelOInp'>
                        <label htmlFor="fromDate">From:</label>
                        <input onChange={(e) => setFromDate(e.target.value)} type="date" id='fromDate' />
                    </div>
                    <div className='DelOInp'>
                        <label htmlFor="toDate">To:</label>
                        <input onChange={(e) => setToDate(e.target.value)} type="date" id='toDate' />
                    </div>
                    <button onClick={handleGrpSearch} className='grpButton'>Go</button>
                </div>
            </div>

            {/* filter */}

            {/* table */}

            {displayData.length !== 0 ?
                (<div div className='DlOtableCont' >
                    <table border="1">
                        <thead>
                            <tr onClick={handleRowClick}>
                                <th>DEPTNO</th>
                                <th className={expandAll ? 'expandable' : 'hidden'}>DATE</th>
                                <th className={expandAll ? 'expandable' : 'hidden'}>CUSTOMER</th>
                                <th className={expandAll ? 'expandable' : 'hidden'}>AMOUNT</th>
                                <th className={expandAll ? 'expandable' : 'hidden'}>AMOUNT EXCLVAT</th>
                                <th className={expandAll ? 'expandable' : 'hidden'}>DONO</th>
                                <th className={expandAll ? 'expandable' : 'hidden'}>INV NO</th>
                                <th className={expandAll ? 'expandable' : 'hidden'}>SALESMAN</th>
                                <th>VAT</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                displayData && displayData.map((g, i) => (
                                    <React.Fragment key={i}>
                                        <tr onClick={window.innerWidth <= 768 ? () => handleRowClick(i) : null} key={i}>
                                            <td className='plusTd'>{g.DEPTNO || 'Unknown'}<i class="fa-solid fa-sort-down"></i></td>
                                            <td className={expandAll ? 'expandable' : 'hidden'}>{g["DATE"]}</td>
                                            <td className={expandAll ? 'expandable' : 'hidden'}>{g["CUSTOMER"]}</td>
                                            <td className={expandAll ? 'expandable' : 'hidden'}>{g["AMOUNT"]}</td>
                                            <td className={expandAll ? 'expandable' : 'hidden'}>{g["AMOUNT_EXCLVAT"]}</td>
                                            <td className={expandAll ? 'expandable' : 'hidden'}>{g["DONO"]}</td>
                                            <td className={expandAll ? 'expandable' : 'hidden'}>{g["INV NO"]}</td>
                                            <td className={expandAll ? 'expandable' : 'hidden'}>{g["SALESMAN"]}</td>
                                            <td>{g["VAT"]}</td>
                                        </tr>
                                        {expandedRows.includes(i) && (
                                            <>
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
                                                    <th className='expandable'>AMOUNT_EXCLVAT</th>
                                                    <td className='expandable'>{g["AMOUNT_EXCLVAT"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>DONO</th>
                                                    <td className='expandable'>{g["VAT"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>INV NO</th>
                                                    <td className='expandable'>{g["INV NO"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>SALESMAN</th>
                                                    <td className='expandable'>{g["SALESMAN"]}</td>
                                                </tr>
                                            </>

                                        )}
                                    </React.Fragment>
                                ))
                            }
                        </tbody>
                    </table>

                </div >)
                : (<div><h3>{warningMessage}</h3></div>)
            }
        </div >
    )
}

export default DeliveryOrder
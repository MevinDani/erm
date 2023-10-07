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
    const [hideonIpad, setHideonIpad] = useState(false)
    const [hideonMob, setHideonMob] = useState(false)



    const handleGrpSearch = (e) => {
        e.preventDefault()
        if (!fromDate || !toDate) {
            alert("select a start and end Date")
        } else {
            setWarningMsg("Resource Loading, Please Wait...")
            searchGrp()
        }
    }

    const searchGrp = async () => {
        try {
            const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport?dateStart=${fromDate}&dateEnd=${toDate}`)
            const data = await result.json()
            if (data) {
                setAllData(data);
                setDisplayData(data);
            }
            else if (!data || data.length === 0) {
                setDisplayData([]); // Set displayData as an empty array if there's no data
            }
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }


    useEffect(() => {
        if (allData) {
            setDisplayData(allData)
        }
    }, [allData])

    useEffect(() => {
        if (window.innerWidth <= 1124 || window.innerWidth <= 768) {
            setHideonIpad(true)
        }
        if (window.innerWidth <= 768) {
            setHideonMob(true)
        }
    }, [hideonIpad, hideonMob])

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
                                <th id='numD' className={hideonMob ? 'hidden' : 'expandable'}>DATE</th>
                                <th id='numD' className={hideonMob ? 'hidden' : 'expandable'}>CUSTOMER</th>
                                <th id='numD' className={hideonMob ? 'hidden' : 'expandable'}>AMOUNT</th>
                                <th id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>AMOUNT EXCLVAT</th>
                                <th id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>DONO</th>
                                <th id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>INV NO</th>
                                <th id='numD' className={hideonMob ? 'hidden' : 'expandable'}>SALESMAN</th>
                                <th>VAT</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                displayData && displayData.map((g, i) => (
                                    <React.Fragment key={i}>
                                        <tr onClick={window.innerWidth <= 1124 ? () => handleRowClick(i) : null} key={i}>
                                            <td id='numD' className='DloplusTd'>{g.DEPTNO || 'Unknown'}<i class="fa-solid fa-sort-down"></i></td>
                                            <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["DATE"]}</td>
                                            <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["CUSTOMER"]}</td>
                                            <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["AMOUNT"]}</td>
                                            <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["AMOUNT_EXCLVAT"]}</td>
                                            <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["DONO"]}</td>
                                            <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["INV NO"]}</td>
                                            <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["SALESMAN"]}</td>
                                            <td id='numD'>{g["VAT"]}</td>
                                        </tr>
                                        {expandedRows.includes(i) && (
                                            <>
                                                <tr>
                                                    <th className='expandable'>DATE</th>
                                                    <td id='numD' className='expandable'>{g["DATE"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>CUSTOMER</th>
                                                    <td id='numD' className='expandable'>{g["CUSTOMER"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>AMOUNT</th>
                                                    <td id='numD' className='expandable'>{g["AMOUNT"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>AMOUNT_EXCLVAT</th>
                                                    <td id='numD' className='expandable'>{g["AMOUNT_EXCLVAT"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>DONO</th>
                                                    <td id='numD' className='expandable'>{g["VAT"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>INV NO</th>
                                                    <td id='numD' className='expandable'>{g["INV NO"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>SALESMAN</th>
                                                    <td id='numD' className='expandable'>{g["SALESMAN"]}</td>
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
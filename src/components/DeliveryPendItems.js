import React, { useEffect, useState } from 'react'
import './DeliveryPendingItems.css'


const DeliveryPendItems = () => {
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [allData, setAllData] = useState([])
    const [displayData, setDisplayData] = useState([])
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
            const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DOreport/DOPending/Item?dateStart=${fromDate}&dateEnd=${toDate}`)
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

    useEffect(() => {
        if (window.innerWidth <= 1124 || window.innerWidth <= 768) {
            setHideonIpad(true)
        }
        if (window.innerWidth <= 768) {
            setHideonMob(true)
        }
    }, [hideonIpad, hideonMob])

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
                    <button onClick={handleGrpSearch} className='grpButton'>Go</button>
                </div>
            </div>
            {/* table */}

            {displayData.length !== 0 ? (<div div className='DPItableCont' >
                <table border="1">
                    <thead>
                        <tr onClick={handleRowClick}>
                            <th>DEPTNO</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>DATE</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>CODE</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>DONO</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>DESCRIPTION</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>GROUP</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>SUBGROUP</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>SCATEG</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>SALES MAN</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>UNIT PRICE</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            displayData && displayData.map((g, i) => (
                                <React.Fragment key={i}>
                                    <tr onClick={window.innerWidth <= 1124 ? () => handleRowClick(i) : null} key={i}>
                                        <td className='DPIplusTd'>{g.DEPTNO || 'Unknown'}<i class="fa-solid fa-sort-down"></i></td>
                                        <td className={hideonMob ? 'hidden' : 'expandable'}>{g["DATE"]}</td>
                                        <td className={hideonMob ? 'hidden' : 'expandable'}>{g.CODE}</td>
                                        <td className={hideonMob ? 'hidden' : 'expandable'}>{g["DONO"]}</td>
                                        <td className={hideonIpad ? 'hidden' : 'expandable'}>{g["DESCRIPTION"]}</td>
                                        <td className={hideonIpad ? 'hidden' : 'expandable'}>{g["GROUP"]}</td>
                                        <td className={hideonIpad ? 'hidden' : 'expandable'}>{g["SUBGROUP"]}</td>
                                        <td className={hideonMob ? 'hidden' : 'expandable'}>{g["SCATEG"]}</td>
                                        <td className={hideonMob ? 'hidden' : 'expandable'}>{g["SALES MAN"]}</td>
                                        <td className={hideonMob ? 'hidden' : 'expandable'}>{g["UNIT PRICE"]}</td>
                                        <td>{g["TOTAL"]}</td>
                                    </tr>
                                    {
                                        expandedRows.includes(i) && (
                                            <>
                                                <tr>
                                                    <th className='expandable'>DATE</th>
                                                    <td className='expandable'>{g["DATE"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>CODE</th>
                                                    <td className='expandable'>{g["CODE"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>DONO</th>
                                                    <td className='expandable'>{g["DONO"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>DESCRIPTION</th>
                                                    <td className='expandable'>{g["DESCRIPTION"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>GROUP</th>
                                                    <td className='expandable'>{g["GROUP"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>SUBGROUP</th>
                                                    <td className='expandable'>{g["SUBGROUP"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>SCATEG</th>
                                                    <td className='expandable'>{g["SCATEG"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>SALES MAN</th>
                                                    <td className='expandable'>{g["SALES MAN"]}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>UNIT PRICE</th>
                                                    <td className='expandable'>{g["UNIT PRICE"]}</td>
                                                </tr>
                                            </>

                                        )
                                    }
                                </React.Fragment>
                            ))
                        }
                    </tbody>
                </table>

            </div >) : (<div><h3>{warningMessage}</h3></div>)
            }
        </div >
    )
}

export default DeliveryPendItems
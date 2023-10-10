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
            setWarningMsg("Some Error Occured in the backend, Please try again later")
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
                            <th className={hideonMob ? 'hidden' : 'expandable'}>DONO</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>DATE</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>CODE</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>DESCRIPTION</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>DO QTY</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>INV QTY</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>ADJ_QTY</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>PEND QTY</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>UNIT PRICE</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>SALES MAN</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>GROUP</th>
                            {/* <th className={hideonIpad ? 'hidden' : 'expandable'}>SUBGROUP</th> */}
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>CATEG</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>SCATEG</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            displayData && displayData.map((g, i) => (
                                <React.Fragment key={i}>
                                    <tr onClick={window.innerWidth <= 1124 ? () => handleRowClick(i) : null} key={i}>
                                        <td id='numD' className='DPIplusTd'>{g.DEPTNO || 'Unknown'}<i class="fa-solid fa-sort-down"></i></td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["DONO"] ? g["DONO"] : "Nil"}</td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["DATE"] ? g["DATE"] : "Nil"}</td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["CODE"] ? g["CODE"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["DESCRIPTION"] ? g["DESCRIPTION"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["DO QTY"] ? g["DO QTY"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["INV QTY"] ? g["INV QTY"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["ADJ_QTY"] ? g["ADJ_QTY"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["PEND QTY"] ? g["PEND QTY"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["UNIT PRICE"] ? g["UNIT PRICE"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["SALES MAN"] ? g["SALES MAN"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["GROUP"] ? g["GROUP"] : "Nil"}</td>
                                        {/* <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["SUBGROUP"] ? g["SUBGROUP"] : "Nil"}</td> */}
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["CATEG"] ? g["CATEG"] : "Nil"}</td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["SCATEG"] ? g["SCATEG"] : "Nil"}</td>
                                        <td id='numD'>{g["TOTAL"]}</td>
                                    </tr>
                                    {
                                        expandedRows.includes(i) && (
                                            <>
                                                <tr>
                                                    <th className='expandable'>DONO</th>
                                                    <td id='numD' className='expandable'>{g["DONO"] ? g["DONO"] : "Nil"}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>DATE</th>
                                                    <td id='numD' className='expandable'>{g["DATE"] ? g["DATE"] : "Nil"}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>CODE</th>
                                                    <td id='numD' className='expandable'>{g["CODE"] ? g["CODE"] : "Nil"}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>DESCRIPTION</th>
                                                    <td id='numD' className='expandable'>{g["DESCRIPTION"] ? g["DESCRIPTION"] : "Nil"}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>DO QTY</th>
                                                    <td id='numD' className='expandable'>{g["DO QTY"] ? g["DO QTY"] : "Nil"}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>INV QTY</th>
                                                    <td id='numD' className='expandable'>{g["INV QTY"] ? g["INV QTY"] : "Nil"}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>ADJ_QTY</th>
                                                    <td id='numD' className='expandable'>{g["ADJ_QTY"] ? g["ADJ_QTY"] : "Nil"}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>PEND QTY</th>
                                                    <td id='numD' className='expandable'>{g["PEND QTY"] ? g["PEND QTY"] : "Nil"}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>UNIT PRICE</th>
                                                    <td id='numD' className='expandable'>{g["UNIT PRICE"] ? g["UNIT PRICE"] : "Nil"}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>SALES MAN</th>
                                                    <td id='numD' className='expandable'>{g["SALES MAN"] ? g["SALES MAN"] : "Nil"}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>GROUP</th>
                                                    <td id='numD' className='expandable'>{g["GROUP"] ? g["GROUP"] : "Nil"}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>SUBGROUP</th>
                                                    <td id='numD' className='expandable'>{g["SUBGROUP"] ? g["SUBGROUP"] : "Nil"}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>SCATEG</th>
                                                    <td id='numD' className='expandable'>{g["SCATEG"] ? g["SCATEG"] : "Nil"}</td>
                                                </tr>
                                                <tr>
                                                    <th className='expandable'>CATEG</th>
                                                    <td id='numD' className='expandable'>{g["CATEG"] ? g["CATEG"] : "Nil"}</td>
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
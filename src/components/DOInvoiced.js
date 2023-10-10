import React, { useEffect, useState } from 'react'
import './DOInvoiced.css'


const DOInvoiced = () => {
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
            const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport/DOINVOICED?dateStart=${fromDate}&dateEnd=${toDate}`)
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

            {displayData.length !== 0 ? (<div div className='DItableCont' >
                <table border="1">
                    <thead>
                        <tr onClick={handleRowClick}>
                            <th>DEPTNO</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>DONO</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>DATE</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>CUSTOMER</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>SALES MAN</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>INV NO</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>AMOUNT</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>VAT</th>
                            <th>AMOUNT_EXCLVAT</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            displayData && displayData.map((g, i) => (
                                <React.Fragment key={i}>
                                    <tr onClick={window.innerWidth <= 1124 ? () => handleRowClick(i) : null} key={i}>
                                        <td className='DIplusTd'>{g.DEPTNO || 'Unknown'}<i class="fa-solid fa-sort-down"></i></td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["DONO"] ? g["DONO"] : "Nil"}</td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["DATE"] ? g["DATE"] : "Nil"}</td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["CUSTOMER"] ? g["CUSTOMER"] : "Nil"}</td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["SALESMAN"] ? g["SALESMAN"] : "Nil"}</td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["INV NO"] ? g["INV NO"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["AMOUNT"] ? g["AMOUNT"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["VAT"] ? g["VAT"] : "Nil"}</td>
                                        <td id='numD'>{g["AMOUNT_EXCLVAT"]}</td>
                                    </tr>
                                    {expandedRows.includes(i) && (
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
                                                <th className='expandable'>CUSTOMER</th>
                                                <td id='numD' className='expandable'>{g["CUSTOMER"] ? g["CUSTOMER"] : "Nil"}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>AMOUNT</th>
                                                <td id='numD' className='expandable'>{g["AMOUNT"] ? g["AMOUNT"] : "Nil"}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>VAT</th>
                                                <td id='numD' className='expandable'>{g["VAT"] ? g["VAT"] : "Nil"}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>INV NO</th>
                                                <td id='numD' className='expandable'>{g["INV NO"] ? g["INV NO"] : "Nil"}</td>
                                            </tr>
                                        </>

                                    )}
                                </React.Fragment>
                            ))
                        }
                    </tbody>
                </table>

            </div >) : (<div><h3>{warningMessage}</h3></div>)}
        </div >
    )

}

export default DOInvoiced
import React, { useEffect, useState } from 'react'
import { FaSortDown } from "react-icons/fa";
import './LatestInvoice.css'


const LatestInvoice = () => {

    const [displayData, setDisplayData] = useState([])
    const [expandAll, setExpandAll] = useState(false);
    const [expandedRows, setExpandedRows] = useState([]);
    const [hideonIpad, setHideonIpad] = useState(false)
    const [hideonMob, setHideonMob] = useState(false)
    const [warningMessage, setWarningMsg] = useState("Resource Loading, Please Wait...")



    const getlatestInvoice = async () => {
        try {
            const result = await fetch(`https://api-eproc.premierauto.ae/api/InvoiceSearch`)
            const data = await result.json()
            data && setDisplayData(data)
        } catch (error) {
            console.log(error)
            alert(error)
            setWarningMsg("Some Error Occured in the backend, Please try again later")
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
        if (window.innerWidth <= 2000 || window.innerWidth <= 768) {
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

            {displayData.length !== 0 ? (<div div className='LtstTableCont'>
                <table border="1">
                    {/*  */}
                    {/*  */}
                    <thead>
                        <tr>
                            <th>INVNO</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>INV_DATE</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>CUSTOMER</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>LPO NO</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>SO NO</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>DO NO</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>deptno</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>SALES MAN</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>CASHCRED</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>cust_acc</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>VATAMT</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>REMARKS</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>USER</th>
                            <th className={hideonIpad ? 'hidden' : 'expandable'}>ENTERED_ON</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>ACTION</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>DELIVERY STATUS</th>
                            <th className={hideonMob ? 'hidden' : 'expandable'}>CONTACT_NO</th>
                            <th>AMOUNT</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            displayData && displayData.map((g, i) => (
                                <React.Fragment key={i}>
                                    <tr onClick={window.innerWidth <= 2000 ? () => handleRowClick(i) : null}>
                                        <td data-testid="dropdown-clicker" id='numD' className='LtstplusTd'>{g.INVNO || 'Unknown'}<FaSortDown /></td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>
                                            {g["INV_DATE"] ?
                                                new Date(g["INV_DATE"] + 'Z').toISOString().split('T')[0] :
                                                "Nil"
                                            }
                                        </td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["CUSTOMER"] ? g["CUSTOMER"] : "Nil"}</td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["LPO NO"] ? g["LPO NO"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["SO NO"] ? g["SO NO"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["DO NO"] ? g["DO NO"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["deptno"] ? g["deptno"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["SALES MAN"] ? g["SALES MAN"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["CASHCRED"] ? g["CASHCRED"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["cust_acc"] ? g["cust_acc"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["VATAMT"] ? g["VATAMT"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["REMARKS"] ? g["REMARKS"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["USER"] ? g["USER"] : "Nil"}</td>
                                        <td id='numD' className={hideonIpad ? 'hidden' : 'expandable'}>{g["ENTERED_ON"] ? g["ENTERED_ON"] : "Nil"}</td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["ACTION"] ? g["ACTION"] : "Nil"}</td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["DELIVERY STATUS"] ? g["DELIVERY STATUS"] : "Nil"}</td>
                                        <td id='numD' className={hideonMob ? 'hidden' : 'expandable'}>{g["CONTACT_NO"] ? g["CONTACT_NO"] : "Nil"}</td>
                                        <td id='numD'>{g["AMOUNT"]}</td>
                                    </tr>
                                    {expandedRows.includes(i) && (
                                        <>
                                            <tr data-testid={`expanded-row-${i}`}>
                                                <th className='expandable'>INV_DATE</th>
                                                <td id="numD" className='expandable'>{g["INV_DATE"] ? g["INV_DATE"] : "Nil"}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>CUSTOMER</th>
                                                <td id="numD" className='expandable'>{g["CUSTOMER"] ? g["CUSTOMER"] : "Nil"}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>LPO NO</th>
                                                <td id="numD" className='expandable'>{g["LPO NO"] ? g["LPO NO"] : "Nil"}</td>
                                            </tr>
                                            <tr >
                                                <th className='expandable'>SO NO</th>
                                                <td id="numD" className='expandable'>{g["SO NO"] ? g["SO NO"] : "Nil"}</td>
                                            </tr>
                                            <tr >
                                                <th className='expandable'>DO NO</th>
                                                <td id="numD" className='expandable'>{g["DO NO"] ? g["DO NO"] : "Nil"}</td>
                                            </tr>
                                            <tr >
                                                <th className='expandable'>deptno</th>
                                                <td id="numD" className='expandable'>{g["deptno"] ? g["deptno"] : "Nil"}</td>
                                            </tr>
                                            <tr >
                                                <th className='expandable'>SALES MAN</th>
                                                <td id="numD" className='expandable'>{g["SALES MAN"] ? g["SALES MAN"] : "Nil"}</td>
                                            </tr>
                                            <tr >
                                                <th className='expandable'>CASHCRED</th>
                                                <td id="numD" className='expandable'>{g["CASHCRED"] ? g["CASHCRED"] : "Nil"}</td>
                                            </tr>
                                            <tr >
                                                <th className='expandable'>cust_acc</th>
                                                <td id="numD" className='expandable'>{g["cust_acc"] ? g["cust_acc"] : "Nil"}</td>
                                            </tr>
                                            <tr >
                                                <th className='expandable'>VATAMT</th>
                                                <td id="numD" className='expandable'>{g["VATAMT"] ? g["VATAMT"] : "Nil"}</td>
                                            </tr>
                                            <tr >
                                                <th className='expandable'>REMARKS</th>
                                                <td id="numD" className='expandable'>{g["REMARKS"] ? g["REMARKS"] : "Nil"}</td>
                                            </tr>
                                            <tr >
                                                <th className='expandable'>USER</th>
                                                <td id="numD" className='expandable'>{g["USER"] ? g["USER"] : "Nil"}</td>
                                            </tr>
                                            <tr >
                                                <th className='expandable'>ENTERED_ON</th>
                                                <td id="numD" className='expandable'>{g["ENTERED_ON"] ? g["ENTERED_ON"] : "Nil"}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>ACTION</th>
                                                <td id="numD" className='expandable'>{g["ACTION"] ? g["ACTION"] : "Nil"}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>DELIVERY STATUS</th>
                                                <td id="numD" className='expandable'>{g["DELIVERY STATUS"] ? g["DELIVERY STATUS"] : "Nil"}</td>
                                            </tr>
                                            <tr>
                                                <th className='expandable'>CONTACT_NO</th>
                                                <td id="numD" className='expandable'>{g["CONTACT_NO"] ? g["CONTACT_NO"] : "Nil"}</td>
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

export default LatestInvoice
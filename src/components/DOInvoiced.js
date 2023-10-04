import React, { useEffect, useState } from 'react'


const DOInvoiced = () => {
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [allData, setAllData] = useState([])
    const [displayData, setDisplayData] = useState([])


    const handleGrpSearch = (e) => {
        e.preventDefault()
        if (!fromDate && !toDate) {
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
        <div className='grpContainer'>
            {/* date select */}
            <div className='grpDateCont'>
                <span><strong>Delivery Order Invoiced</strong></span>
                <div className='grpDateInp'>
                    <div className='grpInp'>
                        <label htmlFor="fromDate">From:</label>
                        <input onChange={(e) => setFromDate(e.target.value)} type="date" id='fromDate' />
                    </div>
                    <div className='grpInp'>
                        <label htmlFor="toDate">To:</label>
                        <input onChange={(e) => setToDate(e.target.value)} type="date" id='toDate' />
                    </div>
                    <button onClick={handleGrpSearch} className='grpButton'>Search</button>
                </div>
            </div>
            {/* table */}

            <div div className='tableCont' >
                <table border="1">
                    <thead>
                        <tr>
                            <th>DEPTNO</th>
                            <th>DONO</th>
                            <th>DATE</th>
                            <th>CUSTOMER</th>
                            <th>AMOUNT</th>
                            <th>VAT</th>
                            <th>AMOUNT_EXCLVAT</th>
                            <th>INV NO</th>
                            <th>SALES MAN</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            displayData && displayData.map((g, i) => (
                                <tr key={i}>
                                    <td>{g.DEPTNO || 'Unknown'}</td>
                                    <td>{g["DONO"]}</td>
                                    <td>{g["DATE"]}</td>
                                    <td>{g.CUSTOMER}</td>
                                    <td>{g["AMOUNT"]}</td>
                                    <td>{g["VAT"]}</td>
                                    <td>{g["AMOUNT_EXCLVAT"]}</td>
                                    <td>{g["INV NO"]}</td>
                                    <td>{g["SALESMAN"]}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div >
        </div >
    )

}

export default DOInvoiced
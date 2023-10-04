import React, { useEffect, useState } from 'react'


const DeliveryPendItems = () => {
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [allData, setAllData] = useState([])
    const [groupSums, setGroupSums] = useState([]);
    const [displayData, setDisplayData] = useState([])
    const [salesMan, setSalesMan] = useState('all')
    const [deptData, setDeptData] = useState('all')


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
        console.log(data)
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
                <span><strong>Delivery Pending Items</strong></span>
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
                            <th>DATE</th>
                            <th>CODE</th>
                            <th>DONO</th>
                            <th>DESCRIPTION</th>
                            <th>GROUP</th>
                            <th>SUBGROUP</th>
                            <th>SCATEG</th>
                            <th>SALES MAN</th>
                            <th>UNIT PRICE</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            displayData && displayData.map((g, i) => (
                                <tr key={i}>
                                    <td>{g.DEPTNO || 'Unknown'}</td>
                                    <td>{g["DATE"]}</td>
                                    <td>{g.CODE}</td>
                                    <td>{g["DONO"]}</td>
                                    <td>{g["DESCRIPTION"]}</td>
                                    <td>{g["GROUP"]}</td>
                                    <td>{g["SUBGROUP"]}</td>
                                    <td>{g["SCATEG"]}</td>
                                    <td>{g["SALES MAN"]}</td>
                                    <td>{g["UNIT PRICE"]}</td>
                                    <td>{g["TOTAL"]}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div >
        </div >
    )
}

export default DeliveryPendItems
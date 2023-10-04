import React, { useEffect, useState } from 'react'



const DeliveryOrder = () => {

    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [allData, setAllData] = useState([])
    const [groupSums, setGroupSums] = useState([]);
    const [displayData, setDisplayData] = useState([])
    const [salesMan, setSalesMan] = useState('all')
    const [deptData, setDeptData] = useState('all')


    const handleGrpSearch = (e) => {
        e.preventDefault()
        searchGrp()
    }

    const searchGrp = async () => {
        const result = await fetch(`https://api-eproc.premierauto.ae/api/DeliveryOrderReport?dateStart=${fromDate}&dateEnd=${toDate}`)
        const data = await result.json()
        data && setAllData(data) && setDisplayData(data)
    }

    console.log(salesMan, deptData)

    useEffect(() => {
        if (deptData === 'all' && salesMan === 'all') {
            setDisplayData(allData)
        } else {
            const filteredData = allData.filter(item => {
                const deptNoMatch = deptData === 'all' || item.DEPTNO == deptData;
                const salesmanMatch = salesMan === 'all' || item.SALESMAN == salesMan;
                return deptNoMatch && salesmanMatch;
            });
            setDisplayData(filteredData);
        }
    }, [salesMan, deptData])

    useEffect(() => {
        if (allData) {
            setDisplayData(allData)
        }
    }, [allData])

    const uniqueGroups = [...new Set(allData.map(item => item.GROUP))];
    const uniqueDeptNo = [...new Set(allData.map(item => item.DEPTNO))];
    const uniqueSalesMan = [...new Set(allData.map(item => item.SALESMAN))];
    const uniqueCustomer = [...new Set(allData.map(item => item.CUSTOMER))]


    return (
        <div className='grpContainer'>
            {/* date select */}
            <div className='grpDateCont'>
                <span><strong>Delivery Order Report</strong></span>
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

            {/* filter */}

            {/* <div className='filter'>
                <label className='labeStyle' htmlFor="brancSelect">Filter By Branch/DEPT NO: </label>
                <select className='selectStyle' onChange={(e) => setDeptData(e.target.value)} name="branch" id="brancSelect">
                    <option value="all" defaultChecked>ALL</option>
                    {uniqueDeptNo && uniqueDeptNo.map((i) => (
                        <>
                            <option value={i}>{i}</option>
                        </>
                    ))}
                </select>
                <label className='labeStyle' htmlFor="brancSelect">Filter By SalesMan: </label>
                <select className='selectStyle' onChange={(e) => setSalesMan(e.target.value)} name="branch" id="brancSelect">
                    <option value="all" defaultChecked>ALL</option>
                    {uniqueSalesMan && uniqueSalesMan.map((i) => (
                        <>
                            <option value={i}>{i}</option>
                        </>
                    ))}
                </select>
            </div> */}

            {/* table */}

            <div div className='tableCont' >
                <table border="1">
                    <thead>
                        <tr>
                            <th>DEPTNO</th>
                            <th>DATE</th>
                            <th>CUSTOMER</th>
                            <th>AMOUNT</th>
                            <th>AMOUNT EXCLVAT</th>
                            <th>DONO</th>
                            <th>INV NO</th>
                            <th>SALESMAN</th>
                            <th>VAT</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            displayData && displayData.map((g, i) => (
                                <tr key={i}>
                                    <td>{g.DEPTNO || 'Unknown'}</td>
                                    <td>{g["DATE"]}</td>
                                    <td>{g["CUSTOMER"]}</td>
                                    <td>{g["AMOUNT"]}</td>
                                    <td>{g["AMOUNT_EXCLVAT"]}</td>
                                    <td>{g["DONO"]}</td>
                                    <td>{g["INV NO"]}</td>
                                    <td>{g["SALESMAN"]}</td>
                                    <td>{g["VAT"]}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div >
        </div >
    )
}

export default DeliveryOrder
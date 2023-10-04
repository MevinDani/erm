import React, { useEffect, useState } from 'react'
import './GroupSales.css'

const GroupSales = () => {

    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [allData, setAllData] = useState([])
    const [groupSums, setGroupSums] = useState([]);
    const [displayData, setDisplayData] = useState([])

    const searchGrp = async () => {
        const result = await fetch(`https://api-eproc.premierauto.ae/api/SalesAnalysis/SalesGroup?dateStart=${fromDate}&dateEnd=${toDate}`)
        console.log(result)
        const data = await result.json()
        data && setAllData(data)
    }

    console.log(allData)

    const getDeptData = (targetDeptNo) => {
        if (targetDeptNo === 'all') {
            const sumsByGroup = allData.reduce((acc, item) => {
                const group = item.GROUP || "Unknown"; // If GROUP is null, use "Unknown"

                acc[group] = acc[group] || {
                    'NETCASH SALES': 0,
                    'NETCREDIT SALES': 0,
                    'NET SALERETURN': 0,
                    'VAT AMT': 0,
                    'NET SALES EXCLVAT': 0
                };

                acc[group]['NETCASH SALES'] += item['NETCASH SALES'];
                acc[group]['NETCREDIT SALES'] += item['NETCREDIT SALES'];
                acc[group]['NET SALERETURN'] += item['NET SALERETURN'];
                acc[group]['VAT AMT'] += item['VAT AMT'];
                acc[group]['NET SALES EXCLVAT'] += item['NET SALES EXCLVAT'];

                return acc;
            }, {});

            const sumsArray = Object.keys(sumsByGroup).map(group => ({ GROUP: group, ...sumsByGroup[group] }));

            setGroupSums(sumsArray);
            setDisplayData(sumsArray)

        } else {
            const filteredData = allData.filter(item => item.DEPTNO == targetDeptNo);
            setDisplayData(filteredData)
        }
    }

    useEffect(() => {
        if (allData) {
            const sumsByGroup = allData.reduce((acc, item) => {
                const group = item.GROUP || "Unknown"; // If GROUP is null, use "Unknown"

                acc[group] = acc[group] || {
                    'NETCASH SALES': 0,
                    'NETCREDIT SALES': 0,
                    'NET SALERETURN': 0,
                    'VAT AMT': 0,
                    'NET SALES EXCLVAT': 0
                };

                acc[group]['NETCASH SALES'] += item['NETCASH SALES'];
                acc[group]['NETCREDIT SALES'] += item['NETCREDIT SALES'];
                acc[group]['NET SALERETURN'] += item['NET SALERETURN'];
                acc[group]['VAT AMT'] += item['VAT AMT'];
                acc[group]['NET SALES EXCLVAT'] += item['NET SALES EXCLVAT'];

                return acc;
            }, {});

            const sumsArray = Object.keys(sumsByGroup).map(group => ({ GROUP: group, ...sumsByGroup[group] }));

            sumsArray && setGroupSums(sumsArray);
            sumsArray && setDisplayData(sumsArray)
        }

    }, [allData])

    const uniqueGroups = [...new Set(allData.map(item => item.GROUP))];
    const uniqueDeptNo = [...new Set(allData.map(item => item.DEPTNO))];

    const handleGrpSearch = (e) => {
        e.preventDefault()
        searchGrp()
    }

    return (
        <div className='grpContainer'>
            {/* date select */}
            <div className='grpDateCont'>
                <span><strong>Group Sales Data</strong></span>
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

            <div className='filter'>
                <label className='labeStyle' htmlFor="brancSelect">Filter By Branch: </label>
                <select className='selectStyle' onChange={(e) => getDeptData(e.target.value)} name="branch" id="brancSelect">
                    <option value="all" defaultChecked>ALL</option>
                    {uniqueDeptNo && uniqueDeptNo.map((i) => (
                        <>
                            <option value={i}>{i}</option>
                        </>
                    ))}
                </select>
            </div>

            {/* table */}

            <div div className='tableCont' >
                <table border="1">
                    <thead>
                        <tr>
                            <th>GROUP</th>
                            <th>NET SALE RETURN</th>
                            <th>NET SALES EXCLVAT</th>
                            <th>NETCASH SALES</th>
                            <th>NETCREDIT SALES</th>
                            <th>VAT AMT</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            displayData && displayData.map((g, i) => (
                                <tr key={i}>
                                    <td>{g.GROUP || 'Unknown'}</td>
                                    <td>{g["NET SALERETURN"]}</td>
                                    <td>{g["NET SALES EXCLVAT"]}</td>
                                    <td>{g["NETCASH SALES"]}</td>
                                    <td>{g["NETCREDIT SALES"]}</td>
                                    <td>{g["VAT AMT"]}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div >
        </div >
    )
}

export default GroupSales
import React, { useEffect, useState } from 'react'
import './GroupSales.css'


const GroupSales = () => {

    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [allData, setAllData] = useState([])
    const [groupSums, setGroupSums] = useState([]);
    const [displayData, setDisplayData] = useState([])
    const [expandedRow, setExpandedRow] = useState(null);
    const [expandAll, setExpandAll] = useState(false);
    const [expandedRows, setExpandedRows] = useState([]);
    const [warningMessage, setWarningMsg] = useState("Enter Start Date and End Date")


    const searchGrp = async () => {
        try {
            const result = await fetch(`https://api-eproc.premierauto.ae/api/SalesAnalysis/SalesGroup?dateStart=${fromDate}&dateEnd=${toDate}`)
            const data = await result.json()
            data && setAllData(data)
        } catch (error) {
            console.log(error)
            setWarningMsg("Some Error Occured in the backend, Please try again later")
        }
    }

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
        if (!fromDate || !toDate) {
            alert("select a start and end Date")
        } else {
            setWarningMsg("Resource Loading, Please Wait...")
            searchGrp()
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


    // const handleRowClick = () => {
    //     setExpandAll(prevState => !prevState);
    // };

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
                    <button onClick={handleGrpSearch} className='grpButton'>Go</button>
                </div>
            </div>

            {/* filter */}

            <div className='filter'>
                <label className='labeStyle' htmlFor="brancSelect">Filter By Branch:</label>
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

            {displayData.length !== 0 ? (<div div className='grptableCont' >
                <table border="1">
                    {/*  */}
                    <thead>
                        <tr>
                            <th>GROUP</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>NETCASH SALES</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>NETCREDIT SALES</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>NET SALE RETURN</th>
                            <th className={expandAll ? 'expandable' : 'hidden'}>VAT AMT</th>
                            <th>NET SALES EXCLVAT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayData && displayData.map((g, i) => (
                            <React.Fragment key={i}>
                                <tr data-testid={`dropdown-clicker`} onClick={window.innerWidth <= 768 ? () => handleRowClick(i) : null}>
                                    <td className='grpplusTd'>{g.GROUP || 'Unknown'}<i class="fa-solid fa-sort-down"></i></td>
                                    <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NETCASH SALES"] ? parseFloat(g["NETCASH SALES"]).toFixed(2) : "Nil"}</td>
                                    <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NETCREDIT SALES"] ? parseFloat(g["NETCREDIT SALES"]).toFixed(2) : "Nil"}</td>
                                    <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["NET SALERETURN"] ? parseFloat(g["NET SALERETURN"]).toFixed(2) : "Nil"}</td>
                                    <td id='numD' className={expandAll ? 'expandable' : 'hidden'}>{g["VAT AMT"] ? parseFloat(g["VAT AMT"]).toFixed(2) : "Nil"}</td>
                                    <td id='numD' className='last'>{g["NET SALES EXCLVAT"] ? parseFloat(g["NET SALES EXCLVAT"]).toFixed(2) : "Nil"}</td>
                                </tr>
                                {expandedRows.includes(i) && (
                                    <>
                                        <tr data-testid={`expanded-row-${i}`}>
                                            <th className='expandable'>NETCASH SALES</th>
                                            <td id='numD' className='expandable'>{g["NETCASH SALES"] ? parseFloat(g["NETCASH SALES"]).toFixed(2) : "Nil"}</td>
                                        </tr>
                                        <tr>
                                            <th className='expandable'>NETCREDIT SALES</th>
                                            <td id='numD' className='expandable'>{g["NETCREDIT SALES"] ? parseFloat(g["NETCREDIT SALES"]).toFixed(2) : "Nil"}</td>
                                        </tr>
                                        <tr>
                                            <th className='expandable'>NET SALE RETURN</th>
                                            <td id='numD' className='expandable'>{g["NET SALERETURN"] ? parseFloat(g["NET SALERETURN"]).toFixed(2) : "Nil"}</td>
                                        </tr>
                                        <tr>
                                            <th className='expandable'>VAT AMT</th>
                                            <td id='numD' className='expandable'>{g["VAT AMT"] ? parseFloat(g["VAT AMT"]).toFixed(2) : "Nil"}</td>
                                        </tr>
                                    </>

                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                    {/*  */}
                </table>
            </div >) : (<div><h3>{warningMessage}</h3></div>)}
        </div >
    )
}

export default GroupSales

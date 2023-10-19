import React, { useState } from 'react'
import './TimeSheets.css'
import { HiUserCircle } from "react-icons/hi2";
import { GoChevronLeft } from "react-icons/go";

const TimeSheets = ({ handleTMSHRecall }) => {
    const [userDisplay, setUserDisplay] = useState([])

    const results = [
        {
            "EmpId": 1,
            "Name": "John Doe",
            "Job Title": "Developer",
            "PassportNo": "AB123456",
            "PassportIssueDate": "2022-01-15",
            "PassportExpiryDate": "2027-01-14",
            "PassportPlaceOFIssue": "New York",
            "PassportCountryOFIssue": "USA",
            "Days_of_Expiry": 180
        },
        {
            "EmpId": 2,
            "Name": "Jane Doe",
            "Job Title": "Manager",
            "PassportNo": "CD789012",
            "PassportIssueDate": "2022-02-20",
            "PassportExpiryDate": "2027-02-19",
            "PassportPlaceOFIssue": "Los Angeles",
            "PassportCountryOFIssue": "USA",
            "Days_of_Expiry": 210
        },
        {
            "EmpId": 3,
            "Name": "Bob Smith",
            "Job Title": "Designer",
            "PassportNo": "EF345678",
            "PassportIssueDate": "2022-03-25",
            "PassportExpiryDate": "2027-03-24",
            "PassportPlaceOFIssue": "Chicago",
            "PassportCountryOFIssue": "USA",
            "Days_of_Expiry": 240
        },
        {
            "EmpId": 4,
            "Name": "Jon Jones",
            "Job Title": "Sales Manager",
            "PassportNo": "EF345678",
            "PassportIssueDate": "2022-03-25",
            "PassportExpiryDate": "2027-03-24",
            "PassportPlaceOFIssue": "Chicago",
            "PassportCountryOFIssue": "USA",
            "Days_of_Expiry": 240
        }
    ]

    const result2 = [
        {
            "SLNO": 1,
            "DATE": "2023-10-16",
            "TYPE": "Type A",
            "JOBE CODE": "ABC123",
            "JOB DESCRIPTION": "Job Description A",
            "NR HRS": 8,
            "OT HRS": 2,
            "SOT HRS": 1,
            "OT RATE": 15.00,
            "SOT RATE": 20.00,
            "TAL WAGE": 160.00,
            "REMARKS": "Some remarks for entry 1"
        },
        {
            "SLNO": 2,
            "DATE": "2023-10-17",
            "TYPE": "Type B",
            "JOBE CODE": "DEF456",
            "JOB DESCRIPTION": "Job Description B",
            "NR HRS": 7,
            "OT HRS": 3,
            "SOT HRS": 2,
            "OT RATE": 18.00,
            "SOT RATE": 25.00,
            "TAL WAGE": 201.00,
            "REMARKS": "Some remarks for entry 2"
        },
        {
            "SLNO": 3,
            "DATE": "2023-10-17",
            "TYPE": "Type B",
            "JOBE CODE": "DEF456",
            "JOB DESCRIPTION": "Job Description B",
            "NR HRS": 7,
            "OT HRS": 3,
            "SOT HRS": 2,
            "OT RATE": 18.00,
            "SOT RATE": 25.00,
            "TAL WAGE": 201.00,
            "REMARKS": "Some remarks for entry 2"
        }
    ]

    const TSHUserClick = (data) => {
        setUserDisplay([data]);
    }


    return (
        <div className='TimeSheetWrapper'>
            <div className='TimeSheetCont'>

                <div className='TSH-Head-Cont'>
                    <div className='TSH-Head-left-content'>
                        <HiUserCircle className='PI-GrClose' />
                        <span className='TSH-TSH'>TIMESHEETS</span>
                    </div>
                    <div onClick={handleTMSHRecall} className='TSH-Head-right-content'>
                        <GoChevronLeft className='PI-GrClose' />
                    </div>
                </div>

                <div className='TSH-TOPCONT'>
                    <div className='TSH-DEPCONT'>
                        <div className='TSH-DEP'>
                            <label htmlFor="dep">DEPARTMENT</label>
                            <select id="dep" name="fruit">
                                <option value="apple"></option>
                                <option value="banana">Mrs.</option>
                            </select>
                        </div>
                        <div className='TSH-MONTH'>
                            <label htmlFor="month">MONTH</label>
                            <input type="date" />
                        </div>
                        <div className='GENEMPBUTTON'>
                            <button>GENERATE ALL EMPLOYEES</button>
                        </div>
                        {
                            userDisplay && userDisplay.map((i) => (
                                <div className='TSH-USERPROF'>
                                    <div className='TSH-Selected-User'>
                                        <div className='PSE-AvatarCont'>
                                            <HiUserCircle className='PSE-USER' />
                                        </div>
                                        <div className='TSH-User-Details'>
                                            <div className='TSH-ID-Cont'>
                                                <div>ID:</div>
                                                <div className='TSH-data'>{i.EmpId}</div>
                                            </div>
                                            <div className='TSH-Name-Cont'>
                                                <div>Name:</div>
                                                <div className='TSH-data'>{i.Name}</div>
                                            </div>
                                            <div className='TSH-Sales-Cont'>
                                                <div>JobTitle:</div>
                                                <div className='TSH-data'>{i['Job Title']}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='TSH-TOPTABLECONT'>
                        <div className='TSH-Table'>
                            <p>Click the names to see more data.</p>
                            <table>
                                <thead>
                                    <tr class="table-headers">
                                        <th>EmpId</th>
                                        <th>Name</th>
                                        <th>Job Title</th>
                                        <th>PassportNo</th>
                                        <th>PassportIssueDate</th>
                                        <th>PassportExpiryDate</th>
                                        <th>PassportPlaceOFIssue</th>
                                        <th>PassportCountryOFIssue</th>
                                        <th>Days_of_Expiry</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        results.map((i, key) => (
                                            <>
                                                <tr onClick={() => TSHUserClick(i)} key={key}>
                                                    <td>{i.EmpId}</td>
                                                    <td>{i.Name}</td>
                                                    <td>{i['Job Title']}</td>
                                                    <td>{i.PassportNo}</td>
                                                    <td>{i.PassportIssueDate}</td>
                                                    <td>{i.PassportExpiryDate}</td>
                                                    <td>{i.PassportPlaceOFIssue}</td>
                                                    <td>{i.PassportCountryOFIssue}</td>
                                                    <td>{i.Days_of_Expiry}</td>
                                                </tr>
                                            </>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className='TSH-BOTTOM-TABLE-CONT'>
                    <div className='TSH-Table'>
                        <p>Click the names to see more data.</p>
                        <table>
                            <thead>
                                <tr class="table-headers">
                                    <th>SLNO</th>
                                    <th>DATE</th>
                                    <th>TYPE</th>
                                    <th>JOBE CODE</th>
                                    <th>JOB DESCRIPTION</th>
                                    <th>NR HRS</th>
                                    <th>OT HRS</th>
                                    <th>SOT HRS</th>
                                    <th>OT RATE</th>
                                    <th>SOT RATE</th>
                                    <th>TAL WAGE</th>
                                    <th>REMARKS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    result2.map((i, key) => (
                                        <>
                                            <tr key={key}>
                                                <td>{i.SLNO}</td>
                                                <td>{i.DATE}</td>
                                                <td>{i.TYPE}</td>
                                                <td>{i['JOBE CODE']}</td>
                                                <td>{i['JOB DESCRIPTION']}</td>
                                                <td>{i['NR HRS']}</td>
                                                <td>{i['OT HRS']}</td>
                                                <td>{i['SOT HRS']}</td>
                                                <td>{i['OT RATE']}</td>
                                                <td>{i['SOT RATE']}</td>
                                                <td>{i['TAL WAGE']}</td>
                                                <td>{i.REMARKS}</td>
                                            </tr>
                                        </>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='TSH-BTM-BTNS-CONT'>
                        <div className='TSH-BTM-ADD'>
                            <button>Add</button>
                        </div>
                        <div className='TSH-BTM-UPDT'>
                            <button>UPDATE TIMESHEET BY EMPLOYEE</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TimeSheets
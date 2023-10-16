import React from 'react'
import './TimeSheets.css'

const TimeSheets = () => {

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

    return (
        <div className='TimeSheetWrapper'>
            <div className='TimeSheetCont'>

                <div className='TSH-Head-Cont'>
                    <div className='TSH-Head-left-content'>
                        <i class="fa-solid fa-user"></i>
                        <span className='TSH-TSH'>TIMESHEETS</span>
                    </div>
                    <div className='TSH-Head-right-content'>
                        <i className="fa-solid fa-chevron-left"></i>
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
                        <div className='TSH-USERPROF'>
                            <div className='PSE-Selected-User'>
                                <div className='AvatarCont'>
                                    <i class="fa-solid fa-user fa-5x"></i>
                                </div>
                                <div className='PSE-User-Details'>
                                    <div className='PSE-ID-Cont'>
                                        <div>ID:</div>
                                        <div className='PSE-data'>1</div>
                                    </div>
                                    <div className='PSE-Name-Cont'>
                                        <div>Name:</div>
                                        <div className='PSE-data'>JON</div>
                                    </div>
                                    <div className='PSE-Sales-Cont'>
                                        <div>Job Title:</div>
                                        <div className='PSE-data'>DESIGNER</div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                                <tr key={key}>
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

            </div>
        </div>
    )
}

export default TimeSheets
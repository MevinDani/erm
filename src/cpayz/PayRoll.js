import React, { useState } from 'react'
import './PayRoll.css'

const PayRoll = ({ handlePayRollRecall }) => {

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
        },
    ]

    const PRLUserClick = (data) => {
        setUserDisplay([data]);
    }

    return (
        <div className='PayRollWrapper'>
            <div className='TSH-Head-Cont'>
                <div className='TSH-Head-left-content'>
                    <i class="fa-solid fa-user"></i>
                    <span className='TSH-TSH'>Payroll Additions/Deductions</span>
                </div>
                <div onClick={handlePayRollRecall} className='TSH-Head-right-content'>
                    <i className="fa-solid fa-chevron-left"></i>
                </div>
            </div>


            <div className='PayRollCont'>
                <div className='PRL-BODYCONT'>
                    <div className='PRL-LFT-CONT'>
                        <div className='PRL-TOPTABLECONT'>
                            <div className='PRL-Table'>
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
                                                    <tr onClick={() => PRLUserClick(i)} key={key}>
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
                        {
                            userDisplay && userDisplay.map((i, k) => (
                                <div className='PRL-USERPROF'>
                                    <div className='PRL-Selected-User'>
                                        <div className='AvatarCont'>
                                            <i class="fa-solid fa-user fa-5x"></i>
                                        </div>
                                        <div className='PRL-User-Details'>
                                            <div className='PRL-ID-Cont'>
                                                <div>ID:</div>
                                                <div className='PRL-data'>{i.EmpId}</div>
                                            </div>
                                            <div className='PRL-Name-Cont'>
                                                <div>Name:</div>
                                                <div className='PRL-data'>{i.Name}</div>
                                            </div>
                                            <div className='PRL-Sales-Cont'>
                                                <div>Job Title:</div>
                                                <div className='PRL-data'>{i['Job Title']}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>))

                        }
                    </div>

                    <div className='PRL-RIGHT-CONT'>
                        <div className='PRL-TOPTABLECONT'>
                            <div className='PRL-RIGHT-BANNER'>
                                <h3>Addition/Deduction Information</h3>
                                <button>ADD</button>
                            </div>
                            <div className='PRL-Table'>
                                <table>
                                    <thead>
                                        <tr class="table-headers">
                                            <th>SLN</th>
                                            <th>Category</th>
                                            <th>Amount</th>
                                            <th>Payroll</th>
                                            <th>Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='PRL-Bottom-BANNER'>
                                <button>SAVE</button>
                            </div>
                        </div>
                    </div>


                </div>
                <div></div>
            </div>
        </div>
    )
}

export default PayRoll
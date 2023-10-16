import React, { useState } from 'react'
import './PassPortExpiry.css'

const PassPortExpiry = ({ handlePassportRecall }) => {

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

    const PSEUserClick = (data) => {
        setUserDisplay([data]);
    }


    return (
        <div className='PassWrapper'>
            <div className='PassCont'>

                <div className='PSE-Head-Cont'>
                    <div className='PSE-Head-left-content'>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <span className='PSE-PSE'>Alters</span>
                    </div>
                    <div onClick={handlePassportRecall} className='PSE-Head-right-content'>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                </div>

                <div className='PSE-PSE2'>
                    Passport Expiry
                </div>

                <div className='PSE-Table'>
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
                                        <tr onClick={() => PSEUserClick(i)} key={key}>
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

                {
                    userDisplay && userDisplay.map((i, k) => (
                        <div className='PSE-Selected-User'>
                            <div className='AvatarCont'>
                                <i class="fa-solid fa-user fa-5x"></i>
                            </div>
                            <div className='PSE-User-Details'>
                                <div className='PSE-ID-Cont'>
                                    <div>ID:</div>
                                    <div className='PSE-data'>{i.EmpId}</div>
                                </div>
                                <div className='PSE-Name-Cont'>
                                    <div>Name:</div>
                                    <div className='PSE-data'>{i.Name}</div>
                                </div>
                                <div className='PSE-Sales-Cont'>
                                    <div>Job Title:</div>
                                    <div className='PSE-data'>{i['Job Title']}</div>
                                </div>
                            </div>
                        </div>

                    ))
                }


            </div>
        </div>
    )
}

export default PassPortExpiry
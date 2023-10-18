import React, { useState } from 'react'
import './EmiratesId.css'
import { HiUserCircle } from "react-icons/hi2";

const EmiratesIdExpiry = ({ handleEmiratesRecall }) => {
    const [userDisplay, setUserDisplay] = useState([])

    const results = [
        {
            "EmpId": 1,
            "Name": "John Doe",
            "Job Title": "Developer",
            "EmiratesId": "E1234567",
            "EmiratesIdExpiryDate": "2027-06-30",
            "Days_of_Expiry": 180
        },
        {
            "EmpId": 2,
            "Name": "Jane Doe",
            "Job Title": "Manager",
            "EmiratesId": "E2345678",
            "EmiratesIdExpiryDate": "2027-07-15",
            "Days_of_Expiry": 210
        },
        {
            "EmpId": 3,
            "Name": "Bob Smith",
            "Job Title": "Designer",
            "EmiratesId": "E3456789",
            "EmiratesIdExpiryDate": "2027-08-20",
            "Days_of_Expiry": 240
        },
        {
            "EmpId": 4,
            "Name": "Charlie Jon",
            "Job Title": "Designer",
            "EmiratesId": "E3456745",
            "EmiratesIdExpiryDate": "2027-08-22",
            "Days_of_Expiry": 242
        }
    ]

    const PSEUserClick = (data) => {
        setUserDisplay([data]);
    }


    return (
        <div className='PassWrapper'>
            <div className='PassCont'>

                <div className='EID-Head-Cont'>
                    <div className='EID-Head-left-content'>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <span className='EID-EID'>Alters</span>
                    </div>
                    <div onClick={handleEmiratesRecall} className='EID-Head-right-content'>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                </div>

                <div className='EID-EID2'>
                    Emirates ID Expiry
                </div>

                <div className='EID-Table'>
                    <p>Click the names to see more data.</p>
                    <table>
                        <thead>
                            <tr class="table-headers">
                                <th>EmpId</th>
                                <th>Name</th>
                                <th>Job Title</th>
                                <th>EmiratesId</th>
                                <th>EmiratesIdExpiryDate</th>
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
                                            <td>{i.EmiratesId}</td>
                                            <td>{i.EmiratesIdExpiryDate}</td>
                                            <td>{i.PassportExpiryDate}</td>
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
                        <div className='EID-Selected-User'>
                            <div className='PSE-AvatarCont'>
                                <HiUserCircle className='PSE-USER' />
                            </div>
                            <div className='EID-User-Details'>
                                <div className='EID-ID-Cont'>
                                    <div>ID:</div>
                                    <div className='EID-data'>{i.EmpId}</div>
                                </div>
                                <div className='EID-Name-Cont'>
                                    <div>Name:</div>
                                    <div className='EID-data'>{i.Name}</div>
                                </div>
                                <div className='EID-Sales-Cont'>
                                    <div>Job Title:</div>
                                    <div className='EID-data'>{i['Job Title']}</div>
                                </div>
                            </div>
                        </div>

                    ))
                }


            </div>
        </div>
    )
}

export default EmiratesIdExpiry
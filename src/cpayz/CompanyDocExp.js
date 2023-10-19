import React, { useState } from 'react'
import './CompanyDocExp.css'
import { HiUserCircle } from "react-icons/hi2";
import { BiEdit } from "react-icons/bi";
import { GoChevronLeft } from "react-icons/go";



const CompanyDocExp = ({ handleCompDocExpRecall }) => {

    const [userDisplay, setUserDisplay] = useState([])

    const results = [
        {
            "DocId": 1,
            "Name": "John Doe",
            "ExpDate": "2023-10-31",
            "DaysOfExp": 12
        },
        {
            "DocId": 2,
            "Name": "Jane Smith",
            "ExpDate": "2023-11-15",
            "DaysOfExp": 27
        },
        {
            "DocId": 3,
            "Name": "Sam Johnson",
            "ExpDate": "2023-10-25",
            "DaysOfExp": 7
        },
        {
            "DocId": 4,
            "Name": "Emily Brown",
            "ExpDate": "2023-11-05",
            "DaysOfExp": 18
        }
    ]

    const CMPEXPUserClick = (data) => {
        setUserDisplay([data]);
    }

    return (
        <div className='CMPDOCEXP-WRAPPER'>
            <div className='CMPDOCEXP-CONT'>

                <div className='CMPDOCEXP-Head-Cont'>
                    <div className='CMPDOCEXP-Head-left-content'>
                        <BiEdit className='PI-BiEdit' />
                        <span className='CMPDOCEXP-CMPDOCEXP'>ALTERS</span>
                    </div>
                    <div onClick={handleCompDocExpRecall} className='CMPDOCEXP-Head-right-content'>
                        <GoChevronLeft className='PI-GrClose' />
                    </div>
                </div>

                <div className='CEXP-CEXP'>
                    <div>Company Doc Expiry</div>
                    <div className='CEXPID'>
                        <div>ID - </div>
                    </div>
                </div>

                <div className='CMPDOCEXP-Table'>
                    <p>Click the names to see more data.</p>
                    <table>
                        <thead>
                            <tr class="table-headers">
                                <th>DocId</th>
                                <th>Name</th>
                                <th>Exp Date</th>
                                <th>Days of Exp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                results.map((i, key) => (
                                    <tr onClick={() => CMPEXPUserClick(i)} key={key}>
                                        <td>{i.DocId}</td>
                                        <td>{i.Name}</td>
                                        <td>{i.ExpDate}</td>
                                        <td>{i.DaysOfExp}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                {
                    userDisplay && userDisplay.map((i, k) => (
                        <div className='CMPDOCEXP-Selected-User'>
                            <div className='PSE-AvatarCont'>
                                <HiUserCircle className='PSE-USER' />
                            </div>
                            <div className='CMPDOCEXP-User-Details'>
                                <div className='CMPDOCEXP-ID-Cont'>
                                    <div>ID:</div>
                                    <div className='CMPDOCEXP-data'>{i.DocId}</div>
                                </div>
                                <div className='CMPDOCEXP-Name-Cont'>
                                    <div>Name:</div>
                                    <div className='CMPDOCEXP-data'>{i.Name}</div>
                                </div>
                                <div className='CMPDOCEXP-Sales-Cont'>
                                    <div>Exp Date:</div>
                                    <div className='CMPDOCEXP-data'>{i.ExpDate}</div>
                                </div>
                            </div>
                        </div>


                    ))
                }
            </div>
        </div>
    )
}

export default CompanyDocExp
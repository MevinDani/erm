import React, { useEffect, useState } from 'react'
import './PayRoll.css'
import { HiUserCircle } from "react-icons/hi2";
import { GoChevronLeft } from "react-icons/go";
import axios from 'axios';

const PayRoll = ({ handlePayRollRecall }) => {

    const [userDisplay, setUserDisplay] = useState([])
    const [personalInfo, setPersonalInfo] = useState([]);

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


    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://cubixweberp.com:156/api/PersonalInfoList/CPAYS/HO/YES/-';

                const response = await axios.get(url);

                if (!response.data) {
                    throw new Error(`No data received from the server`);
                }

                setPersonalInfo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        fetchData();
    }, []);

    console.log(personalInfo)

    return (
        <div className='PayRollWrapper'>
            <div className='TSH-Head-Cont'>
                <div className='TSH-Head-left-content'>
                    <HiUserCircle className='PI-GrClose' />
                    <span className='TSH-TSH'>Payroll Additions/Deductions</span>
                </div>
                <div onClick={handlePayRollRecall} className='TSH-Head-right-content'>
                    <GoChevronLeft className='PI-GrClose' />
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
                                            <th>Employee ID</th>
                                            <th>Status</th>
                                            <th>Name</th>
                                            <th>Date of Birth</th>
                                            <th>Marital Status</th>
                                            <th>Gender</th>
                                            <th>Nationality</th>
                                            <th>Join Date</th>
                                            <th>Job Title</th>
                                            <th>Job Type</th>
                                            <th>Department</th>
                                            <th>Division</th>
                                            <th>Grade</th>
                                            <th>Passport No</th>
                                            <th>Passport Expiry Date</th>
                                            <th>Emirates ID</th>
                                            <th>Emirates ID Expiry Date</th>
                                            <th>Visa No</th>
                                            <th>Visa Expiry Date</th>
                                            <th>Person ID</th>
                                            <th>Person ID Expiry Date</th>
                                            <th>Basic Pay</th>
                                            <th>Allowances OT</th>
                                            <th>Allowances NOT</th>
                                            <th>Net Salary</th>
                                            <th>Normal Hours</th>
                                            <th>Hourly Wage</th>
                                            <th>OT Rate</th>
                                            <th>Spl OT Rate</th>
                                            <th>Active</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            personalInfo &&
                                            personalInfo.map((i, key) => (
                                                <>
                                                    <tr onClick={() => PRLUserClick(i)} key={key}>
                                                        <td>{i.EmpId}</td>
                                                        <td>{i.Status}</td>
                                                        <td>{i.Name}</td>
                                                        <td>{i.DOB}</td>
                                                        <td>{i.Gender}</td>
                                                        <td>{i.Nationality}</td>
                                                        <td>{i.JoinDate}</td>
                                                        <td>{i.JobTitle}</td>
                                                        <td>{i.Department}</td>
                                                        <td>{i.Division}</td>
                                                        <td>{i.Grade}</td>
                                                        <td>{i.PassportNo}</td>
                                                        <td>{i.PassportExpiryDate}</td>
                                                        <td>{i.EmiratesId}</td>
                                                        <td>{i.EmiratesIdExpiryDate}</td>
                                                        <td>{i.VisaNo}</td>
                                                        <td>{i.VisaExpiryDate}</td>
                                                        <td>{i.PersonId}</td>
                                                        <td>{i.PersonIdExpiryDate}</td>
                                                        <td>{i.BasicPay}</td>
                                                        <td>{i.Allowances_OT}</td>
                                                        <td>{i.Allowances_NOT}</td>
                                                        <td>{i.NetSalary}</td>
                                                        <td>{i.NormalHrs}</td>
                                                        <td>{i.HourlyWage}</td>
                                                        <td>{i.OTrate}</td>
                                                        <td>{i.SplOtRate}</td>
                                                        <td>{i.Active}</td>
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
                                        <div className='PSE-AvatarCont'>
                                            <HiUserCircle className='PSE-USER' />
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
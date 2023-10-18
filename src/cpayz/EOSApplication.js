import React, { useEffect, useState } from 'react'
import './EOSApplication.css'
import { HiUserCircle } from "react-icons/hi2";

const EOSApplication = ({ handleEOSAPPRecall }) => {

    const [userDisplay, setUserDisplay] = useState([])
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")
    const [daysDifference, setDaysDifference] = useState("")

    useEffect(() => {
        if (fromDate && toDate) {
            const newfromDate = new Date(fromDate);
            const newtoDate = new Date(toDate);

            const timeDifference = newtoDate.getTime() - newfromDate.getTime();
            setDaysDifference(timeDifference / (1000 * 3600 * 24));
        }
    }, [fromDate, toDate]);



    const result =
        [
            {
                "EmpId": "E12345",
                "Grade": "A",
                "Name": "John Doe",
                "DOB": "1985-05-15",
                "JoinDate": "2010-10-20",
                "Status": "Active",
                "MaritalStatus": "Married",
                "Gender": "Male",
                "Nationality": "US",
                "Status1": "Regular",
                "Height": "180 cm",
                "Weight": "75 kg",
                "JobTitle": "Software Engineer",
                "JobType": "Full-time",
                "ShiftGroup": "Day Shift",
                "Department": "Engineering",
                "Division": "IT",
                "BankAccountNo": "1234567890",
                "BankName": "Fake Bank",
                "AgentID": "AG7890",
                "CurrentAddress": "123 Main Street, Cityville, USA",
                "HomeAddress": "456 Oak Avenue, Townsville, USA",
                "HomeAirport": "JFK",
                "WorkMobile": "555-555-5555",
                "PersonalMobile": "444-444-4444",
                "WorkPhone": "555-555-5555",
                "PersonalPhone": "444-444-4444",
                "WorkEmail": "john.doe@company.com",
                "PersonalEmail": "john.doe@gmail.com",
                "PassportNo": "AB123456",
                "PassportIssueDate": "2015-08-10",
                "PassportExpiryDate": "2025-08-10",
                "PassportPlaceOfIssue": "New York",
                "PassportCountryOfIssue": "USA",
                "EmiratesId": "1234567890123456",
                "EmiratesIdExpiryDate": "2025-12-31",
                "VisaNo": "V12345",
                "VisaExpiryDate": "2025-12-31",
                "InsuranceNo": "I9876",
                "InsuranceExpiryDate": "2025-12-31",
                "DrivingLicenseNo": "DL6789",
                "DrivingLicenseExpiryDate": "2024-05-15",
                "PersonId": "P6789",
                "PersonIdExpiryDate": "2024-05-15",
                "BasicPay": 60000,
                "Allowances_OT": 5000,
                "Allowances_NOT": 3000,
                "NetSalary": 68000,
                "NormalHrs": 40,
                "HourlyWage": 30,
                "OTrate": 1.5,
                "SplOtRate": 2.0,
                "Active": true,
                "Memos": "None",
                "Notes": "Employee of the month",
                "SalaryAc": "123-456-789",
                "AdvanceAc": "987-654-321"
            },
            {
                "EmpId": "E12345",
                "Grade": "A",
                "Name": "John Doe",
                "DOB": "1985-05-15",
                "JoinDate": "2010-10-20",
                "Status": "Active",
                "MaritalStatus": "Married",
                "Gender": "Male",
                "Nationality": "US",
                "Status1": "Regular",
                "Height": "180 cm",
                "Weight": "75 kg",
                "JobTitle": "Software Engineer",
                "JobType": "Full-time",
                "ShiftGroup": "Day Shift",
                "Department": "Engineering",
                "Division": "IT",
                "BankAccountNo": "1234567890",
                "BankName": "Fake Bank",
                "AgentID": "AG7890",
                "CurrentAddress": "123 Main Street, Cityville, USA",
                "HomeAddress": "456 Oak Avenue, Townsville, USA",
                "HomeAirport": "JFK",
                "WorkMobile": "555-555-5555",
                "PersonalMobile": "444-444-4444",
                "WorkPhone": "555-555-5555",
                "PersonalPhone": "444-444-4444",
                "WorkEmail": "john.doe@company.com",
                "PersonalEmail": "john.doe@gmail.com",
                "PassportNo": "AB123456",
                "PassportIssueDate": "2015-08-10",
                "PassportExpiryDate": "2025-08-10",
                "PassportPlaceOfIssue": "New York",
                "PassportCountryOfIssue": "USA",
                "EmiratesId": "1234567890123456",
                "EmiratesIdExpiryDate": "2025-12-31",
                "VisaNo": "V12345",
                "VisaExpiryDate": "2025-12-31",
                "InsuranceNo": "I9876",
                "InsuranceExpiryDate": "2025-12-31",
                "DrivingLicenseNo": "DL6789",
                "DrivingLicenseExpiryDate": "2024-05-15",
                "PersonId": "P6789",
                "PersonIdExpiryDate": "2024-05-15",
                "BasicPay": 60000,
                "Allowances_OT": 5000,
                "Allowances_NOT": 3000,
                "NetSalary": 68000,
                "NormalHrs": 40,
                "HourlyWage": 30,
                "OTrate": 1.5,
                "SplOtRate": 2.0,
                "Active": true,
                "Memos": "None",
                "Notes": "Employee of the month",
                "SalaryAc": "123-456-789",
                "AdvanceAc": "987-654-321"
            },
            {
                "EmpId": "E12345",
                "Grade": "A",
                "Name": "John Doe",
                "DOB": "1985-05-15",
                "JoinDate": "2010-10-20",
                "Status": "Active",
                "MaritalStatus": "Married",
                "Gender": "Male",
                "Nationality": "US",
                "Status1": "Regular",
                "Height": "180 cm",
                "Weight": "75 kg",
                "JobTitle": "Software Engineer",
                "JobType": "Full-time",
                "ShiftGroup": "Day Shift",
                "Department": "Engineering",
                "Division": "IT",
                "BankAccountNo": "1234567890",
                "BankName": "Fake Bank",
                "AgentID": "AG7890",
                "CurrentAddress": "123 Main Street, Cityville, USA",
                "HomeAddress": "456 Oak Avenue, Townsville, USA",
                "HomeAirport": "JFK",
                "WorkMobile": "555-555-5555",
                "PersonalMobile": "444-444-4444",
                "WorkPhone": "555-555-5555",
                "PersonalPhone": "444-444-4444",
                "WorkEmail": "john.doe@company.com",
                "PersonalEmail": "john.doe@gmail.com",
                "PassportNo": "AB123456",
                "PassportIssueDate": "2015-08-10",
                "PassportExpiryDate": "2025-08-10",
                "PassportPlaceOfIssue": "New York",
                "PassportCountryOfIssue": "USA",
                "EmiratesId": "1234567890123456",
                "EmiratesIdExpiryDate": "2025-12-31",
                "VisaNo": "V12345",
                "VisaExpiryDate": "2025-12-31",
                "InsuranceNo": "I9876",
                "InsuranceExpiryDate": "2025-12-31",
                "DrivingLicenseNo": "DL6789",
                "DrivingLicenseExpiryDate": "2024-05-15",
                "PersonId": "P6789",
                "PersonIdExpiryDate": "2024-05-15",
                "BasicPay": 60000,
                "Allowances_OT": 5000,
                "Allowances_NOT": 3000,
                "NetSalary": 68000,
                "NormalHrs": 40,
                "HourlyWage": 30,
                "OTrate": 1.5,
                "SplOtRate": 2.0,
                "Active": true,
                "Memos": "None",
                "Notes": "Employee of the month",
                "SalaryAc": "123-456-789",
                "AdvanceAc": "987-654-321"
            },
            {
                "EmpId": "E12345",
                "Grade": "A",
                "Name": "John Doe",
                "DOB": "1985-05-15",
                "JoinDate": "2010-10-20",
                "Status": "Active",
                "MaritalStatus": "Married",
                "Gender": "Male",
                "Nationality": "US",
                "Status1": "Regular",
                "Height": "180 cm",
                "Weight": "75 kg",
                "JobTitle": "Software Engineer",
                "JobType": "Full-time",
                "ShiftGroup": "Day Shift",
                "Department": "Engineering",
                "Division": "IT",
                "BankAccountNo": "1234567890",
                "BankName": "Fake Bank",
                "AgentID": "AG7890",
                "CurrentAddress": "123 Main Street, Cityville, USA",
                "HomeAddress": "456 Oak Avenue, Townsville, USA",
                "HomeAirport": "JFK",
                "WorkMobile": "555-555-5555",
                "PersonalMobile": "444-444-4444",
                "WorkPhone": "555-555-5555",
                "PersonalPhone": "444-444-4444",
                "WorkEmail": "john.doe@company.com",
                "PersonalEmail": "john.doe@gmail.com",
                "PassportNo": "AB123456",
                "PassportIssueDate": "2015-08-10",
                "PassportExpiryDate": "2025-08-10",
                "PassportPlaceOfIssue": "New York",
                "PassportCountryOfIssue": "USA",
                "EmiratesId": "1234567890123456",
                "EmiratesIdExpiryDate": "2025-12-31",
                "VisaNo": "V12345",
                "VisaExpiryDate": "2025-12-31",
                "InsuranceNo": "I9876",
                "InsuranceExpiryDate": "2025-12-31",
                "DrivingLicenseNo": "DL6789",
                "DrivingLicenseExpiryDate": "2024-05-15",
                "PersonId": "P6789",
                "PersonIdExpiryDate": "2024-05-15",
                "BasicPay": 60000,
                "Allowances_OT": 5000,
                "Allowances_NOT": 3000,
                "NetSalary": 68000,
                "NormalHrs": 40,
                "HourlyWage": 30,
                "OTrate": 1.5,
                "SplOtRate": 2.0,
                "Active": true,
                "Memos": "None",
                "Notes": "Employee of the month",
                "SalaryAc": "123-456-789",
                "AdvanceAc": "987-654-321"
            },
            {
                "EmpId": "E12345",
                "Grade": "A",
                "Name": "John Doe",
                "DOB": "1985-05-15",
                "JoinDate": "2010-10-20",
                "Status": "Active",
                "MaritalStatus": "Married",
                "Gender": "Male",
                "Nationality": "US",
                "Status1": "Regular",
                "Height": "180 cm",
                "Weight": "75 kg",
                "JobTitle": "Software Engineer",
                "JobType": "Full-time",
                "ShiftGroup": "Day Shift",
                "Department": "Engineering",
                "Division": "IT",
                "BankAccountNo": "1234567890",
                "BankName": "Fake Bank",
                "AgentID": "AG7890",
                "CurrentAddress": "123 Main Street, Cityville, USA",
                "HomeAddress": "456 Oak Avenue, Townsville, USA",
                "HomeAirport": "JFK",
                "WorkMobile": "555-555-5555",
                "PersonalMobile": "444-444-4444",
                "WorkPhone": "555-555-5555",
                "PersonalPhone": "444-444-4444",
                "WorkEmail": "john.doe@company.com",
                "PersonalEmail": "john.doe@gmail.com",
                "PassportNo": "AB123456",
                "PassportIssueDate": "2015-08-10",
                "PassportExpiryDate": "2025-08-10",
                "PassportPlaceOfIssue": "New York",
                "PassportCountryOfIssue": "USA",
                "EmiratesId": "1234567890123456",
                "EmiratesIdExpiryDate": "2025-12-31",
                "VisaNo": "V12345",
                "VisaExpiryDate": "2025-12-31",
                "InsuranceNo": "I9876",
                "InsuranceExpiryDate": "2025-12-31",
                "DrivingLicenseNo": "DL6789",
                "DrivingLicenseExpiryDate": "2024-05-15",
                "PersonId": "P6789",
                "PersonIdExpiryDate": "2024-05-15",
                "BasicPay": 60000,
                "Allowances_OT": 5000,
                "Allowances_NOT": 3000,
                "NetSalary": 68000,
                "NormalHrs": 40,
                "HourlyWage": 30,
                "OTrate": 1.5,
                "SplOtRate": 2.0,
                "Active": true,
                "Memos": "None",
                "Notes": "Employee of the month",
                "SalaryAc": "123-456-789",
                "AdvanceAc": "987-654-321"
            },
            {
                "EmpId": "E12345",
                "Grade": "A",
                "Name": "John Doe",
                "DOB": "1985-05-15",
                "JoinDate": "2010-10-20",
                "Status": "Active",
                "MaritalStatus": "Married",
                "Gender": "Male",
                "Nationality": "US",
                "Status1": "Regular",
                "Height": "180 cm",
                "Weight": "75 kg",
                "JobTitle": "Software Engineer",
                "JobType": "Full-time",
                "ShiftGroup": "Day Shift",
                "Department": "Engineering",
                "Division": "IT",
                "BankAccountNo": "1234567890",
                "BankName": "Fake Bank",
                "AgentID": "AG7890",
                "CurrentAddress": "123 Main Street, Cityville, USA",
                "HomeAddress": "456 Oak Avenue, Townsville, USA",
                "HomeAirport": "JFK",
                "WorkMobile": "555-555-5555",
                "PersonalMobile": "444-444-4444",
                "WorkPhone": "555-555-5555",
                "PersonalPhone": "444-444-4444",
                "WorkEmail": "john.doe@company.com",
                "PersonalEmail": "john.doe@gmail.com",
                "PassportNo": "AB123456",
                "PassportIssueDate": "2015-08-10",
                "PassportExpiryDate": "2025-08-10",
                "PassportPlaceOfIssue": "New York",
                "PassportCountryOfIssue": "USA",
                "EmiratesId": "1234567890123456",
                "EmiratesIdExpiryDate": "2025-12-31",
                "VisaNo": "V12345",
                "VisaExpiryDate": "2025-12-31",
                "InsuranceNo": "I9876",
                "InsuranceExpiryDate": "2025-12-31",
                "DrivingLicenseNo": "DL6789",
                "DrivingLicenseExpiryDate": "2024-05-15",
                "PersonId": "P6789",
                "PersonIdExpiryDate": "2024-05-15",
                "BasicPay": 60000,
                "Allowances_OT": 5000,
                "Allowances_NOT": 3000,
                "NetSalary": 68000,
                "NormalHrs": 40,
                "HourlyWage": 30,
                "OTrate": 1.5,
                "SplOtRate": 2.0,
                "Active": true,
                "Memos": "None",
                "Notes": "Employee of the month",
                "SalaryAc": "123-456-789",
                "AdvanceAc": "987-654-321"
            },

        ]

    const EOSUserClick = (data) => {
        setUserDisplay([data]);
    }
    return (
        <div className='EOSAPP-WRAPPER'>
            <div className='EOSAPP-CONT'>

                <div className='EOSAPP-Head-Cont'>
                    <div className='EOSAPP-Head-left-content'>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <span className='EOSAPP-EOSAPP'>END OF SERVICE APPLICATION</span>
                    </div>
                    <div onClick={handleEOSAPPRecall} className='EOSAPP-Head-right-content'>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                </div>

                <div className='EOSAPP-TOP-BANNER'>
                    <div className='EOSAPP-TOP-LEFT'>
                        {
                            userDisplay.length === 0 &&
                            <div className='EOSAPP-USERPROF'>
                                <div className='EOSAPP-Selected-User'>
                                    <div className='PSE-AvatarCont'>
                                        <HiUserCircle className='PSE-USER' />
                                    </div>
                                    <div className='EOSAPP-User-Details'>
                                        <div className='EOSAPP-ID-Cont'>
                                            <div>Employee ID:</div>
                                            <div className='EOSAPP-data'></div>
                                        </div>
                                        <div className='EOSAPP-Name-Cont'>
                                            <div>Name:</div>
                                            <div className='EOSAPP-data'></div>
                                        </div>
                                        <div className='EOSAPP-Name-Cont'>
                                            <div>Department:</div>
                                            <div className='EOSAPP-data'></div>
                                        </div>
                                        <div className='EOSAPP-Sales-Cont'>
                                            <div>Job Title:</div>
                                            <div className='EOSAPP-data'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            userDisplay && userDisplay.map((i) => (
                                <div className='EOSAPP-USERPROF'>
                                    <div className='EOSAPP-Selected-User'>
                                        <div className='PSE-AvatarCont'>
                                            <HiUserCircle className='PSE-USER' />
                                        </div>
                                        <div className='EOSAPP-User-Details'>
                                            <div className='EOSAPP-ID-Cont'>
                                                <div>Employee ID:</div>
                                                <div className='EOSAPP-data'>{i.EmpId}</div>
                                            </div>
                                            <div className='EOSAPP-Name-Cont'>
                                                <div>Name:</div>
                                                <div className='EOSAPP-data'>{i.Name}</div>
                                            </div>
                                            <div className='EOSAPP-Name-Cont'>
                                                <div>Department:</div>
                                                <div className='EOSAPP-data'>{i.Department}</div>
                                            </div>
                                            <div className='EOSAPP-Sales-Cont'>
                                                <div>Job Title:</div>
                                                <div className='EOSAPP-data'>{i.JobTitle}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                    <div className='EOSAPP-TOP-RIGHT'>
                        <div className='EOSAPP-RIGHT-NAMES'>
                            <div>Available Days</div>
                        </div>
                        <div className='EOSAPP-RIGHT-DATES'>
                            <div> 0 DAYS</div>
                        </div>
                    </div>
                </div>

                <div className='EOSAPP-BTM-CONT'>
                    <div className='EOSAPP-BTM-LEFT'>
                        <div className='EOSAPP-LSTFILT'>
                            <div>Employee List Filter</div>
                        </div>
                        <div className='EOSAPP-BTM-LEFT-INPTS'>
                            <div className='EOSAPP-DIVDEP'>
                                <div className='EOSAPP-DIV'>
                                    <label htmlFor="division">Division</label>
                                    <select id="division" name="fruit">
                                        <option value="apple"></option>
                                        <option value="banana"></option>
                                    </select>
                                </div>
                                <div className='EOSAPP-DEP'>
                                    <label htmlFor="dept">Dept</label>
                                    <select id="dept" name="fruit">
                                        <option value="apple"></option>
                                        <option value="banana"></option>
                                    </select>
                                </div>
                            </div>
                            <div className='EOSAPP-SRCH'>
                                <input type="text" placeholder='Search Name' />
                            </div>
                        </div>
                        <div className='EOSAPP-TOPTABLECONT'>
                            <div className='EOSAPP-Table'>
                                <p>Click the names to see more data.</p>
                                <table>
                                    <thead>
                                        <tr class="table-headers">
                                            <th>EmpId</th>
                                            <th>Grade</th>
                                            <th>Name</th>
                                            <th>DOB</th>
                                            <th>JoinDate</th>
                                            <th>Status</th>
                                            <th>MaritalStatus</th>
                                            <th>Gender</th>
                                            <th>Nationality</th>
                                            <th>Status1</th>
                                            <th>Height</th>
                                            <th>Weight</th>
                                            <th>JobTitle</th>
                                            <th>JobType</th>
                                            <th>ShiftGroup</th>
                                            <th>Department</th>
                                            <th>BankAccountNo</th>
                                            <th>BankName</th>
                                            <th>AgentID</th>
                                            <th>CurrentAddress</th>
                                            <th>HomeAddress</th>
                                            <th>HomeAirport</th>
                                            <th>WorkMobile</th>
                                            <th>PersonalMobile</th>
                                            <th>WorkPhone</th>
                                            <th>WorkEmail</th>
                                            <th>PersonalEmail</th>
                                            <th>PassportNo</th>
                                            <th>PassportIssueDate</th>
                                            <th>PassportExpiryDate</th>
                                            <th>PassportPlaceOfIssue</th>
                                            <th>PassportCountryOfIssue</th>
                                            <th>EmiratesId</th>
                                            <th>EmiratesIdExpiryDate</th>
                                            <th>VisaNo</th>
                                            <th>VisaExpiryDate</th>
                                            <th>InsuranceNo</th>
                                            <th>InsuranceExpiryDate</th>
                                            <th>DrivingLicenseNo</th>
                                            <th>DrivingLicenseExpiryDate</th>
                                            <th>PersonId</th>
                                            <th>PersonIdExpiryDate</th>
                                            <th>BasicPay</th>
                                            <th>Allowances_OT</th>
                                            <th>Allowances_NOT</th>
                                            <th>NetSalary</th>
                                            <th>NormalHrs</th>
                                            <th>HourlyWage</th>
                                            <th>OTrate</th>
                                            <th>SplOtRate</th>
                                            <th>Active</th>
                                            <th>Memos</th>
                                            <th>Notes</th>
                                            <th>SalaryAc</th>
                                            <th>AdvanceAc</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            result.map((i, key) => (
                                                <tr onClick={() => EOSUserClick(i)} key={i.key}>
                                                    <td>{i.EmpId}</td>
                                                    <td>{i.Grade}</td>
                                                    <td>{i.Name}</td>
                                                    <td>{i.DOB}</td>
                                                    <td>{i.JoinDate}</td>
                                                    <td>{i.Status}</td>
                                                    <td>{i.MaritalStatus}</td>
                                                    <td>{i.Gender}</td>
                                                    <td>{i.Nationality}</td>
                                                    <td>{i.Status1}</td>
                                                    <td>{i.Height}</td>
                                                    <td>{i.Weight}</td>
                                                    <td>{i.JobTitle}</td>
                                                    <td>{i.JobType}</td>
                                                    <td>{i.ShiftGroup}</td>
                                                    <td>{i.Department}</td>
                                                    <td>{i.BankAccountNo}</td>
                                                    <td>{i.BankName}</td>
                                                    <td>{i.AgentID}</td>
                                                    <td>{i.CurrentAddress}</td>
                                                    <td>{i.HomeAddress}</td>
                                                    <td>{i.HomeAirport}</td>
                                                    <td>{i.WorkMobile}</td>
                                                    <td>{i.PersonalMobile}</td>
                                                    <td>{i.WorkPhone}</td>
                                                    <td>{i.WorkEmail}</td>
                                                    <td>{i.PersonalEmail}</td>
                                                    <td>{i.PassportNo}</td>
                                                    <td>{i.PassportIssueDate}</td>
                                                    <td>{i.PassportExpiryDate}</td>
                                                    <td>{i.PassportPlaceOfIssue}</td>
                                                    <td>{i.PassportCountryOfIssue}</td>
                                                    <td>{i.EmiratesId}</td>
                                                    <td>{i.EmiratesIdExpiryDate}</td>
                                                    <td>{i.VisaNo}</td>
                                                    <td>{i.VisaExpiryDate}</td>
                                                    <td>{i.InsuranceNo}</td>
                                                    <td>{i.InsuranceExpiryDate}</td>
                                                    <td>{i.DrivingLicenseNo}</td>
                                                    <td>{i.DrivingLicenseExpiryDate}</td>
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
                                                    <td>{i.Memos}</td>
                                                    <td>{i.Notes}</td>
                                                    <td>{i.SalaryAc}</td>
                                                    <td>{i.AdvanceAc}</td>

                                                </tr>

                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div className='EOSAPP-BTM-RIGHT'>
                        <div className='EOSAPP-RIGHT-TOP'>
                            <div className='EOSAPP-RIGHT-INPTS'>
                                <div className='EOSAPP-DATE-CONT'>
                                    <div className='EOSAPP-DATE-DTLS'>
                                        <div>Date of Join</div>
                                        <div>End of Service Date</div>
                                        <div>Seperation Method</div>
                                    </div>
                                    <div className='EOSAPP-DATE-INPTS'>
                                        <div><input type="date" onChange={(e) => setFromDate(e.target.value)} /></div>
                                        <div><input type="date" onChange={(e) => setToDate(e.target.value)} /></div>
                                        <div className='EOSAPP-DIV'>
                                            <select id="division" name="fruit">
                                                <option value="apple"></option>
                                                <option value="banana"></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {
                                    daysDifference &&
                                    <div className='EOSAPP-DAYS'>
                                        {daysDifference} DAYS
                                    </div>
                                }
                            </div>
                            <div className='EOSAPP-RIGHT-BOX'>
                                <div className='EOSAPP-REASON'>Reason</div>
                                <textarea name="comment"></textarea>
                                <button>SAVE</button>
                            </div>
                        </div>
                        <div className='EOSAPP-RIGHT-BOTTOM'>
                            <div className='EOSAPP-STATUS-MONITOR'>
                                <div className='stsMnt'>Status Monitor</div>
                                <button>Edit</button>
                            </div>
                            <div className='TSH-TOPTABLECONT'>
                                <div className='TSH-Table'>
                                    <p>Click the names to see more data.</p>
                                    <table>
                                        <thead>
                                            <tr class="table-headers">
                                                <th>EOS Type</th>
                                                <th>JOIN DT</th>
                                                <th>END DATE</th>
                                                <th>TOTAL DAYS</th>
                                                <th>STATUS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>RESIGNATION</td>
                                                <td>01/01/2006</td>
                                                <td>26/04/2023</td>
                                                <td>6326.00</td>
                                                <td>REJECTED</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EOSApplication
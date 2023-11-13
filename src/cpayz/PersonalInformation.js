import React, { useEffect, useState } from 'react'
import './PersonalInformation.css'
import { BiEdit } from "react-icons/bi";
import { GoChevronLeft } from "react-icons/go";
import { FaUserTie } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { BiAt } from "react-icons/bi";
import axios from 'axios';


const PersonalInformation = ({ handleComeBack }) => {

    const [jobTitles, setJobTitles] = useState(null)

    const [employeeId, setEmployeeId] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [status, setStatus] = useState('');
    const [active, setActive] = useState('');

    const handleEmployeeIdChange = (e) => {
        setEmployeeId(e.target.value);
    };

    const handleLoginPasswordChange = (e) => {
        setLoginPassword(e.target.value);
    };

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleActiveChange = (e) => {
        setActive(e.target.value);
    };

    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleMiddleNameChange = (e) => {
        setMiddleName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const [dob, setDob] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const handleDobChange = (e) => {
        setDob(e.target.value);
    };

    const handleMaritalStatusChange = (e) => {
        setMaritalStatus(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleNationalityChange = (e) => {
        setNationality(e.target.value);
    };

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    };

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };

    const [joinDate, setJoinDate] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [branch, setBranch] = useState('');
    const [bankAccount, setBankAccount] = useState('');

    const handleJoinDateChange = (e) => {
        setJoinDate(e.target.value);
    };

    const handleJobTitleChange = (e) => {
        setJobTitle(e.target.value);
    };

    const handleBranchChange = (e) => {
        setBranch(e.target.value);
    };

    const handleBankAccountChange = (e) => {
        setBankAccount(e.target.value);
    };

    const [jobType, setJobType] = useState('');
    const [division, setDivision] = useState('');
    const [bankName, setBankName] = useState('');
    const [agentId, setAgentId] = useState('');

    const handleJobTypeChange = (e) => {
        setJobType(e.target.value);
    };

    const handleDivisionChange = (e) => {
        setDivision(e.target.value);
    };

    const handleBankNameChange = (e) => {
        setBankName(e.target.value);
    };

    const handleAgentIdChange = (e) => {
        setAgentId(e.target.value);
    };

    const [allowOnline, setAllowOnline] = useState(false);
    const handleAllowOnlineChange = () => {
        setAllowOnline(!allowOnline);
    };

    const [currentAddress, setCurrentAddress] = useState('');
    const [homeAirport, setHomeAirport] = useState('');
    const [homeAddress, setHomeAddress] = useState('');

    const handleCurrentAddressChange = (e) => {
        setCurrentAddress(e.target.value);
    };

    const handleHomeAirportChange = (e) => {
        setHomeAirport(e.target.value);
    };

    const handleHomeAddressChange = (e) => {
        setHomeAddress(e.target.value);
    };

    const [workMobile, setWorkMobile] = useState('');
    const [workPhone, setWorkPhone] = useState('');
    const [workEmail, setWorkEmail] = useState('');
    const [personalMobile, setPersonalMobile] = useState('');
    const [personalPhone, setPersonalPhone] = useState('');
    const [personalEmail, setPersonalEmail] = useState('');

    const handleWorkMobileChange = (e) => {
        setWorkMobile(e.target.value);
    };

    const handleWorkPhoneChange = (e) => {
        setWorkPhone(e.target.value);
    };

    const handleWorkEmailChange = (e) => {
        setWorkEmail(e.target.value);
    };

    const handlePersonalMobileChange = (e) => {
        setPersonalMobile(e.target.value);
    };

    const handlePersonalPhoneChange = (e) => {
        setPersonalPhone(e.target.value);
    };

    const handlePersonalEmailChange = (e) => {
        setPersonalEmail(e.target.value);
    };

    const handlePISave = () => {
        const url = 'https://185.241.124.171:156/api/PersonalInfoReg'

        const data = [

            {
                "CmpCode": "CPAYS",
                "EmpId": employeeId,
                "AlternateID": employeeId,
                "Status": status,
                "Title": title,
                "FistName": firstName,
                "MiddleName": middleName,
                "LastName": lastName,
                "DOB": dob,
                "MaritalStatus": maritalStatus,
                "Gender": gender,
                "Nationality": nationality,
                "Height": height,
                "Weight": weight,
                "JoinDate": joinDate,
                "JobTitle": jobTitle,
                "JobType": jobType,
                "Division": division,
                "Grade": "A",
                "BankAccountNo": bankAccount,
                "BankName": bankName,
                "AgentID": agentId,
                "CurrentAddress": currentAddress,
                "HomeAddress": homeAddress,
                "HomeAirport": homeAirport,
                "WorkMobile": workMobile,
                "PersonalMobile": personalMobile,
                "WorkPhone": workPhone,
                "PersonalPhone": personalPhone,
                "WorkEmail": workEmail,
                "PersonalEmail": personalEmail,
                "onlineallow": allowOnline.toString()
            }
        ]

        // const data = [
        //     {
        //         "CmpCode": "CPAYS",
        //         "EmpId": employeeId,
        //         "AlternateID": employeeId,
        //         "Status": status,
        //         "Title": title,
        //         "FistName": firstName,
        //         "MiddleName": middleName,
        //         "LastName": lastName,
        //         "DOB": dob,
        //         "MaritalStatus": "Single",
        //         "Gender": "Male",
        //         "Nationality": "US",
        //         "Height": "",
        //         "Weight": "",
        //         "JoinDate": "2022-01-01",
        //         "JobTitle": "Software Engineer",
        //         "JobType": "Full-time",
        //         "ShiftGroup": "Day",
        //         "Department": "IT",
        //         "Division": "Development",
        //         "Grade": "A",
        //         "BankAccountNo": "1234567890",
        //         "BankName": "Bank of Dummy",
        //         "AgentID": "AGT987",
        //         "CurrentAddress": "123 Main Street, Cityville",
        //         "HomeAddress": "456 Oak Avenue, Townsville",
        //         "HomeAirport": "XYZ",
        //         "WorkMobile": "+1234567890",
        //         "PersonalMobile": "+9876543210",
        //         "WorkPhone": "555-1234",
        //         "PersonalPhone": "555-5678",
        //         "WorkEmail": "john.doe@company.com",
        //         "PersonalEmail": "john.doe@gmail.com",
        //         "PassportNo": "P123456",
        //         "PassportIssueDate": "2010-02-15",
        //         "PassportExpiryDate": "2030-02-15",
        //         "PassportPlaceofIssue": "City Passport Office",
        //         "PassportCountryofIssue": "US",
        //         "EmiratesId": "EID987654",
        //         "EmiratesIdExpiryDate": "2032-01-01",
        //         "VisaNo": "V987654",
        //         "VisaExpiryDate": "2032-12-31",
        //         "InsuranceNo": "I98765",
        //         "InsuranceExpiryDate": "2032-12-31",
        //         "DrivingLicenceNo": "DL12345",
        //         "DrivingLicenceExpiryDate": "2032-12-31",
        //         "PersonId": "PID789",
        //         "PersonIdExpiryDate": "2032-01-01",
        //         "BasicPay": 0,
        //         "Allowances_OT": 0,
        //         "Allowances_NOT": 0,
        //         "NetSalary": 0,
        //         "NormalHrs": 0,
        //         "HourlyWage": 0,
        //         "OTrate": 0,
        //         "SplOtRate": 0,
        //         "photo": "",
        //         "Active": "true",
        //         "Memos": "Some memos here",
        //         "Notes": "Some notes here",
        //         "SalaryAc": "SalaryAccount123",
        //         "AdvanceAc": "AdvanceAccount456",
        //         "password": "securepassword",
        //         "onlineallow": "true"
        //     }
        // ]

    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://cubixweberp.com:156/api/MasterList/CPAYS/JOBTITLE';

                const response = await axios.get(url);

                if (!response.data) {
                    throw new Error(`No data received from the server`);
                }

                setJobTitles(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        fetchData();
    }, []);

    console.log(jobTitles)


    return (
        <div className='PI-Wrapper'>

            <div className='PI-Cont'>
                <div className='PI-Head-Cont'>
                    <div className='PI-Head-left-content'>
                        <BiEdit className='PI-BiEdit' />
                        <span className='PI-PI'>Personal Information</span>
                    </div>
                    <div onClick={handleComeBack} className='PI-Head-right-content'>
                        <GoChevronLeft className='PI-GrClose' />
                    </div>
                </div>

                <div className='PI-Body'>
                    <div className='PI-left-content'>
                        <div className='PI-Upload-Cont'>
                            <div className='PI-LeftButton'>Upload Photo</div>
                        </div>
                        <div className='PI-SDC-Cont'>
                            <div className='PI-LeftButton' onClick={handlePISave}>SAVE</div>
                            <div className='PI-LeftButton'>DELETE</div>
                            <div className='PI-LeftButton'>CLOSE</div>
                        </div>
                    </div>

                    <div className='PI-right-content'>

                        <div className='PI-RHead-Cont'>
                            <div className='PI-Login'>
                                <div className='PI-EmployeeId'>
                                    <label htmlFor="empId">Employee ID</label>
                                    <input type="text" id='empId' value={employeeId} onChange={handleEmployeeIdChange} />
                                </div>
                                <div className='PI-Password'>
                                    <label htmlFor="password">Login Password</label>
                                    <input type="text" id='password' value={loginPassword} onChange={handleLoginPasswordChange} />
                                </div>
                                <div className='PI-Status'>
                                    <label htmlFor="status">Status</label>
                                    <select id="status" name="fruit" value={status} onChange={handleStatusChange}>
                                        <option value="apple">Confirmed Employee</option>
                                        <option value="banana">nil</option>
                                    </select>
                                </div>
                            </div>
                            <div className='PI-Edit-Cont'>
                                <div className='PI-Edit'>EDIT CODE</div>
                                <div className='PI-Status'>
                                    <label htmlFor="active">Active</label>
                                    <select id="active" name="fruit" value={active} onChange={handleActiveChange}>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='PI-RBODY-Cont'>

                            <div className='PI-RPerson'>
                                <FaUserTie className='PI-FaUserTie' />
                                <div className='PI-Personal'>Personal</div>
                            </div>

                            <div className='PI-PERSONAL-CONT'>

                                <div className='PI-TITLE-CONT'>
                                    <div id='PINMS'>Title</div>
                                    <div>
                                        <select id="title" name="fruit" value={title} onChange={handleTitleChange}>
                                            <option value="mr">Mr.</option>
                                            <option value="mrs">Mrs.</option>
                                        </select>
                                    </div>
                                    <div>Date of Birth</div>
                                    <div>Nationality</div>
                                </div>

                                <div className='PI-FNAME-CONT'>
                                    <div id='PINMS'>First Name</div>
                                    <div>
                                        <input type="text" value={firstName} onChange={handleFirstNameChange} />
                                    </div>
                                    <div>
                                        <input type="date" name="" id="" value={dob} onChange={handleDobChange} />
                                    </div>
                                    <div>
                                        <select id="title" name="fruit" value={nationality} onChange={handleNationalityChange}>
                                            <option value="apple"></option>
                                            <option value="banana"></option>
                                        </select>
                                    </div>
                                </div>

                                <div className='PI-MN-CONT'>
                                    <div id='PINMS'>Middle Name</div>
                                    <div>
                                        <input type="text" name="" id="" value={middleName} onChange={handleMiddleNameChange} />
                                    </div>
                                    <div className='MaritalStatus'>
                                        <div>Marital Status</div>
                                        <select id="title" name="fruit" value={maritalStatus} onChange={handleMaritalStatusChange}>
                                            <option value="Married">Married.</option>
                                            <option value="Single">Single.</option>
                                        </select>
                                    </div>
                                    <div className='MaritalStatus'>
                                        <div>Height</div>
                                        <input type="text" value={height} onChange={handleHeightChange} />
                                    </div>
                                </div>

                                <div className='PI-LSTN-CONT'>
                                    <div id='PINMS'>Last Name</div>
                                    <div>
                                        <input type="text" value={lastName} onChange={handleLastNameChange} />
                                    </div>
                                    <div className='MaritalStatus'>
                                        <div>Gender</div>
                                        <select id="title" name="fruit" value={gender} onChange={handleGenderChange}>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className='MaritalStatus'>
                                        <div>Weight</div>
                                        <div><input type="text" name="" id="" value={weight} onChange={handleWeightChange} /></div>
                                    </div>
                                </div>

                            </div>


                            <div className='PI-RPerson'>
                                <FaMapLocationDot className='PI-FaUserTie' />
                                <div className='PI-Personal'>Official</div>
                            </div>

                            <div className='PI-OFFICIAL-CONT'>

                                <div className='PI-OFFLEFT'>
                                    <div className='PI-OFFNAMES'>
                                        <div>Join Date</div>
                                        <div>Job Title</div>
                                        <div>Branch</div>
                                        <div>Bank Account</div>
                                    </div>

                                    <div className='PI-OFF-INP1'>
                                        <div>
                                            <input type="date" name="" id="" value={joinDate} onChange={handleJoinDateChange} />
                                        </div>
                                        <div>
                                            <select id="JT" name="fruit" value={jobTitle} onChange={handleJobTitleChange}>
                                                {jobTitles &&
                                                    jobTitles.map((job, index) => (
                                                        <option key={index} value={job.TranId}>
                                                            {job.Description}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                        <div>
                                            <select id="branch" name="fruit" value={branch} onChange={handleBranchChange}>
                                                <option value="apple">Premier Auto Parts</option>
                                                <option value="banana">Administrator</option>
                                            </select>
                                        </div>
                                        <div>
                                            <input type="text" name="" id="" value={bankAccount} onChange={handleBankAccountChange} />
                                        </div>
                                    </div>
                                </div>

                                <div className='PI-OFFRIGHT'>
                                    <div className='PI-OFFRIGHT1'>
                                        <div className='PI-OFFNAMES2'>
                                            <div>Job Type</div>
                                            <div>Division</div>
                                            <div>Bank Name</div>
                                        </div>
                                        <div className='PI-OFFINP2'>
                                            <div>
                                                <select id="JT" name="fruit" value={jobType} onChange={handleJobTypeChange}>
                                                    <option value="apple"></option>
                                                    <option value="banana"></option>
                                                </select>
                                            </div>
                                            <div>
                                                <select id="branch" name="fruit" value={division} onChange={handleDivisionChange}>
                                                    <option value="apple"></option>
                                                    <option value="banana"></option>
                                                </select>
                                            </div>
                                            <div>
                                                <input type="text" name="" id="" value={bankName} onChange={handleBankNameChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='PI-OFFRIGHT2'>
                                        <div className='PI-OFFNAMES3'>
                                            <div>Gender</div>
                                            <div>Agent ID</div>
                                        </div>
                                        <div className='PI-OFFINP3'>
                                            <div>
                                                <select id="JT" name="fruit" value={gender} onChange={handleGenderChange}>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                            <div>
                                                <input type="text" name="" id="" value={agentId} onChange={handleAgentIdChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='AllowOnline'>
                                <div className='AllowTogglerCont'>
                                    <div>Allow Online</div>
                                    <div className='ToggleSwitch'>
                                        <label class="switch">
                                            <input type="checkbox" checked={allowOnline} onChange={handleAllowOnlineChange} />
                                            <span class="slider"></span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <span className='ToggleComments'>
                                        ** Only applicable for online app module.<br /> Contact for purchase the module: + 97142677221
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='ContactWrapper'>
                            <div id='contactInfo' className='PI-RPerson'>
                                <FaUserTie className='PI-FaUserTie' />
                                <div className='PI-Personal'>Contact Information</div>
                            </div>
                            <div className='PI-RPerson'>
                                <HiHome className='PI-FaUserTie' />
                                <div className='PI-Personal'>Address</div>
                            </div>

                            <div className='ContactInfoCont'>

                                <div className='AddressCont'>
                                    <div className='CurrentHomeCont'>
                                        <div>Current Address</div>
                                        <div>Home Airport</div>
                                    </div>
                                    <div className='AddressBoxesCont'>
                                        <textarea id='cmtBox' name="comment" form="usrform" value={currentAddress} onChange={handleCurrentAddressChange}></textarea>
                                        <input type="text" value={homeAirport} onChange={handleHomeAirportChange} />
                                    </div>
                                    <div className='HomeCont'>
                                        <div>Home Address</div>
                                    </div>
                                    <div className='AddressBoxesCont'>
                                        <textarea name="comment" form="usrform" value={homeAddress} onChange={handleHomeAddressChange}></textarea>
                                    </div>
                                </div>

                                <div className='PI-RPerson'>
                                    <BiAt className='PI-FaUserTie' />
                                    <div className='PI-Personal'>Contact</div>
                                </div>

                                <div className='ContactCont'>

                                    <div className='workCont'>
                                        <div>Work Mobile</div>
                                        <div>Work Phone</div>
                                        <div>Work Email</div>
                                    </div>
                                    <div className='WorkBoxCont'>
                                        <input type="number" value={workMobile} onChange={handleWorkMobileChange} />
                                        <input type="number" value={workPhone} onChange={handleWorkPhoneChange} />
                                        <input type="text" value={workEmail} onChange={handleWorkEmailChange} />
                                    </div>
                                    <div className='workCont'>
                                        <div>Personal Mobile</div>
                                        <div>Personal Phone</div>
                                        <div>Personal Email</div>
                                    </div>
                                    <div className='WorkBoxCont'>
                                        <input type="number" value={personalMobile} onChange={handlePersonalMobileChange} />
                                        <input type="number" value={personalPhone} onChange={handlePersonalPhoneChange} />
                                        <input type="text" value={personalEmail} onChange={handlePersonalEmailChange} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PersonalInformation
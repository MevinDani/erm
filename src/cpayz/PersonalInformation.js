import React from 'react'
import './PersonalInformation.css'

const PersonalInformation = ({ handleComeBack }) => {
    return (
        <div className='PI-Wrapper'>

            <div className='PI-Cont'>
                <div className='PI-Head-Cont'>
                    <div className='PI-Head-left-content'>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <span className='PI-PI'>Personal Information</span>
                    </div>
                    <div onClick={handleComeBack} className='PI-Head-right-content'>
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                </div>

                <div className='PI-Body'>
                    <div className='PI-left-content'>
                        <div className='PI-Upload-Cont'>
                            <div className='PI-LeftButton'>Upload Photo</div>
                        </div>
                        <div className='PI-SDC-Cont'>
                            <div className='PI-LeftButton'>SAVE</div>
                            <div className='PI-LeftButton'>DELETE</div>
                            <div className='PI-LeftButton'>CLOSE</div>
                        </div>
                    </div>

                    <div className='PI-right-content'>

                        <div className='PI-RHead-Cont'>
                            <div className='PI-Login'>
                                <div className='PI-EmployeeId'>
                                    <label htmlFor="empId">Employee ID</label>
                                    <input type="text" id='empId' />
                                </div>
                                <div className='PI-Password'>
                                    <label htmlFor="password">Login Password</label>
                                    <input type="text" id='password' />
                                </div>
                                <div className='PI-Status'>
                                    <label htmlFor="status">Status</label>
                                    <select id="status" name="fruit">
                                        <option value="apple">Confirmed Employee</option>
                                        <option value="banana">nil</option>
                                    </select>
                                </div>
                            </div>
                            <div className='PI-Edit-Cont'>
                                <div className='PI-Edit'>EDIT CODE</div>
                                <div className='PI-Status'>
                                    <label htmlFor="active">Active</label>
                                    <select id="active" name="fruit">
                                        <option value="apple">Yes</option>
                                        <option value="banana">nil</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='PI-RBODY-Cont'>

                            <div className='PI-RPerson'>
                                <i class="fa-solid fa-user-tie fa-2x"></i>
                                <div className='PI-Personal'>Personal</div>
                            </div>

                            <div className='PI-PERSONAL-CONT'>

                                <div className='PI-TITLE-CONT'>
                                    <div id='PINMS'>Title</div>
                                    <div>
                                        <select id="title" name="fruit">
                                            <option value="apple">Mr.</option>
                                            <option value="banana">Mrs.</option>
                                        </select>
                                    </div>
                                    <div>Date of Birth</div>
                                    <div>Nationality</div>
                                </div>

                                <div className='PI-FNAME-CONT'>
                                    <div id='PINMS'>First Name</div>
                                    <div>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <input type="date" name="" id="" />
                                    </div>
                                    <div>
                                        <select id="title" name="fruit">
                                            <option value="apple"></option>
                                            <option value="banana"></option>
                                        </select>
                                    </div>
                                </div>

                                <div className='PI-MN-CONT'>
                                    <div id='PINMS'>Middle Name</div>
                                    <div>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div className='MaritalStatus'>
                                        <div>Marital Status</div>
                                        <select id="title" name="fruit">
                                            <option value="apple">Married.</option>
                                            <option value="banana">Single.</option>
                                        </select>
                                    </div>
                                    <div className='MaritalStatus'>
                                        <div>Height</div>
                                        <input type="text" />
                                    </div>
                                </div>

                                <div className='PI-LSTN-CONT'>
                                    <div id='PINMS'>Last Name</div>
                                    <div>
                                        <input type="text" />
                                    </div>
                                    <div className='MaritalStatus'>
                                        <div>Gender</div>
                                        <select id="title" name="fruit">
                                            <option value="apple">Male</option>
                                            <option value="banana">Female</option>
                                        </select>
                                    </div>
                                    <div className='MaritalStatus'>
                                        <div>Weight</div>
                                        <div><input type="text" name="" id="" /></div>
                                    </div>
                                </div>

                            </div>

                            {/* <div className='PI-Name'>
                                <div className='PI-Title'>
                                    <label htmlFor="title">Title</label>
                                    <select id="title" name="fruit">
                                        <option value="apple">Mr.</option>
                                        <option value="banana">Mrs.</option>
                                    </select>
                                </div>
                                <div className='PI-FirstName'>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id='firstName' />
                                </div>
                                <div className='PI-MiddleName'>
                                    <label htmlFor="MiddleName">Middle Name</label>
                                    <input type="text" id='MiddleName' />
                                </div>
                                <div className='PI-LastName'>
                                    <label htmlFor="LastName">Last Name</label>
                                    <input type="text" id='LastName' />
                                </div>
                            </div>

                            <div className='DOB-CONT'>
                                <div className='DBN'>
                                    <div className='DBCONT'>
                                        <label htmlFor="DB">Date of Birth</label>
                                        <input type="date" id='DB' />
                                    </div>
                                    <div className='NATCONT'>
                                        <label htmlFor="NAT">Nationality</label>
                                        <input type="text" name="" id="NAT" />
                                    </div>
                                </div>
                                <div className='MW'>
                                    <div className='MARCONT'>
                                        <label htmlFor="MS">Marital Status</label>
                                        <select id="MS" name="fruit">
                                            <option value="apple">Married</option>
                                            <option value="banana">Single</option>
                                        </select>
                                    </div>
                                    <div className='HGH'>
                                        <label htmlFor="HT">Height</label>
                                        <input type="text" name="" id="HT" />
                                    </div>
                                </div>
                                <div className='GNW'>
                                    <div className='GNDCONT'>
                                        <label htmlFor="GND">Gender</label>
                                        <select id="GND" name="fruit">
                                            <option value="apple">Male</option>
                                            <option value="banana">Female</option>
                                        </select>
                                    </div>
                                    <div className='WGHCONT'>
                                        <label htmlFor="WT">Weight</label>
                                        <input type="text" name="" id="WT" />
                                    </div>
                                </div>
                            </div> */}

                            <div className='PI-RPerson'>
                                <i class="fa-solid fa-map-location-dot fa-2x"></i>
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
                                            <input type="date" name="" id="" />
                                        </div>
                                        <div>
                                            <select id="JT" name="fruit">
                                                <option value="apple">Managing Director</option>
                                                <option value="banana">Administrator</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select id="branch" name="fruit">
                                                <option value="apple">Premier Auto Parts</option>
                                                <option value="banana">Administrator</option>
                                            </select>
                                        </div>
                                        <div>
                                            <input type="text" name="" id="" />
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
                                                <select id="JT" name="fruit">
                                                    <option value="apple"></option>
                                                    <option value="banana"></option>
                                                </select>
                                            </div>
                                            <div>
                                                <select id="branch" name="fruit">
                                                    <option value="apple"></option>
                                                    <option value="banana"></option>
                                                </select>
                                            </div>
                                            <div>
                                                <input type="text" name="" id="" />
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
                                                <select id="JT" name="fruit">
                                                    <option value="apple"></option>
                                                    <option value="banana"></option>
                                                </select>
                                            </div>
                                            <div>
                                                <input type="text" name="" id="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className='JobDetails'>
                                <div className='JoinDt'>
                                    <div className="JOBPADDER">
                                        <label htmlFor="JoinDate">Join Date</label>
                                        <input type="date" id='JoinDate' />
                                    </div>
                                    <div className="JOBPADDER">
                                        <label htmlFor="JT">Job Tilte</label>
                                        <select id="JT" name="fruit">
                                            <option value="apple">Managing Director</option>
                                            <option value="banana">Administrator</option>
                                        </select>
                                    </div>
                                    <div className="JOBPADDER">
                                        <label htmlFor="branch">Branch</label>
                                        <select id="branch" name="fruit">
                                            <option value="apple">Premier Auto Parts</option>
                                            <option value="banana">Administrator</option>
                                        </select>
                                    </div>
                                    <div className="JOBPADDER">
                                        <label htmlFor="bankAcc">Bank Account</label>
                                        <input type="text" id='bankAcc' />
                                    </div>
                                </div>

                                <div className='JobType'>
                                    <div className="JOBPADDER">
                                        <label htmlFor="JTY">Job Type</label>
                                        <select id="JTY" name="fruit">
                                            <option value="apple">Select</option>
                                            <option value="banana">Administrator</option>
                                        </select>
                                    </div>
                                    <div className="JOBPADDER">
                                        <label htmlFor="div">Division</label>
                                        <select id="div" name="fruit">
                                            <option value="apple">Select</option>
                                            <option value="banana">Administrator</option>
                                        </select>
                                    </div>
                                    <div className="JOBPADDER">
                                        <label htmlFor="bankName">Bank Name</label>
                                        <input type="text" id='bankName' />
                                    </div>
                                </div>

                                <div className='Grade'>
                                    <div className="JOBPADDER">
                                        <label htmlFor="GRD">Grade</label>
                                        <select id="GRD" name="fruit">
                                            <option value="apple">Select</option>
                                            <option value="banana">Administrator</option>
                                        </select>
                                    </div>
                                    <div className="JOBPADDER">
                                        <label htmlFor="bankName">Agent ID</label>
                                        <input type="text" id='bankName' />
                                    </div>
                                </div>
                            </div> */}
                            <div className='AllowOnline'>
                                <div className='AllowTogglerCont'>
                                    <div>Allow Online</div>
                                    <div className='ToggleSwitch'>
                                        <label class="switch">
                                            <input type="checkbox" />
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
                                <i class="fa-solid fa-user-tie fa-2x"></i>
                                <div className='PI-Personal'>Contact Information</div>
                            </div>
                            <div className='PI-RPerson'>
                                <i class="fa-solid fa-house fa-2x"></i>
                                <div className='PI-Personal'>Address</div>
                            </div>

                            <div className='ContactInfoCont'>

                                <div className='AddressCont'>
                                    <div className='CurrentHomeCont'>
                                        <div>Current Address</div>
                                        <div>Home Airport</div>
                                    </div>
                                    <div className='AddressBoxesCont'>
                                        <textarea id='cmtBox' name="comment" form="usrform"></textarea>
                                        <input type="text" />
                                    </div>
                                    <div className='HomeCont'>
                                        <div>Home Address</div>
                                    </div>
                                    <div className='AddressBoxesCont'>
                                        <textarea name="comment" form="usrform"></textarea>
                                    </div>
                                </div>

                                <div className='PI-RPerson'>
                                    <i class="fa-solid fa-at fa-2x"></i>
                                    <div className='PI-Personal'>Contact</div>
                                </div>

                                <div className='ContactCont'>

                                    <div className='workCont'>
                                        <div>Work Mobile</div>
                                        <div>Work Phone</div>
                                        <div>Work Email</div>
                                    </div>
                                    <div className='WorkBoxCont'>
                                        <input type="number" />
                                        <input type="number" />
                                        <input type="text" />
                                    </div>
                                    <div className='workCont'>
                                        <div>Personal Mobile</div>
                                        <div>Personal Phone</div>
                                        <div>Personal Email</div>
                                    </div>
                                    <div className='WorkBoxCont'>
                                        <input type="number" />
                                        <input type="number" />
                                        <input type="text" />
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
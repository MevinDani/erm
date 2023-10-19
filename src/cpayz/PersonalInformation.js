import React from 'react'
import './PersonalInformation.css'
import { BiEdit } from "react-icons/bi";
import { GoChevronLeft } from "react-icons/go";
import { FaUserTie } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { BiAt } from "react-icons/bi";

const PersonalInformation = ({ handleComeBack }) => {
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
                                <FaUserTie className='PI-FaUserTie' />
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
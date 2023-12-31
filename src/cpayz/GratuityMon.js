import React from 'react'
import './GratuityMon.css'
import { HiUserCircle } from "react-icons/hi2";
import { GoChevronLeft } from "react-icons/go";
import { BiEdit } from "react-icons/bi";

const GratuityMon = ({ handleGratRecall }) => {
    return (
        <div className='GMT-WRAPPER'>
            <div className='GMT-CONT'>

                <div className='GMT-Head-Cont'>
                    <div className='GMT-Head-left-content'>
                        <BiEdit className='PI-BiEdit' />
                        <span className='GMT-GMT'>Gratuity Monitor</span>
                    </div>
                    <div onClick={handleGratRecall} className='GMT-Head-right-content'>
                        <GoChevronLeft className='PI-GrClose' />
                    </div>
                </div>

                <div className='GMT-BODY-CONT'>
                    <div className='GMT-LEFT-CONT'>
                        <div className='GMT-LEFT-BOX'>

                        </div>
                        <div className='GMT-LEFT-DTLS'>
                            <div className='GMT-USERPROF'>
                                <div className='GMT-Selected-User'>
                                    <div className='PSE-AvatarCont'>
                                        <HiUserCircle className='PSE-USER' />
                                    </div>
                                    <div className='GMT-User-Details'>
                                        <div className='GMT-ID-Cont'>
                                            <div>Employee ID:</div>
                                            <div className='GMT-data'></div>
                                        </div>
                                        <div className='GMT-Name-Cont'>
                                            <div>Name:</div>
                                            <div className='GMT-data'></div>
                                        </div>
                                        <div className='GMT-Name-Cont'>
                                            <div>Status:</div>
                                            <div className='GMT-data'></div>
                                        </div>
                                        <div className='GMT-Sales-Cont'>
                                            <div>Seperation Method:</div>
                                            <div className='GMT-data'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='GMT-RIGHT-WRAPPER'>
                        <div className='GMT-RIGHT-CONT'>
                            <div className='GMT-RIGHT-DATECONT'>
                                <div className='GMT-RIGHT-DNAMES'>
                                    <div>Join Date</div>
                                    <div>End Date</div>
                                    <div>Current Basic Salary</div>
                                    <div>Daily Wage</div>
                                    <div>Eligible Days</div>
                                </div>
                                <div className='GMT-RIGHT-DDTLS'>
                                    <div><input type="date" /></div>
                                    <div><input type="date" /></div>
                                    <div id='gmtNums'>0</div>
                                    <div id='gmtNums'>0</div>
                                    <div id='gmtNums'>0</div>
                                </div>
                            </div>

                            <div className='GMT-RIGHT-YMDSCONT'>
                                <div className='GMT-YRS'>
                                    <div>Years</div>
                                    <div id='gmtNums'>0</div>
                                </div>
                                <div className='GMT-MONTHS'>
                                    <div>Months</div>
                                    <div id='gmtNums'>0</div>
                                </div>
                                <div className='GMT-DAYS'>
                                    <div>Days</div>
                                    <div id='gmtNums'>0</div>
                                </div>
                            </div>

                            <div className='GMT-GSL-CONT'>
                                <div className='GMT-GSL-NAMES'>
                                    <div id='gmtGslNms'>Eligible Gratuity</div>
                                    <div id='gmtGslNms'>Salary Outstanding</div>
                                    <div id='gmtGslNms'>Loans & Advance</div>
                                </div>
                                <div className='GMT-GSL-VALUES'>
                                    <div id='gmtNums2'>0</div>
                                    <div id='gmtNums2'>0</div>
                                    <div id='gmtNums2'>0</div>
                                </div>
                            </div>

                        </div>
                        <div className='GMT-GSL-BTM-BANNER'>
                            <div id='gmtGslNms'>Total Payable</div>
                            <div id='gmtNums2'>0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GratuityMon
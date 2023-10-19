import React from 'react'
import './EOS.css'
import { HiUserCircle } from "react-icons/hi2";
import { GoChevronLeft } from "react-icons/go";
import { BiEdit } from "react-icons/bi";


const EOS = ({ handleEOSRecall }) => {
    return (
        <div className='EOS-Wrapper'>
            <div className='EOS-Cont'>

                <div className='EOS-Head-Cont'>
                    <div className='EOS-Head-left-content'>
                        <BiEdit className='PI-BiEdit' />
                        <span className='EOS-EOS'>END OF SERVICE APPROVAL</span>
                    </div>
                    <div onClick={handleEOSRecall} className='EOS-Head-right-content'>
                        <GoChevronLeft className='PI-GrClose' />
                    </div>
                </div>

                <div className='EOS-TOP-BANNER'>
                    <div className='EOS-TOP-LEFT'>
                        <div className='PRL-USERPROF'>
                            <div className='PRL-Selected-User'>
                                <div className='PSE-AvatarCont'>
                                    <HiUserCircle className='PSE-USER' />
                                </div>
                                <div className='PRL-User-Details'>
                                    <div className='PRL-ID-Cont'>
                                        <div>Employee ID:</div>
                                        <div className='PRL-data'></div>
                                    </div>
                                    <div className='PRL-Name-Cont'>
                                        <div>Department:</div>
                                        <div className='PRL-data'></div>
                                    </div>
                                    <div className='PRL-Name-Cont'>
                                        <div>Name:</div>
                                        <div className='PRL-data'></div>
                                    </div>
                                    <div className='PRL-Sales-Cont'>
                                        <div>Job Title:</div>
                                        <div className='PRL-data'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='EOS-TOP-RIGHT'>
                        <div className='EOS-RIGHT-NAMES'>
                            <div>Application Date</div>
                            <div>Seperation Method</div>
                            <div>Join Date</div>
                        </div>
                        <div className='EOS-RIGHT-DATES'>
                            <div><input type="text" /></div>
                            <div><input type="text" /></div>
                            <div className='EOS-RIGHT-2DATES'>
                                <div><input type="text" /></div>
                                <div>END DATE</div>
                                <div><input type="text" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='EOS-MID'>
                    <div>Application for Approval</div>
                    <div><input type="text" placeholder='Search Name' /></div>
                </div>

                <div className='EOS-MID-BLANK-CONT'>
                    <div className='EOS-MID-BLANK'></div>
                </div>

                <div className='EOS-BTM'>
                    <div>Application History of the Employee</div>
                </div>

                <div className='EOS-BTM-BLANK-CONT'>
                    <div className='EOS-BTM-BLANK'></div>
                    <div className='EOS-BTM-BTNS-CONT'>
                        <div className='EOS-BTNS'>APPROVED</div>
                        <div className='EOS-BTNS'>REJECTED</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EOS
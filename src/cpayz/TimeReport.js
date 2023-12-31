import React from 'react'
import './TimeReport.css'
import { HiUserCircle } from "react-icons/hi2";
import { GoChevronLeft } from "react-icons/go";

const TimeReport = ({ handleTRPRecall }) => {
    return (
        <div className='TimeReportWrapper'>
            <div className='TimeReportCont'>

                <div className='TRP-Head-Cont'>
                    <div className='TRP-Head-left-content'>
                        <HiUserCircle className='PI-GrClose' />
                        <span className='TRP-TRP'>TIMESHEET REPORT</span>
                    </div>
                    <div onClick={handleTRPRecall} className='TRP-Head-right-content'>
                        <GoChevronLeft className='PI-GrClose' />
                    </div>
                </div>

                <div className='TRP-HEAD-CONT'>
                    <div className='TRP-BRANCH-CONT'>
                        <label htmlFor="branch">BRANCH</label>
                        <label htmlFor="division">DIVISION</label>
                        <div id='period'>PERIOD</div>
                    </div>
                    <div className='TRP-DIVISON-CONT'>
                        <select id="branch" name="fruit">
                            <option value="apple"></option>
                            <option value="banana">Mrs.</option>
                        </select>
                        <select id="division" name="fruit">
                            <option value="apple"></option>
                            <option value="banana">Mrs.</option>
                        </select>
                        <div className='TRP-DATE-RANGE'>
                            <div><input type="date" /></div>
                            <div>TO</div>
                            <div><input type="date" /></div>
                        </div>
                    </div>
                    <div className='TRP-PERIOD-CONT'>
                    </div>
                </div>

                <div className='TRP-MID'>
                    <div className='TRP-SUMMARY'>
                        Worked Hours Summary
                    </div>
                    <div className='TRP-ChkBox'>
                        <input type="checkbox" />
                        <span>VALUES ONLY</span>
                    </div>
                </div>

                <div className='TRP-BLANK-CONT'>
                    <div className='TRP-BLANK'>

                    </div>
                </div>
                <div className='TRP-BTM-BTNS'>
                    <div className='TRP-LEFTBTNS'>
                        <button>EXPORT</button>
                        <button>PRINT</button>
                    </div>
                    <div className='TRP-RIGHTBTN'>
                        <button>CLOSE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeReport
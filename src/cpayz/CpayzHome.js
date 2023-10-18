import React, { useState } from 'react'
import './CpayHome.css'
import CpayzResouce from './CpayzResouce'
import PersonalInformation from './PersonalInformation'
import PassPortExpiry from './PassPortExpiry'
import EmiratesIdExpiry from './EmiratesIdExpiry'
import TimeSheets from './TimeSheets'
import PayRoll from './PayRoll'
import TimeReport from './TimeReport'
import EOS from './EOS'
import EOSApplication from './EOSApplication'
import GratuityMon from './GratuityMon'
import CompanyDoc from './CompanyDoc'


const CpayzHome = () => {
    const [showComponent, setShowComponent] = useState(false);
    const [showPassport, setShowPassport] = useState(false);
    const [showEmirates, setShowEmirates] = useState(false);
    const [showPayRoll, setShowPayRoll] = useState(false);
    const [showEOS, setShowEOS] = useState(false);
    const [showTimeSheets, setShowTimeSheets] = useState(false);
    const [showTimeReport, setShowTimeReport] = useState(false);
    const [showEOSAPP, setShowEOSAPP] = useState(false);
    const [showGrat, setShowGrat] = useState(false);
    const [showCompDoc, setShowCompDoc] = useState(false);


    const handleClick = () => {
        setShowComponent(true);
        setShowPassport(false);
        setShowEmirates(false);
        setShowPayRoll(false);
        setShowEOS(false);
        setShowGrat(false);
        setShowEOSAPP(false);
        setShowTimeReport(false)
        setShowTimeSheets(false)
        setShowCompDoc(false)
    };

    const handleComeBack = () => {
        setShowComponent(false);
    }

    const handlePassportView = () => {
        setShowPassport(true);
        setShowComponent(false);
        setShowEmirates(false);
        setShowPayRoll(false);
        setShowEOS(false);
        setShowGrat(false)
        setShowEOSAPP(false)
        setShowTimeReport(false)
        setShowTimeSheets(false)
        setShowCompDoc(false)
    }

    const handlePassportRecall = () => {
        setShowPassport(false);
    }

    const handleEmiratesView = () => {
        setShowEmirates(true);
        setShowPassport(false);
        setShowComponent(false);
        setShowPayRoll(false);
        setShowEOS(false);
        setShowGrat(false)
        setShowEOSAPP(false)
        setShowTimeReport(false)
        setShowTimeSheets(false)
        setShowCompDoc(false)
    }

    const handleEmiratesRecall = () => {
        setShowEmirates(false);
    }

    const handlePayRollView = () => {
        setShowPayRoll(true);
        setShowEmirates(false);
        setShowPassport(false);
        setShowComponent(false);
        setShowEOS(false);
        setShowGrat(false)
        setShowEOSAPP(false)
        setShowTimeReport(false)
        setShowTimeSheets(false)
        setShowCompDoc(false)
    }

    const handlePayRollRecall = () => {
        setShowPayRoll(false);
    }

    const handleEOSView = () => {
        setShowEOS(true);
        setShowPayRoll(false);
        setShowEmirates(false);
        setShowPassport(false);
        setShowComponent(false);
        setShowGrat(false)
        setShowEOSAPP(false)
        setShowTimeReport(false)
        setShowTimeSheets(false)
        setShowCompDoc(false)
    }

    const handleEOSRecall = () => {
        setShowEOS(false);
    }

    const handleTMSHRecall = () => {
        setShowTimeSheets(false)
    }

    const handleTMSView = () => {
        setShowTimeSheets(true)
        setShowEOS(false);
        setShowPayRoll(false);
        setShowEmirates(false);
        setShowPassport(false);
        setShowComponent(false);
        setShowGrat(false)
        setShowEOSAPP(false)
        setShowTimeReport(false)
        setShowCompDoc(false)
    }

    const handleTRPRecall = () => {
        setShowTimeReport(false)
    }

    const handleTRPView = () => {
        setShowTimeReport(true)
        setShowTimeSheets(false)
        setShowEOS(false);
        setShowPayRoll(false);
        setShowEmirates(false);
        setShowPassport(false);
        setShowComponent(false);
        setShowGrat(false)
        setShowEOSAPP(false)
        setShowCompDoc(false)

    }

    const handleEOSAPPRecall = () => {
        setShowEOSAPP(false)
    }

    const handleEOSAPPView = () => {
        setShowEOSAPP(true)
        setShowTimeReport(false)
        setShowTimeSheets(false)
        setShowEOS(false);
        setShowPayRoll(false);
        setShowEmirates(false);
        setShowPassport(false);
        setShowComponent(false);
        setShowGrat(false);
        setShowCompDoc(false)
    }

    const handleGratRecall = () => {
        setShowGrat(false)
    }

    const handleGratView = () => {
        setShowGrat(true)
        setShowEOSAPP(false)
        setShowTimeReport(false)
        setShowTimeSheets(false)
        setShowEOS(false);
        setShowPayRoll(false);
        setShowEmirates(false);
        setShowPassport(false);
        setShowComponent(false);
        setShowCompDoc(false)
    }

    const handleCompDocRecall = () => {
        setShowCompDoc(false)
    }

    const handleCompDocView = () => {
        setShowCompDoc(true)
        setShowGrat(false)
        setShowEOSAPP(false)
        setShowTimeReport(false)
        setShowTimeSheets(false)
        setShowEOS(false);
        setShowPayRoll(false);
        setShowEmirates(false);
        setShowPassport(false);
        setShowComponent(false);
    }

    return (
        <div className='Cpayz-Wrapper'>


            {/* headerNav */}
            <div className='Cpayz-HeaderNav-Container'>

                <div className='CPH-left'>
                    <div className='CPH-Logo'>
                        <div><span className='C-'>C-</span><span className='PAYZ'>PAYZ</span></div>
                        <div className='HR'>HR & Payroll Solutions</div>
                    </div>
                    <div className='CPH-Left-Item'>
                        <div className='CPHL-Items'>
                            <div>Licensed To</div>
                            <div className='CUBIX'>Cubix IT Solutions LLC</div>
                        </div>
                        <div className='CPHL-Items'>
                            <div>Financial Period</div>
                            <div>From</div>
                            <div>To</div>
                        </div>
                    </div>
                </div>

                <div className='CPH-right'>
                    <div className='Power'>Powered By,</div>
                    <div className='CUBIX-RIGHT'>CUBIX</div>
                </div>
            </div>

            {/* main-body */}
            <div className='CPZ-Body-Cont'>

                <div className='CPB-Left'>

                    <div className='CPL-Options'>
                        <div>
                            <select id="fruit" name="fruit">
                                <option value="apple">SH11-PREMIER AUTO PARTS</option>
                                <option value="banana">ELECTRONICS</option>
                            </select>
                        </div>
                        <div className='CPAdmin-Head'>
                            <i class="fa-solid fa-user fa-2x"></i>
                            <span>Admin</span>
                        </div>
                    </div>

                    <div className='CPZ-Left-Manage'>
                        <i class="fa-regular fa-user"></i>
                        <div className='MNG'>Resource Management</div>
                    </div>
                    <div onClick={handlePayRollView} className='CPZ-Left-Manage'>
                        <i class="fa-regular fa-user"></i>
                        <div className='MNG'>Payroll Management</div>
                    </div>
                    <div className='CPZ-Left-Manage'>
                        <i class="fa-regular fa-user"></i>
                        <div className='MNG'>Leave Management</div>
                    </div>
                    <div onClick={handleEOSView} className='CPZ-Left-Manage'>
                        <i class="fa-regular fa-user"></i>
                        <div className='MNG'>End of Service</div>
                    </div>
                    <div className='CPZ-Left-Manage'>
                        <i class="fa-regular fa-user"></i>
                        <div className='MNG'>Fleet Management</div>
                    </div>
                    <div onClick={handleCompDocView} className='CPZ-Left-Manage'>
                        <i class="fa-regular fa-user"></i>
                        <div className='MNG'>Document Management</div>
                    </div>
                    <div className='CPZ-Left-Manage'>
                        <i class="fa-regular fa-user"></i>
                        <div className='MNG'>Task Assignments</div>
                    </div>
                    <div className='CPZ-Left-Manage'>
                        <i class="fa-regular fa-user"></i>
                        <div className='MNG'>Accounts</div>
                    </div>

                    <div className='SuppTick'>
                        <a>Online Support Ticket</a>
                    </div>

                </div>

                <div className='CPB-Middle'>
                    {
                        showPassport ? (
                            <PassPortExpiry handlePassportRecall={handlePassportRecall} />
                        ) : showComponent ? (
                            <PersonalInformation handleComeBack={handleComeBack} />
                        ) : showEmirates ? (
                            <EmiratesIdExpiry handleEmiratesRecall={handleEmiratesRecall} />
                        ) : showPayRoll ? (
                            <PayRoll handlePayRollRecall={handlePayRollRecall} />
                        ) : showEOS ? (
                            <EOS handleEOSRecall={handleEOSRecall} />
                        ) : showTimeSheets ? (
                            <TimeSheets handleTMSHRecall={handleTMSHRecall} />
                        ) : showTimeReport ? (
                            <TimeReport handleTRPRecall={handleTRPRecall} />
                        ) : showEOSAPP ? (
                            <EOSApplication handleEOSAPPRecall={handleEOSAPPRecall} />
                        ) : showGrat ? (
                            <GratuityMon handleGratRecall={handleGratRecall} />
                        ) : showCompDoc ? (
                            <CompanyDoc handleCompDocRecall={handleCompDocRecall} />
                        ) : (
                            <CpayzResouce handleClick={handleClick}
                                handlePassportView={handlePassportView}
                                handleEmiratesView={handleEmiratesView}
                                handleTMSView={handleTMSView}
                                handleTRPView={handleTRPView}
                                handleEOSAPPView={handleEOSAPPView}
                                handleGratView={handleGratView} />
                        )
                    }
                </div>

                <div className='CPB-Right'>
                    <div className='CPR-Items'>
                        <div><i class="fa-solid fa-power-off"></i></div>
                        <div><i class="fa-solid fa-user-gear"></i></div>
                        <div><i class="fa-solid fa-gear"></i></div>
                        <div><i class="fa-regular fa-floppy-disk"></i></div>
                        <div><i class="fa-regular fa-bell"></i></div>
                    </div>
                    <div></div>
                </div>
            </div>

        </div>
    )
}

export default CpayzHome
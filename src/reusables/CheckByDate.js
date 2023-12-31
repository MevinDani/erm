import React, { useEffect, useState } from 'react'
import './CheckByDate.css'
import { FaSortDown } from "react-icons/fa";


const CheckByDate = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='CBDwrapper'>
            <div className='CBDCont'>
                <div className='CBDMAINDROP'>
                    <div className='CBDDropCont'>
                        <div className='CBDDropItems'>
                            <div className='CBDDText'>Check by date</div>
                            <div className='CBDDText'><FaSortDown onClick={toggleDropdown} /></div>
                        </div>
                    </div>
                    {isOpen && (
                        <div className='CBDDropDown'>
                            <div className='CBDDropDownCont'>
                                <div className='CBDDropDownText'>Last 10 days</div>
                                <div className='CBDDropDownText'>Last 5 days</div>
                                <div className='CBDDropDownText'>Last 2 days</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='CBDDateCont'>
                    <div className='CBDItems'>
                        <div className='CBDText'>Today's Due PDC</div>
                        <div className='CBDNum'>15000</div>
                        <div><button className='CBDButton'>view list</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckByDate
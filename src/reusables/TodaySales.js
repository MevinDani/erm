import React, { useState } from 'react'
import './TodaySales.css'
import { FaSortDown } from "react-icons/fa";


const TodaySales = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='TSSaleswrapper'>
            <div className='TSCont'>
                <div className='TSMAINDROP'>
                    <div className='TSDropCont'>
                        <div className='TSDropItems'>
                            <div className='TSDText'>Last 30 days</div>
                            <div className='TSDText'><FaSortDown onClick={toggleDropdown}/></div>
                        </div>
                    </div>
                    {isOpen && (
                        <div className='TSDropDown'>
                            <div className='TSDropDownCont'>
                                <div className='TSDropDownText'>Last 10 days</div>
                                <div className='TSDropDownText'>Last 5 days</div>
                                <div className='TSDropDownText'>Last 2 days</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='TSSalesCont'>
                    <div className='TSSalesItems'>
                        <div className='TSText'>Todays Sales</div>
                        <div className='TSNum'>1234567890</div>
                        <div><button className='TSSalesButton'>view list</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodaySales
import React, { useState } from 'react'
import './TodaySales.css'


const TodaySales = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='TSSaleswrapper'>
            <div className='TSCont'>
                <div className='TSDropCont'>
                    <div className='TSDropItems'>
                        {/* <div className="custom-select">
                            <label className="TSDText" htmlFor="branchSelect">Last 30 days</label>
                            <select
                                className="TSDselectStyle"
                                name="branch"
                                id="branchSelect"
                            >
                                <option value="all" defaultChecked style={{ display: isOpen ? 'block' : 'none' }}>
                                    All
                                </option>
                            </select>
                            <i class="fa-solid fa-sort-down" onClick={toggleDropdown}></i>
                        </div> */}
                        <div className='TSDText'>Last 30 days</div>
                        <div className='TSDText'><i class="fa-solid fa-sort-down" onClick={toggleDropdown}></i></div>
                    </div>
                </div>
                {isOpen ? <>
                    <div className='TSDText'>Last 10 days</div>
                    <div className='TSDText'>Last 10 days</div>
                    <div className='TSDText'>Last 10 days</div>
                </> : ""

                }
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
import React from 'react'
import './CheckByDate.css'

const CheckByDate = () => {
    return (
        <div className='CBDwrapper'>
            <div className='CBDCont'>
                <div className='CBDDropCont'>
                    <div className='CBDDropItems'>
                        <div className='CBDDText'>Check by date</div>
                        <div className='CBDDText'><i class="fa-solid fa-sort-down"></i></div>
                    </div>
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
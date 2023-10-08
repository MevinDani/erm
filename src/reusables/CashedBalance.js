import React from 'react'
import './CashedBalance.css'

const CashedBalance = () => {
    return (
        <div className='CashedWrapper'>
            <div className='CashedCont'>
                <div className='PayablesCont'>
                    <h3>PAYABLES</h3>
                    <div className='AmountBox'>23,363</div>
                </div>
                <div className='MinusCont'>
                    <span className='Minus'>-</span>
                </div>
                <div className='ReceivablesCont'>
                    <h3>RECEIVABLES</h3>
                    <div className='AmountBox'>23,363</div>
                </div>
                <div className='PlusCont'>
                    <span className='Plus'>+</span>
                </div>
                <div className='CashAndBank'>
                    <h3>CASH & BANK</h3>
                    <div className='AmountBox'>23,363</div>
                </div>
                <div className='EqualsCont'>
                    <span className='Equals'>=</span>
                </div>
                <div className='Balance'>
                    <h3>BALANCE</h3>
                    <div className='AmountBox'>13,433</div>
                </div>
            </div>
        </div>
    )
}

export default CashedBalance
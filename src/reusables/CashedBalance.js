import React from 'react'
import './CashedBalance.css'

const CashedBalance = () => {
    return (
        <div className='CashedWrapper'>
            <div className='CashedContWrapper'>
                <div className='CashedCont'>
                    <div id='CashDivs' className='PayablesCont'>
                        <h3>PAYABLES</h3>
                        <div className='AmountBox'>23,363</div>
                    </div>
                    <div id='CashDivs' className='MinusCont'>
                        <span className='Minus'>-</span>
                    </div>
                    <div id='CashDivs' className='ReceivablesCont'>
                        <h3>RECEIVABLES</h3>
                        <div className='AmountBox'>23,363</div>
                    </div>
                    <div id='CashDivs' className='PlusCont'>
                        <span className='Plus'>+</span>
                    </div>
                    <div id='CashDivs' className='CashAndBank'>
                        <h3>CASH & BANK</h3>
                        <div className='AmountBox'>23,363</div>
                    </div>
                    <div id='CashDivs' className='EqualsCont'>
                        <span className='Equals'>=</span>
                    </div>
                    <div id='CashDivs' className='Balance'>
                        <h3>BALANCE</h3>
                        <div className='AmountBox'>13,433</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashedBalance
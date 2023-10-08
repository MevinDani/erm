import React from 'react'
import './BranchWiseSales.css'

const BranchWiseSales = () => {
    return (
        <div className='BranchWrapper'>
            <div className='BranchCont'>
                <div className='BranchMainHead'>
                    <h3>Branchwise sales (AED)</h3>
                </div>
                <div className='BranchTableCont'>
                    <table className='BranchTable' cellpadding="12" cellspacing="0">
                        <thead >
                            <tr>
                                <td>Branch name</td>
                                <td>Today Sales</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id='BranchTrId'>
                                <td>Industrial 4</td>
                                <td>2353</td>
                            </tr>
                            <tr id='BranchTrId'>
                                <td>Deira</td>
                                <td>7659</td>
                            </tr>
                            <tr id='BranchTrId'>
                                <td>Ghubaiba</td>
                                <td>6743</td>
                            </tr>
                            <tr id='BranchTrId'>
                                <td>Corniche</td>
                                <td>3343</td>
                            </tr>
                            <tr id='BranchTrId'>
                                <td>Al Quoz</td>
                                <td>9933</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BranchWiseSales
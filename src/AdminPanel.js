import React from 'react'
import './AdminPanel.css'
import { Link } from 'react-router-dom'


const AdminPanel = () => {
    return (
        <div className='admPanCont'>
            <div>
                <div className='items'>
                    <Link className="custom-link" to='/groupSales'>Group Sales</Link>
                </div>
                <div className='items'>
                    <Link className="custom-link" to='/deliveryPendItems'>Delivery Pending Items</Link>
                </div>
                <div className='items'>
                    <Link className="custom-link" to='/doInvoiced'>Delivery Order Invoiced</Link>
                </div>
                <div className='items'>
                    <Link className="custom-link" to='/latestInvoice'>Latest 500 Invoice List</Link>
                </div>
                <div className='items'>
                    <Link className="custom-link" to='/deliveryOrder'>Delivery Order</Link>
                </div>
            </div>
            <div>
                <div className='items'>
                    <Link className="custom-link" to='/todaysSales'>Todays Sales</Link>
                </div>
                <div className='items'>
                    <Link className="custom-link" to='/checkByDate'>CheckByDate</Link>
                </div>
                <div className='items'>
                    <Link className="custom-link" to='/branchWiseSales'>BranchWiseSales</Link>
                </div>
                <div className='items'>
                    <Link className="custom-link" to='/cashedBalance'>CashedBalance</Link>
                </div>
                <div className='items'>
                    <Link className="custom-link" to='/doughnut'>DoughnutChart</Link>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel
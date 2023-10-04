import React from 'react'
import './AdminPanel.css'
import { Link } from 'react-router-dom'


const AdminPanel = () => {
    return (
        <div className='admPanCont'>
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
                <Link className="custom-link" to='/deliveryOrder'> Delivery Order</Link>
            </div>
        </div>
    )
}

export default AdminPanel
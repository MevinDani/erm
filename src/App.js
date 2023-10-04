import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import DeviceNotValid from './DeviceNotValid';
import baseUrl from './baseurl';
import AdminPanel from './AdminPanel';
import GroupSales from './components/GroupSales';
import DeliveryOrder from './components/DeliveryOrder';
import DeliveryPendItems from './components/DeliveryPendItems';
import DOInvoiced from './components/DOInvoiced';
import LatestInvoice from './components/LatestInvoice';



const App = () => {

  const [isDeviceValidated, setDeviceValidation] = useState('')

  const cmpcode = localStorage.getItem("cmpcode")
  const publick = localStorage.getItem("publick")
  const privatek = localStorage.getItem("privatek")

  // fake user data
  const user = localStorage.getItem("user")

  const navigate = useNavigate();

  const getDeviceValidation = async () => {
    try {
      if (cmpcode || publick || privatek) {
        const result = await fetch(baseUrl + `DeviceValidator/CheckStatus?cmpcode=${cmpcode}&publick=${publick}&privatek=${privatek}`)
        const data = await result.json()
        setDeviceValidation(data.data[0].Column1)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDeviceValidation()
  }, [])

  useEffect(() => {
    if (isDeviceValidated == 'VALIDATED') {
      navigate('/login')
    } else if (isDeviceValidated == 'INVALID' || !cmpcode || !publick || !privatek) {
      navigate('/notValid');
    }
  }, [])

  return (
    <Routes>
      {
        user ?
          <>
            <Route path='/login' element={<AdminPanel />} />
            <Route path='/notValid' element={<AdminPanel />} />
            <Route path='/groupSales' element={< GroupSales />}></Route>
            <Route path='/adminPanel' element={<AdminPanel />} />
            <Route path='/deliveryOrder' element={<DeliveryOrder />} />
            <Route path='/deliveryPendItems' element={<DeliveryPendItems />} />
            <Route path='/doInvoiced' element={<DOInvoiced />} />
            <Route path='/latestInvoice' element={<LatestInvoice />} />
          </>
          : !user ?
            <Route path='/login' element={<Login />} />
            : ""
      }
      {
        isDeviceValidated === "INVALID" ?
          <Route path='/notValid' element={<DeviceNotValid />} /> : ""
      }

    </Routes >
  )
}

export default App


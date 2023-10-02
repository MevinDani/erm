import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import DeviceNotValid from './DeviceNotValid';
import baseUrl from './baseurl';


const App = () => {

  const [isDeviceValidated, setDeviceValidation] = useState('')

  const cmpcode = localStorage.getItem("cmpcode")
  const publick = localStorage.getItem("publick")
  const privatek = localStorage.getItem("privatek")

  const navigate = useNavigate();

  const getDeviceValidation = async () => {
    try {
      const result = await fetch(baseUrl + `DeviceValidator/CheckStatus?cmpcode=${cmpcode}&publick=${publick}&privatek=${privatek}`)
      const data = await result.json()
      setDeviceValidation(data.data[0].Column1)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDeviceValidation()
  }, [])

  useEffect(() => {
  }, [isDeviceValidated]);

  useEffect(() => {
    if (isDeviceValidated == 'VALIDATED') {
      navigate('/login')
    } else if (isDeviceValidated == 'INVALID') {
      navigate('/notValid');
    }
  }, [isDeviceValidated, navigate])

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/notValid' element={<DeviceNotValid />} />
    </Routes >
  )
}

export default App


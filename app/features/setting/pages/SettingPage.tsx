import React from 'react'
import SettingBar from '../components/SettingBar'
import { Outlet } from 'react-router'
const SettingPage = () => {
  return (
    <>
    <div className='flex'>
    <SettingBar/>
    <div className="flex-grow p-6 overflow-y-auto bg-gray-100">
            <Outlet />
          </div>
    </div>
      
    </>
  )
}

export default SettingPage
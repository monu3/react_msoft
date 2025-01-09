import React from 'react'
import Plan from '../components/Plan'
import AddPlan from '../components/AddPlan'

const Plans = () => {
  return (
    <div>
      <div className='flex justify-end'>
        <AddPlan />
      </div>

      <Plan plan={{
        employees: 0,
        clients: 0,
        duration: 0,
        price: 0,
        storage: 0,
        isEnabled: false
      }} />
    </div>
  )
}

export default Plans

import React from 'react'
import Calendar from './Calendar'
import updatedData from '../data/mock-moved-appointments.json'
import data from '../data/appointments.json'
import type { Appointment } from '@/data/types.ts'

const Page: React.FC = () => {
  return (
    <div className='flex w-screen min-h-screen gap-4 p-4'>
      <div className='w-1/2 h-screen'>
        <Calendar
          title='Before optimization'
          data={data as Appointment[]}
          location={'Linac_A2'}
          date='2023-08-07'
        />
      </div>
      <div className='w-1/2 h-screen'>
        <Calendar
          title='After optimization'
          data={updatedData as Appointment[]}
          location={'Linac_A2'}
          date='2023-08-07'
        />
      </div>
    </div>
  )
}

export default Page

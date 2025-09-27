import React from 'react'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '../components/ui/tooltip.tsx'
import Clock from './Clock.tsx'
import clusters from '../data/clusters.json'
import { STATE, type AppointmentInfo } from '@/data/types.ts'

const EventCard: React.FC<AppointmentInfo> = ({ event }) => {
  const { start, end } = event
  const {
    pat_id,
    state,
    last_notified_time: previousTime,
    duration,
    technique,
    technique_label: label,
  } = event.extendedProps

  const bgColor = clusters.find((el) =>
    el.activities.includes(technique)
  )?.color

  const formatDate = (date: Date) =>
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const isTimeModified = state?.modified === STATE.MODIFIED

  return (
    <div
      className='relative p-1 min-h-24 shadow-sm text-sm text-black'
      style={{ backgroundColor: bgColor }}
    >
      <div className='flex flex-col sm:flex-row items-start w-full font-bold'>
        <span className=''>{pat_id}</span>
        {isTimeModified && (
          <span
            className='bg-white/95 rounded md:backdrop-blur-sm font-bold inline-flex p-1 leading-none sm:ml-auto mt-2 sm:mt-0'
            style={{ color: bgColor }}
          >
            UPDATED
          </span>
        )}
      </div>
      <div>{label}</div>
      <div className='mt-1 flex items-center space-x-2 leading-4'>
        <span>
          {`${formatDate(start)}`} - {`${formatDate(end)}`}{' '}
        </span>

        {isTimeModified && (
          <Tooltip>
            <TooltipProvider>
              <TooltipTrigger>
                <Clock />
              </TooltipTrigger>
              <TooltipContent className='p-2'>
                {`The appointment time was updated from ${new Date(
                  previousTime
                ).toLocaleString()} to ${start.toLocaleString()}`}{' '}
              </TooltipContent>
            </TooltipProvider>
          </Tooltip>
        )}
      </div>
      <div>{`${duration} mins`}</div>
    </div>
  )
}

export default EventCard

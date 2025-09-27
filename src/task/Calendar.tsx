import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import EventCard from './EventCard.tsx'
import type { AppointmentInfo, Appointment } from '@/data/types.ts'

interface CalendarProps {
  title: string
  data: Appointment[]
  location: string
  date: string
}

const Calendar: React.FC<CalendarProps> = ({ title, data, location, date }) => {
  const renderEventContent = (eventInfo: AppointmentInfo): React.ReactNode => {
    const { event } = eventInfo
    return <EventCard event={event} />
  }

  const calendarEvents = data
    .filter((x) => x.location === location)
    .map(
      ({
        pat_id,
        technique,
        scheduled_time,
        duration,
        technique_label,
        state,
        last_notified_time,
      }) => {
        const start = new Date(scheduled_time)
        const end = new Date(start.getTime() + duration * 60000)
        return {
          start: start,
          end: end,
          extendedProps: {
            technique_label,
            duration,
            pat_id,
            technique,
            state,
            last_notified_time,
          },
        }
      }
    )

  return (
    <>
      <h2 className='text-base font-semibold text-center text-gray-800 m-2'>
        {title}
      </h2>
      <div className='max-w-[400px] mx-auto border rounded shadow'>
        <FullCalendar
          plugins={[listPlugin]}
          initialView='listDay'
          initialDate={date}
          events={calendarEvents}
          eventContent={renderEventContent}
          height='auto'
        />
      </div>
    </>
  )
}

export default Calendar

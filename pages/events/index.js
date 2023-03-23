import React from 'react'
import { getAllEvents } from '@/dummy-data'
import EventList from '../../components/EventsList'

const EventPage = () => {
  const events = getAllEvents()
  
  return (
    <div>
      <EventList events={events}/>
        
    </div>
  )
}

export default EventPage
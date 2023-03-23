import React from 'react'
import {useRouter} from 'next/router'
import { getEventById } from '@/dummy-data'
import SingleEventDetails from '@/components/SingleEventDetails'


const SingleEvent = () => {
  const router = useRouter()
  const eventId = router.query.eventId
  const event = getEventById(eventId)
  

  return (
    <div>
   
        <SingleEventDetails event={event}/>
    </div>
  )
}

export default SingleEvent
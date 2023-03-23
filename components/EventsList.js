import React from "react";
import SingleEvent from "./SingleEvent";
import {useRouter} from 'next/router'
import SearchEvent from "./SearchEvent";
const EventsList = ({ events }) => {
  // console.log(events);
  const router = useRouter()

  const searchFunc =(year,month) =>{
    const path = `/events/${year}/${month}`
    router.push(path)
  }
  return (
    <div className="w-full   flex justify-center items-center flex-col ">
      <SearchEvent searchFunc={searchFunc}/>
      <ul className="flex flex-col p-1 mt-12  lg:p-12 md:p-8 w-full lg:w-3/4 ">
        {events.map((event) => (
          <SingleEvent single={event} />
        ))}
      </ul>
    </div>
  );
};

export default EventsList;

import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Link from 'next/link'

const SingleEventDetails = ({event}) => {
    console.log(event);
     const newDate = new Date(event.date).toLocaleDateString("en-US", {
       day: "numeric",
       month: "long",
       year: "numeric",
     });
     const newLocation = event.location.replace(",", "\n");
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${event.image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-center text-neutral-content flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="mb-5 text-5xl font-bold whitespace-nowrap text-white ">
            {event.title}
          </h1>
          <div className="card card-compact bg-base-300 rounded shadow-2xl m-4 p-2 flex flex-row w-3/4 p-8">
            <div className="card-body  border-b-4 border-accent p-8 m-4">
              <span className="text-2xl text-accent ">
                <BsFillCalendarDateFill />
              </span>
              <p className="text-primary text-2xl text-start whitespace-nowrap">
                {newDate}
              </p>
            </div>
            <div className="card-body  border-b-4 border-accent p-8 m-4 ">
              <span className="text-2xl text-accent ">
                <FaLocationArrow />
              </span>
              <p className="text-secondary text-xl text-start w-fit">
                {newLocation}
              </p>
            </div>
          </div>
          <div className="p-4 m-4 text-xl font-bold text-white w-3/4 ">
            <p>{event.description}</p>
          </div>
          <Link href='./' className="btn btn-accent w-1/2">Back To Events...</Link>
        </div>
      </div>
    </div>
  );
}

export default SingleEventDetails
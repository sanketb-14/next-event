import React from 'react'
import Link from 'next/link'
import {FaLocationArrow} from 'react-icons/fa'
import {BsFillCalendarDateFill} from 'react-icons/bs'
const SingleEvent = ({single}) => {
   

    const newDate = new Date(single.date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'

    })
    const newLocation = single.location.replace(',','\n')
    const exploreLink = `/events/${single.id}`
  return (
    <li
      key={single.id}
      className="card card-compact lg:card-side  bg-base-300 shadow-xl m-4 flex flex-col"
    >
      <figure>
        <img src={single.image} alt={single.title} />
      </figure>
      <div className=" card-body ">
        <h2 className="card-title font-bold text-primary">
          {single.title}
          <div className="badge badge-secondary w-fit h-fit text-sm lg:text-base">
            <span className="text-xl m-1 ">
              {" "}
              <BsFillCalendarDateFill />
            </span>
            {newDate}
          </div>
        </h2>
        <p className="w-fit p-4 ">
          <span className="text-lg font-bold">
            Details :- <br />
          </span>
          {single.description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline  text-primary-focus h-fit w-fit bg-base-200 m-3">
            <span className="text-lg font-bold mx-4 flex text-center text-accent">
              Address:
              <span className=" m-2 text-accent">
                <FaLocationArrow />
              </span>
            </span>

            {newLocation}
          </div>
          <Link href={exploreLink} className="btn btn-secondary ">
            Explore More...
          </Link>
        </div>
      </div>
    </li>
  );
}

export default SingleEvent
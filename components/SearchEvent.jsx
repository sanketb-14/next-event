import React, { useRef } from "react";
import { getAllEvents } from "@/dummy-data";

const SearchEvent = (props) => {
  const events = getAllEvents();
  const yearInput = useRef();
  const monthInput = useRef();

  const dateArray = [
    ...new Set(
      events.map((event) =>
        new Date(event.date).toLocaleDateString("en-Us", {
          year: "numeric",
        })
      )
    ),
  ];
  const monthArray = [...new Set(events.map((event) => 
    new Date(event.date).toLocaleDateString("en-Us", {
      month: "numeric",
    })
   
  ))]
   const monthStr = [
     ...new Set(
       events.map((event) =>
         new Date(event.date).toLocaleDateString("en-Us", {
           month: "long",
         })
       )
     ),
   ];

 

  const submitHandler = (e) => {
    e.preventDefault();
    const selectedYear = yearInput.current.value;
    const selectedMonth = monthInput.current.value;
    props.searchFunc(selectedYear, selectedMonth);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="form-control w-full flex justify-center items-center flex-row m-4"
    >
      <label htmlFor="year" className="text-2xl font-semibold text-accent">
        Year
      </label>
      <select
        id="year"
        className="select select-primary accent w-full max-w-xs mx-3"
        ref={yearInput}
      >
        {dateArray.map((year, i) => {
          return (
            <option
              key={i}
              value={year}
              className="p-2 m-1 text-lg text-secondary"
            >
              {year}
            </option>
          );
        })}
      </select>
      <label htmlFor="year" className="text-2xl font-semibold text-accent">
        Month
      </label>
      <select
        id="year"
        className="select select-primary accent w-full max-w-xs"
        ref={monthInput}
      >
        {monthArray.map((month, i) => {
          return (
            <option
              key={i}
              value={month}
              className="p-2 m-1 text-lg text-secondary"
            >
              {month}
            </option>
          );
        })}
      </select>
      <button className="btn btn-secondary mx-2" type="submit">
        Find Event
      </button>
    </form>
  );
};

export default SearchEvent;

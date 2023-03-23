import React from "react";
import { useRouter } from "next/router";
// import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";
import { getFilteredEvents } from "@/dummy-data";
import EventsList from "@/components/EventsList";
import SearchEvent from "@/components/SearchEvent";

const FilterEvent = () => {
  const router = useRouter();
  const filterData = router.query.FilterEvent
 
  

  if (!filterData) {
    return (
      <div className="flex justify-center items-center h-screen w-full h-screen">
        <ClipLoader
          color={"#123abc"}
          loading={filterData}
          css="border-color: red;"
          size={150}
        />
      </div>
    );
  }
  const year = +filterData[0]
  const month = +filterData[1]
  
  const data = getFilteredEvents({year,month})
   const searchFunc = (year, month) => {
     const path = `/events/${year}/${month}`;
     router.push(path);
   };
  
  if(data.length === 0){
    console.log("no event");
    return <div className="w-full h-screen flex justify-start flex-col items-center">
      <SearchEvent searchFunc={searchFunc}/>
      <h1 className="text-4xl text-semibold text-error mt-40 ">No events Found....Try other date</h1>
    </div>
  }

 

  return (
    <div>
      <EventsList events={data}/>

    </div>
    // <div>
    //   <h1 className="text-3xl">Filter Event</h1>
    // </div>
  );
};

export default FilterEvent;

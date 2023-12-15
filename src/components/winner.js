import React from "react";

const Winner = ( {win}) => {
  return(
    <>
  <section className="w-[40%]">
   
    <h1 className="text-white text-[3rem] text-center ">
      {win}
    </h1>
  </section>
  
  </>
  )
}

export default Winner;
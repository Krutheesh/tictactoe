import React from "react";

const Score = ({score,icon,player,choose} ) => {
  return (
    <>
    <section className="my-6 mx-[3rem] w-[20%]  text-center ">
      <div className="border-orange-700">
        <p className="bg-white text-center p-1 ">{player}</p>
        <p className=" text-center bg-sky-700 text-white p-1">{score}</p>
      </div>
      
      <div className="bg-white my-4 text-sky-600  text-center py-10 h-[10rem] ">
        <div className="text-[5rem] text-center w-[40%] m-auto">
           {icon}
        </div>
        <p className="text-[1.2rem] py-1.5">{choose}</p>
      </div>
    </section>
    </>
    
  )
}
export default Score;
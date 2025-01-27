"use client";
import React from "react";
import Countdown, { zeroPad } from "react-countdown";

const endingDate = new Date("2025-02-14");
const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className=" flex gap-2 font-bold text-3xl md:text-5xl text-yellow-300">
      <span>
        {zeroPad(days)}
        <small className="text-white">j</small> :
      </span>
      <span>
        {zeroPad(hours)}
        <small className="text-white">h</small> :
      </span>
      <span>
        {zeroPad(minutes, 2)}
        <small className="text-white">min</small> :
      </span>
      <span>
        {zeroPad(seconds)}
        <small className="text-white">s</small>
      </span>
    </div>
  );
};
const CountDown = () => {
  return (
    <Countdown
      // className="font-bold text-5xl text-yellow-300"
      date={endingDate}
      renderer={renderer}
    />
  );
};

export default CountDown;

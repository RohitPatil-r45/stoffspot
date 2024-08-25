import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Accordian = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <div
        className="w-full py-4 border-t border-black flex justify-between"
        onClick={() => setShowInfo(!showInfo)}
      >
        <b>{title}</b>
        <FaChevronDown className={showInfo ? "mr-4 rotate-180" : "mr-4"} />
      </div>
      {showInfo && <p>{info}</p>}
    </>
  );
};

export default Accordian;

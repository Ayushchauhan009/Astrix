import React from "react";
import { asterisk } from "../assets/images";

const VerticalScrollComponent = () => {
  return (
    <div className="relative ">
      <div className="absolute max-w-[1200px] md:left-[-210%] mdh:left-[-185%] mdh:top-[190px] xl:left-[-135%] sm:left-[-220%] smg:left-[-165%]  mx-auto sm:top-[218px] smg:top-[190px] lg:top-[216px] transform rotate-90 left-[-135%] xxl:left-[-125%] h-[-2330px] w-[165.5vw]">
        <div className="bg-blue-600 overflow-hidden px-3 flex space-x-20">
          <div className="  py-8">
            <p
              className=" font-bold flex  text-[32px] whitespace-nowrap"
              style={{ animation: "scroll 20s linear infinite" }}
            >
              Event: Oasis Bus Tour, JLN Stadium, New Delhi{" "}
              <img src={asterisk} alt="" className="w-12 h-auto ml-7" />
            </p>
          </div>
          <div className="  py-8">
            <p
              className=" font-bold  text-[32px] whitespace-nowrap"
              style={{ animation: "scroll 20s linear infinite" }}
            >
              Collection Live : Meta Lives, Live on 04/03/2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalScrollComponent;

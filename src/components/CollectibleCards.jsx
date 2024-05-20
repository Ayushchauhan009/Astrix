import React from "react";

const CollectibleCard = ({ image, year, author, title }) => {
  return (
    <div className="collectible-card w-[135px] lg:w-[150px] bg-[#B8A0FE] py-2 px-2 rounded-lg">
      <div className="header flex justify-between items-center mb-2">
        <span className="year bg-black rounded-full text-[8px] text-white text-xs py-1 px-2 ">
          {year}
        </span>
        <span className="author text-black font-semibold text-[10px]">{`By ${author}`}</span>
      </div>
      <h4 className="title text-black text-xs text-center mb-2 font-bold">
        {title}
      </h4>
      <img
        src={image}
        alt={title}
        className="w-full h-auto border object-cover border-black border-opacity-70 rounded-lg"
      />
    </div>
  );
};

export default CollectibleCard;

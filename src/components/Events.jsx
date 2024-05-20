import React from "react";

import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { a1, a2, a3, qr } from "../assets/images";

const EventsComponent = () => {
  return (
    <div className="collections-container text-white p-8 bg-[#1a1a1a] rounded-lg">
      <h2 className="text-2xl leading-[36px] font-bold mb-4">
        Explore Your First <br /> Event
      </h2>
      <h1 className="font-bold text-[42px] leading-[52px] lg:leading-[76px] lg:text-[60px]">
        Event Name
      </h1>
      <div className="flex flex-col lg:flex-row lg:items-center my-4 font-semibold space-y-5 lg:space-y-[-16px] lg:space-x-10">
        <div className="flex items-center lg:mb-4">
          <FaMapMarkerAlt className="text-[#fff] text-xl mr-1" />
          <span className="text-xl">Venue</span>
        </div>
        <div className="flex items-center lg:mb-4">
          <FaCalendarAlt className="text-xl text-[#fff] mr-1" />
          <span className="text-xl">04/03/24</span>
        </div>
        <div className="flex items-center mb-4">
          <FaClock className="text-xl text-[#fff] mr-1" />
          <span className="text-xl">19:00</span>
        </div>
      </div>
      <p className="text-lg  lg:w-[350px] mb-4">
        Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed
        ipsum. Pellentesque mattis condimentum ut nulla.
      </p>

      <div>
        <h5 className="text-3xl font-semibold mt-10 text-white">
          Artist Lineup
        </h5>
      </div>
      <div className="grid grid-cols-3 mt-10 gap-2 lg:gap-8">
        <div className="collectible-card w-[90px] lg:w-[150px]  rounded-lg">
          <img
            src="https://source.unsplash.com/random/800x600?sig=11"
            alt="artist 1"
            className="w-[200px] h-[100px] lg:h-[150px] object-cover rounded-xl"
          />
        </div>
        <div className="collectible-card  w-[90px] lg:w-[150px]  rounded-lg">
          <img
            src="https://source.unsplash.com/random/800x600?sig=12"
            alt="artist 2"
            className="w-[200px] h-[100px] lg:h-[150px] object-cover scale-125  rounded-xl"
          />
        </div>
        <div className="collectible-card w-[90px] lg:w-[150px] rounded-lg">
          <img
            src="https://source.unsplash.com/random/800x600?sig=13"
            alt="artist 3"
            className="w-[200px] h-[100px] lg:h-[150px] object-cover  rounded-xl"
          />
        </div>
      </div>
      <div className="flex mt-20 items-center justify-between ">
        <img
          src={qr} // Replace with your QR code image URL
          alt="QR Code"
          className="w-20 h-20 lg:w-28 bg-white rounded-xl lg:h-28 p-2" // Adjust size as needed
        />
        <button className="text-[#1a1a1a] font-bold py-3 px-4 lg:px-6 text-base lg:text-xl rounded-full bg-[#FFCA5F]">
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default EventsComponent;

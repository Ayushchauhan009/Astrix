import React, { useState } from "react";
import HomePage from "./HomePage";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
} from "../assets/images";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleButtonClick = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative max-w-[1440px] mx-auto">
      <div className="z-20 absolute font-poppins left-10 top-6">
        <h2
          className={`font-bold duration-1000 transform text-[48px] text-left ${
            !isLoading ? "text-[#FFCA5F]" : "text-[#1a1a1a]"
          } `}
        >
          Astrix.
        </h2>
      </div>
      <div
        onClick={handleButtonClick}
        className={`flex flex-col font-poppins absolute top-0 z-10 w-full items-center justify-center px-20 h-screen bg-[#f1f1f1] transition-transform duration-1000 ${
          isLoading ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-center flex justify-center space-x-6 capitalize text-4xl lg:text-6xl leading-[60px] font-bold">
          <p className="pt-5">WE ORGANIZE A</p>
          <AnimatedImage src="https://source.unsplash.com/random/800x600?sig=1" />{" "}
        </div>
        <div className="capitalize items-center flex justify-center space-x-6 text-4xl lg:text-6xl leading-[60px] font-bold">
          <p className="pt-5"> CONNECTION </p>
          <AnimatedImage2 src="https://source.unsplash.com/random/800x600?sig=1" />{" "}
        </div>
        <div className="capitalize items-center flex justify-center space-x-6 text-4xl lg:text-6xl leading-[60px] font-bold">
          <AnimatedImage src="https://source.unsplash.com/random/800x600?sig=2" />{" "}
          <p className="pt-5"> BETWEEN</p>
          <AnimatedImage2 src="https://source.unsplash.com/random/800x600?sig=3" />
          <p className="whitespace-nowrap pt-5">MUSIC </p>{" "}
        </div>
        <div className="capitalize items-center flex justify-center space-x-6 text-4xl lg:text-6xl leading-[60px] font-bold">
          <p className="pt-5"> ARTIST </p>
          <AnimatedImage src="https://source.unsplash.com/random/800x600?sig=4" />{" "}
          <p className="pt-5"> CULTURE </p>
          <AnimatedImage2 src="https://source.unsplash.com/random/800x600?sig=5" />
        </div>
        <div className="capitalize items-center flex justify-center space-x-6 text-4xl lg:text-6xl leading-[60px] font-bold">
          <AnimatedImage src="https://source.unsplash.com/random/800x600?sig=6" />{" "}
          <p className="pt-5"> ART </p>
          <AnimatedImage2 src="https://source.unsplash.com/random/800x600?sig=7" />
          <p className="pt-5"> &</p>
          <p className="pt-5"> COLLECTIONS</p>
        </div>
        <button className="mt-10 lg:mt-20 font-normal text-[#1a1a1a] text-xl">
          Click to Enter*
        </button>
      </div>
      {!isLoading && (
        <div className="">
          <HomePage />
        </div>
      )}
    </div>
  );
};

const AnimatedImage = ({ src }) => {
  return (
    <div className="inline-block mx-1 mt-7">
      <img
        src={src}
        alt="placeholder"
        className="transition-all transform origin-left duration-500 ease-in-out object-cover animate-wiggle"
        style={{ width: "8rem", height: "4rem" }}
      />
    </div>
  );
};

const AnimatedImage2 = ({ src }) => {
  return (
    <div className="inline-block mx-1 mt-7">
      <img
        src={src}
        alt="placeholder"
        className="transition-all transform origin-right duration-500 ease-in-out object-cover animate-wiggle2"
        style={{ width: "8rem", height: "4rem" }}
      />
    </div>
  );
};

export default Loading;

import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import EventsComponent from "./Events";
import CollectionsComponent from "./Collections";
import { asterisk, im1, im2, im3, im4, im5 } from "../assets/images";
import VerticalScrollComponent from "./VerticalScrollComponent";
import VerticalScrollComp2 from "./VerticalScrollComp2";

const images = [
  { src: "https://picsum.photos/800/600?random=1", title: "Event 1" },
  { src: "https://picsum.photos/800/600?random=2", title: "Event 2" },
  { src: "https://picsum.photos/800/600?random=3", title: "Event 3" },
  { src: "https://picsum.photos/800/600?random=4", title: "Event 4" },
  {
    src: "https://picsum.photos/800/600?random=5",
    title: "Event 5",
  },
];

const images2 = [
  {
    src: "https://picsum.photos/800/600?random=7",
    title: "Collection 1",
  },
  {
    src: "https://picsum.photos/800/600?random=8",
    title: "Collection 2",
  },
  {
    src: "https://picsum.photos/800/600?random=9",
    title: "Collection 3",
  },
  {
    src: "https://picsum.photos/800/600?random=10",
    title: "Collection 4",
  },
  {
    src: "https://picsum.photos/800/600?random=11",
    title: "Collection 5",
  },
];

const HomePage = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === (activeButton === 0 ? images.length : images2.length) - 1
          ? 0
          : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [activeButton]);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    setCurrentImageIndex(0);
  };

  return (
    <div className="pb-40 bg-[#1a1a1a] px-2  lg:px-10 font-poppins">
      <div className="flex space-x-4 lg:space-x-10">
        <div className="slider-container pt-32">
          <div className="bg-text text-gray-400 top-44 left-10 font-bold text-[120px] absolute inset-0">
            {activeButton === 0 ? "Astrix Events" : "Astrix Collections"}
          </div>
          <div
            className="slider"
            style={{
              transform: `translateX(-${
                currentImageIndex * (250 / images.length)
              }%)`,
            }}
          >
            {(activeButton === 0 ? images : images2).map((image, index) => (
              <div key={index} className="slider-item relative">
                <h2
                  className={`text-white text-2xl font-bold mb-2 ${
                    index === currentImageIndex ? "visibility" : "invisibility"
                  }`}
                >
                  {image.title}
                </h2>
                <img src={image.src} alt={`Slide ${index}`} />
                {index !== currentImageIndex && activeButton === 0 && (
                  <div className="overlay absolute transtion-all duration-700 inset-0  flex items-end pb-10 justify-start px-10 ">
                    <div className="text-white space-y-10">
                      <span className="text-white text-4xl font-bold">
                        Event Name
                      </span>
                      <div className="flex items-center space-x-3 lg:mb-4">
                        <FaMapMarkerAlt className="text-[#fff] text-2xl mr-1" />
                        <span className="text-2xl">Location</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[40%] relative pt-0">
          {activeButton === 0 ? (
            <VerticalScrollComponent />
          ) : (
            <VerticalScrollComp2 />
          )}

          {activeButton === 0 ? <EventsComponent /> : <CollectionsComponent />}
        </div>
      </div>
      <div className="button-container text-xl font-semibold rounded-full">
        <button
          className={`buttonClass ${activeButton === 0 ? "" : ""}`}
          onClick={() => handleButtonClick(0)}
        >
          Events
        </button>
        <button
          className={`buttonClass  ${activeButton === 1 ? "" : ""}`}
          onClick={() => handleButtonClick(1)}
        >
          Collections
        </button>
        <div className={`btn  ${activeButton === 1 ? "right" : "left"}`}></div>
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import CollectibleCard from "./CollectibleCards";
// import './CollectionsComponent.css'; // Ensure to create and import the CSS file

const collectibles = [
  {
    image: "https://picsum.photos/200/200?random=23",
    year: "2024",
    author: "Pablo",
    title: "Collectible Name",
  },
  {
    image: "https://picsum.photos/200/200?random=22",
    year: "2024",
    author: "Pablo",
    title: "Collectible Name",
  },
  {
    image: "https://picsum.photos/200/200?random=21",
    year: "2024",
    author: "Pablo",
    title: "Collectible Name",
  },
];

const CollectionsComponent = () => {
  return (
    <div className="collections-container text-white p-8 bg-[#1a1a1a] rounded-lg">
      <h2 className="text-2xl leading-[36px] font-bold mb-4">
        Explore Your First <br /> Collectible
      </h2>
      <h1 className="font-bold text-[42px] lg:text-[60px]">Meta Lives</h1>
      <h3 className="text-2xl font-semibold my-3">Live in Astrix</h3>
      <p className="text-lg  lg:w-[350px] mb-4">
        Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed
        ipsum. Pellentesque mattis condimentum ut nulla.
      </p>
      <div className="lg:flex  items-center">
        <div className="flex mb-3 -space-x-4">
          <img
            src="https://picsum.photos/40/40?random=19"
            alt="Interested People"
            className="w-12 h-12 border-2 border-white rounded-full "
          />
          <img
            src="https://picsum.photos/40/40?random=18"
            alt="Interested People"
            className="w-12 h-12 border-2 border-white rounded-full object-cover "
          />
          <img
            src="https://picsum.photos/40/40?random=17"
            alt="Interested People"
            className="w-12 h-12 border-2 border-white rounded-full object-cover "
          />
          <img
            src="https://picsum.photos/40/40?random=16"
            alt="Interested People"
            className="w-12 h-12 border-2 border-white rounded-full object-cover "
          />
          <img
            src="https://picsum.photos/40/40?random=15"
            alt="Interested People"
            className="w-12 h-12 border-2 border-white rounded-full object-cover "
          />
        </div>
        <span className="text-lg pt-2 lg:pt-0 font-bold ml-2">
          22k people interested
        </span>
      </div>
      <div>
        <h5 className="text-base font-bold mt-10 text-white">Collectibles</h5>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 my-3 gap-x-[-20px] gap-y-2 sm:gap-y-4  lg:gap-8">
        {collectibles.map((collectible, index) => (
          <CollectibleCard
            key={index}
            image={collectible.image}
            year={collectible.year}
            author={collectible.author}
            title={collectible.title}
          />
        ))}
      </div>
      <div className="flex mt-20 justify-end ">
        <button className="text-[#1a1a1a] font-bold py-3 px-6 text-xl rounded-full bg-[#FFCA5F]">
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default CollectionsComponent;

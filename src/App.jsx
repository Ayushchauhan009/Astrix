import React, { useState } from "react";
import { Loading, HomePage } from "./components";
// Ensure this CSS file is imported for animations

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative bg-[#1a1a1a] ">
      <div className="">
        <Loading
          onLoadingComplete={handleLoadingComplete}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default App;

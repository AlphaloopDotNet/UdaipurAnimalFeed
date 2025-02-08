import React from "react";
import HeroSection from "../components/HeroSection";
import NGOSections from "../components/NGOSections";


const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="px-6 lg:px-8 ">
        <NGOSections/>
      </div>
    </>
  );
};

export default Home;

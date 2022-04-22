import React, { Component } from "react";
import SectionName from "./SectionName";

const MoviesSection = () => {
  return (
    <div>
      <SectionName sectionName={"Popular on Netflix"} />
      <SectionName sectionName={"Tranding Now"} />
      <SectionName sectionName={"Violent Suspense TV Programmes"} />
    </div>
  );
};

export default MoviesSection;

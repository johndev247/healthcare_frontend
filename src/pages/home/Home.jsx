import React from "react";
import health from "../../assets/healthtest.jpg";
import {MidSecImage} from "../../components/header/header.style";
import {AboutSection} from "../about/about.style";

const Home = () => {
  return (
    <AboutSection>
      <MidSecImage src={health} />
    </AboutSection>
  );
};

export default Home;

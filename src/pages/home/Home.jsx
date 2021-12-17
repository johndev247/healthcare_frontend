import React from "react";
import health from "../../assets/healthtest.jpg";
import {MidSecImage} from "../../components/header/header.style";

const Home = () => {
  return (
    <div>
      <MidSecImage src={health} />
    </div>
  );
};

export default Home;

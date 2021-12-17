import React from "react";
import {
  ResearchImage,
  ResearchSection,
  ResearchText,
  ResearchTextBg,
} from "./reseaches.style";
import researchImage from "../../assets/health.png";

const Researches = () => {
  return (
    <ResearchSection>
      <ResearchTextBg>
        <h2
          style={{
            padding: 0,
            margin: 2,
            textAlign: "center",
            color: "#152878",
            fontWeight: 600,
          }}
        >
          Our Reseach
        </h2>
        <ResearchText>
          Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan
          tincidunt. Curabitur aliquet quam id dui posuere blandit. Vestibulum
          ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris
          blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit
          tortor eget felis porttitor volutpat. Donec rutrum congue leo eget
          malesuada. Cras ultricies ligula sed magna dictum porta. Pellentesque
          in ipsum id orci porta dapibus. Proin eget tortor risus. Donec rutrum
          congue leo eget malesuada. Donec rutrum congue leo eget malesuada.
        </ResearchText>
      </ResearchTextBg>
      <ResearchImage src={researchImage} />
    </ResearchSection>
  );
};

export default Researches;

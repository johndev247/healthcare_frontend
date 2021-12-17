import React from "react";
import {AboutImage, AboutSection, AboutTextBg, AboutText} from "./about.style";
import aboutpic from "../../assets/medicine.svg";

const About = () => {
  return (
    <AboutSection>
      <AboutTextBg>
        <h2
          style={{
            padding: 0,
            margin: 2,
            textAlign: "center",
            color: "#152878",
            fontWeight: 600,
          }}
        >
          About Us
        </h2>
        <AboutText>
          Lorem Ipsum, Proin eget tortor risus. Cras ultricies ligula sed magna
          dictum porta. Cras ultricies ligula sed magna dictum porta. Cras
          ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet
          quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur aliquet quam id dui posuere
          blandit.
        </AboutText>
      </AboutTextBg>
      <AboutImage src={aboutpic} />
    </AboutSection>
  );
};

export default About;

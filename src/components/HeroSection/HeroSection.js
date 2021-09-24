import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";
import { Button } from "../ButtonElement";
import metadata from "../data/metadata.json";

const data = metadata;

function btnClick() {
  window.open(data.home.capabilities);
}

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Providing the Best Solutions For All Your Needs</HeroH1>
        <HeroP>
          Look at what we have to offer today compared to our competitors in the
          industry to see the difference we are making. Businesses are making
          the switch faster than ever before.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            onClick={btnClick}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            See for yourself
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

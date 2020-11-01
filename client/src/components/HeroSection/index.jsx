import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  LineH,
} from './HeroElements'

import hero from '../../images/hero1.jpg';
// import hero1 from '../../images/hero1.jpg';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg src={hero} alt="brand" />
      </HeroBg>
      <HeroContent>
        <ScrollAnimation animateIn='fadeIn' duration={5}>
          <HeroH1>High Quality Physio-therapy Services</HeroH1>
        </ScrollAnimation>
        <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
          <HeroP>
            Get our quality product by get in touch with us for your orders.
          </HeroP>
          <LineH />
        </ScrollAnimation>
        {/* <HeroBtnWrapper>
          <Button
            to="/" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true"
            smooth="true"
            duration={500}
            spy="true"
            exact="true"
            offset={-80}
            big="true"
          >
            MAKE AN APPOINTMENT
          </Button>
        </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

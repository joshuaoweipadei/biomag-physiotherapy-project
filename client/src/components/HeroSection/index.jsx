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

import hero from '../../images/hero.jpg';

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
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

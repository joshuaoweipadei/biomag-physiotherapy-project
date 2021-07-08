import React from 'react'
// import ScrollAnimation from 'react-animate-on-scroll';
import {
  AboutContainer,
  AboutRow,
  AboutRight,
  AboutRightWrapper,
  AboutRightCard,
  AboutRightH1,
  AboutRightH4,
  AboutRightVisionCard,
  AboutRightVisionContainer,
  AboutRightVisionImg,
  AboutRightVisionContent,
  AboutRightVisionH1,
  AboutLeft,
  AboutLeftWrapper,
  AboutLeftCard,
  AboutLeftCardIcon1,
  AboutLeftCardIcon2,
  AboutLeftCardIcon3,
  AboutLeftCardIcon4,
  AboutLeftCardH1,

  Para,
  Button
} from './AboutUsElements'

import doctor from '../../images/products/product6.jpeg';

const AboutUs = () => {
  return (
    // <ScrollAnimation animateIn='fadeIn'>
      <AboutContainer id="about">
        <AboutRow>
          <AboutLeft>
            <AboutLeftWrapper>
              <AboutLeftCard>
                <AboutLeftCardIcon1/>
                <AboutLeftCardH1>Easy Booking</AboutLeftCardH1>
                <Para>Get an appointment in a few clicks</Para>
              </AboutLeftCard>
              <AboutLeftCard>
                <AboutLeftCardIcon2/>
                <AboutLeftCardH1>Qualified Team</AboutLeftCardH1>
                <Para>4+ years of experience</Para>
              </AboutLeftCard>
              <AboutLeftCard>
                <AboutLeftCardIcon3/>
                <AboutLeftCardH1>Flexible Schedule</AboutLeftCardH1>
                <Para>Our doctors are always available</Para>
              </AboutLeftCard>
              <AboutLeftCard>
                <AboutLeftCardIcon4/>
                <AboutLeftCardH1>Best Price Guarantee</AboutLeftCardH1>
                <Para>No overpriced services</Para>
              </AboutLeftCard>
            </AboutLeftWrapper>
          </AboutLeft>

          <AboutRight>
            <AboutRightWrapper>
              <AboutRightCard>
                <AboutRightH1>About Us</AboutRightH1>
                <AboutRightH4>Biomag Physiotherapy & Orthopedic Services</AboutRightH4>
                <Para spaceLetter>
                  We are a wellness company that is focused on bringing general wellness to individuals through natural medicine and therapy.
                  Biomag Physiotherapy and Orthopedic Services help individuals obtain physical, emotional, mental and spiritual wellness through physiotherapy, nutritional therapy, hydrotherapy and psychotherapy.
                </Para>
                <AboutRightVisionCard>
                  <AboutRightVisionContainer>
                    <AboutRightVisionImg src={doctor} alt="img" />
                  </AboutRightVisionContainer>
                  <AboutRightVisionContent>
                    <AboutRightVisionH1>Our Vision</AboutRightVisionH1>
                    <Para spaceLetter justify>Our main and long term goal is achieving long and lasting satisfactory results for your physical, nutritional, psychological, emotional and spiritual wellbeing.</Para>
                    <div style={{marginTop:"55px"}}>
                      <Button 
                        to="/scalar-energy-wellness"
                      >Scalar Energy Wellness & Health</Button>
                    </div>
                  </AboutRightVisionContent>
                </AboutRightVisionCard>
              </AboutRightCard>
            </AboutRightWrapper>
          </AboutRight>
        </AboutRow>
      </AboutContainer>
    // </ScrollAnimation>
  )
}

export default AboutUs

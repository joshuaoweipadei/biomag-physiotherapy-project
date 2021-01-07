import React from 'react'
import {
  FooterContainer,
  FooterWrapper,
  FooterTop,
  FooterTopRow,
  ContactAddress,
  ServicesH2,

  AddressPhone,
  AddressPhoneIcon,
  AddressEmailIcon,
  AddressLocationIcon,
  AddressText,

  ContactItem,
  ContactList,
  ContactLink,

  DayRow,
  Day,
  Time,

  FooterContainerBottom,
  FooterBottom,
  FooterLeft,
  FooterP,
  FooterRight,
  SocialWrapper,
  SocialItems,
  SocialLink,
  Facebook,
  Twitter,
  Instagram
} from './FooterElements'

const Footer = () => {
  return (
    <>
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <FooterTopRow>
            <ContactAddress>
              <ServicesH2>Contact Address</ServicesH2>
              <AddressPhone>
                <AddressPhoneIcon />
                <AddressText>+234 7069403480</AddressText>
              </AddressPhone>
              <AddressPhone>
                <AddressEmailIcon />
                <AddressText>info@biomagtherapy.com</AddressText>
              </AddressPhone>
              <AddressPhone>
                <AddressLocationIcon />
                <AddressText>6 Olorunleke Street, Ipaja, <br/> Lagos State, Nigeria.</AddressText>
              </AddressPhone>
            </ContactAddress>

            <ContactAddress>
              <ServicesH2>Company</ServicesH2>
              <ContactItem>
                <ContactList>
                  <ContactLink
                    to="home"
                    smooth="true"
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >Home</ContactLink>
                </ContactList>
                <ContactList>
                  <ContactLink
                    to="about"
                    smooth="true"
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >About</ContactLink>
                </ContactList>
                <ContactList>
                  <ContactLink
                    to="services"
                    smooth="true"
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >Services</ContactLink>
                </ContactList>
                {/* <ContactList>
                  <ContactLink
                    to="product"
                    smooth="true"
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >Product</ContactLink>
                </ContactList> */}
              </ContactItem>
            </ContactAddress>

            <ContactAddress>
              <ServicesH2>Opening Hours</ServicesH2>
              <DayRow>
                <Day>Weekdays</Day>
                <Time>8am - 4:30pm</Time>
              </DayRow>
              <DayRow>
                <Day>Saturdays</Day>
                <Time>10am - 6pm</Time>
              </DayRow>
              <DayRow>
                <Day>Sundays</Day>
                <Time>1:30pm - 5pm</Time>
              </DayRow>
            </ContactAddress>
          </FooterTopRow>
        </FooterTop>
      </FooterWrapper>
    </FooterContainer>

    <FooterContainerBottom>
      <FooterBottom>
        <FooterLeft>
          <FooterP>
            Copyright &copy; 2020. All Rights Reserved by BioMAG
          </FooterP>
        </FooterLeft>
        <FooterRight>
          <SocialWrapper>
            <SocialItems>
              <SocialLink>
                <Facebook />
              </SocialLink>
              <SocialLink>
                <Twitter />
              </SocialLink>
              <SocialLink>
                <Instagram />
              </SocialLink>
            </SocialItems>
          </SocialWrapper>
        </FooterRight>
      </FooterBottom>
    </FooterContainerBottom>
    </>
  )
}

export default Footer

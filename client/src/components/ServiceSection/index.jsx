import React from 'react'
import {
  ServicesContainer,
  ServicesRow,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon1,
  ServicesIcon2,
  ServicesIcon3,
  ServicesH2,
  ServicesP
} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesRow>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon1 />
            <ServicesH2>Reduce Expernses</ServicesH2>
            <ServicesP>I've found a design that I like, but it doesn't include ecommerce or multilingual features.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon2 />
            <ServicesH2>Reduce Expernses</ServicesH2>
            <ServicesP>I've found a design that I like, but it doesn't include ecommerce or multilingual features.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon3 />
            <ServicesH2>Reduce Expernses</ServicesH2>
            <ServicesP>I've found a design that I like, but it doesn't include ecommerce or multilingual features.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesRow>
    </ServicesContainer>
  )
}

export default Services
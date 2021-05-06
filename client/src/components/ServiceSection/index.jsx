import React from 'react'
import {
  ServicesContainer,
  ServicesRow,
  ServicesH1,
  ServicesDetails,
  ServicesInfo,
  ServicesItemBox,
  ServicesItemIcon,
  ServicesItem,
  ServicesAddress,
  ServicesAddressH2,
  ServicesAddressP,
  ServicesWrapper,
  ServicesCard,
  ServicesHeader,
  ServicesPara
} from './ServiceElements'

const Services = () => {
  const servicesItems = ['Bone Settings', 'Dislocation', 'Stroke Treatment and Prevention', 'Diabetes and Hypertension', 'Weight Loss Management', 'Fibroid, etc..'];

  return (
    <ServicesContainer id="services">
      <ServicesRow>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesDetails>
          <ServicesInfo>
            {servicesItems.map((item, i) => (
              <ServicesItemBox key={i}>
                <ServicesItemIcon />
                <ServicesItem>{item}</ServicesItem>
              </ServicesItemBox>
            ))}
          </ServicesInfo>

          <ServicesWrapper>
            <div>

            </div>
            <ServicesAddress>
              <ServicesCard>
                Placing bottled water on the energy card energizes the water instantly. You can use tap, filtered, microwaved or any clean water for this purpose.
                You don't have to believe what you read, try the experiment below yourself:
                <ServicesHeader>The Salt Text</ServicesHeader>
                <ServicesPara>Get two </ServicesPara>
                <ServicesHeader>The {"Lime"} Text</ServicesHeader>
                <ServicesPara>Get two </ServicesPara>
              </ServicesCard>
              <ServicesAddressH2>For Enquires call:</ServicesAddressH2>
              <ServicesAddressP>07069403480, 08137434302</ServicesAddressP>
              <ServicesAddressH2>Office Address:</ServicesAddressH2>
              <ServicesAddressP>6, Olorunleke Street, Majiagbe, <br/> Ipaja, Lagos, Nigeria.</ServicesAddressP>
            </ServicesAddress>
            {/* <ServicesCard> 
              <ServicesIcon1 src="https://nutritionreview.org/wp-content/uploads/2017/04/vitamin-c-700.jpeg" alt="bone_treat" />
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvmHgrofHzRaw0Strth2-Ok493yrQDL1OtWw&usqp=CAU" alt="xyz" />
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon1 src="https://images-na.ssl-images-amazon.com/images/I/71KP9owYi%2BL._SX466_.jpg" alt="abc" />
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon1 src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322345_2200-1200x628.jpg" alt="a" />
            </ServicesCard> */}
          </ServicesWrapper>
        </ServicesDetails>
      </ServicesRow>
    </ServicesContainer>
  )
}

export default Services
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

  ServicesWrapper,
  ServicesCard,
  ServicesCardHeader,
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
            <ServicesAddress>
              <ServicesCard>
              <ServicesCardHeader>Energizing Drinking Water</ServicesCardHeader>
                <ServicesPara>
                  Placing bottled water on the energy card energizes the water instantly. You can use tap, filtered, microwaved or any clean water for this purpose.
                  You don't have to believe what you read, try the experiment below yourself:
                </ServicesPara>
                <ServicesHeader>The Salt Text</ServicesHeader>
                <ServicesPara>
                  Get two plates (A and B). Put one spoon of table salt in plate A and B respectively, place the energy card under plate A and taste after a few minute.
                  You will discover that the energized salt tastes less salty compared to the one on plate B.  
                </ServicesPara>
                <ServicesHeader>The {"Lime"} Text</ServicesHeader>
                <ServicesPara>
                  This is similar ti the salt test, cut the {"lime"} in half, place one half on energy card and leave for a few minute, taste the energized
                  {"lime"} first and then taste the other half afterwards. the other unenergized halt tastes sour. If you leave both halves open to air for a long time,
                  the energized half will look younger than the other because of the scalar energy protecting it. This is the same way the <b>biomagnetic energy card</b>
                  {" "} protect and rejuvenates the body.
                </ServicesPara>
              </ServicesCard>
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
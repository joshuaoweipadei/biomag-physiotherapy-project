import React from 'react';
import AboutUs from '../components/AboutUs';
import HeroSection from '../components/HeroSection';
import InfoView from '../components/InfoView';
import ProductSlider from '../components/ProductSlider';
import TopInfoSection from '../components/TopInfoSection';
import TopNavbar from '../components/TopNavbar';
import Contact from '../components/Contact';

import { homeObjOne, homeObjTwo } from '../components/InfoView/Data'
// import Services from '../components/ServiceSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <TopInfoSection />
      <AboutUs/>
      <ProductSlider />
      <InfoView {...homeObjTwo} />
      {/* <Services /> */}
      <InfoView {...homeObjOne} />
      <Contact />
      <Footer />
    </>
  )
}

export default Home

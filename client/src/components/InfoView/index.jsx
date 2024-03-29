import React from 'react'
// import ScrollAnimation from 'react-animate-on-scroll';
import { Button } from '../ButtonElement';
import { 
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrap,
  Img
} from './InfoViewElements'

const InfoView = ({ id, btn, primary, lightBg, imgStart, topLine, topLineDark, lightText ,headline, darkText, description, img, alt, animateIn, animateOut }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              {/* <ScrollAnimation animateIn={animateIn} animateOut={animateOut}> */}
                <TextWrapper btn={btn}>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <SubTitle darkText={darkText}>{description}</SubTitle>
                  <TopLine topLineDark={topLineDark}>{topLine}</TopLine>
                </TextWrapper>
                {btn &&
                <Button 
                  to="/biomag-services"
                  big="true"
                  fontbig="true"
                  color="true"
                  primary={primary}
                  dark={darkText}
                >Read more {">"}</Button>
                }
              {/* </ScrollAnimation> */}
            </Column1>
            
            <Column2>
              {/* <ScrollAnimation animateIn='fadeIn'> */}
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              {/* </ScrollAnimation> */}
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoView

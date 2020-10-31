import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
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

const InfoView = ({ id, lightBg, imgStart, topLine, topLineDark, lightText ,headline, darkText, description, img, alt, animateIn, animateOut }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <ScrollAnimation animateIn={animateIn} animateOut={animateOut}>
                <TextWrapper>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <SubTitle darkText={darkText}>{description}</SubTitle>
                  <TopLine topLineDark={topLineDark}>{topLine}</TopLine>
                </TextWrapper>
              </ScrollAnimation>
            </Column1>
            
            <Column2>
              <ScrollAnimation animateIn='fadeIn'>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </ScrollAnimation>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoView

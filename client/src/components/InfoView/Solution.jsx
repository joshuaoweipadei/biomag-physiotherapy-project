import React from 'react'
// import ScrollAnimation from 'react-animate-on-scroll';
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

const Solution = ({ id, lightBg, imgStart, topLine, topLineDark, lightText ,headline, darkText,
  description1, description2, description3, description4, description5, description6, description7, description8,
  description9, description10, description11, description12, description13, description14, description15, description16,
  description17, description18, description19, topLine2, _description1, _description2, _description3, _description4, 
  img, alt, animateIn, animateOut }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              {/* <ScrollAnimation animateIn={animateIn} animateOut={animateOut}> */}
                <TextWrapper>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <TopLine topLineDark={topLineDark}>{topLine}</TopLine>
                  <SubTitle darkText={darkText}>{description1}</SubTitle>
                  <SubTitle darkText={darkText}>{description2}</SubTitle>
                  <SubTitle darkText={darkText}>{description3}</SubTitle>
                  <SubTitle darkText={darkText}>{description4}</SubTitle>
                  <SubTitle darkText={darkText}>{description5}</SubTitle>
                  <SubTitle darkText={darkText}>{description6}</SubTitle>
                  <SubTitle darkText={darkText}>{description7}</SubTitle>
                  <SubTitle darkText={darkText}>{description8}</SubTitle>
                  <SubTitle darkText={darkText}>{description9}</SubTitle>
                  <SubTitle darkText={darkText}>{description10}</SubTitle>
                  <SubTitle darkText={darkText}>{description11}</SubTitle>
                  <SubTitle darkText={darkText}>{description12}</SubTitle>
                  <SubTitle darkText={darkText}>{description13}</SubTitle>
                  <SubTitle darkText={darkText}>{description14}</SubTitle>
                  <SubTitle darkText={darkText}>{description15}</SubTitle>
                  <SubTitle darkText={darkText}>{description16}</SubTitle>
                  <SubTitle darkText={darkText}>{description17}</SubTitle>
                  <SubTitle darkText={darkText}>{description18}</SubTitle>
                  <SubTitle darkText={darkText}>{description19}</SubTitle>
                  <TopLine topLineDark={topLineDark}>{topLine2}</TopLine>
                  <SubTitle darkText={darkText}>{_description1}</SubTitle>
                  <SubTitle darkText={darkText}>{_description2}</SubTitle>
                  <SubTitle darkText={darkText}>{_description3}</SubTitle>
                  <SubTitle darkText={darkText}>{_description4}</SubTitle>
                </TextWrapper>
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

export default Solution

import styled from "styled-components";

export const InfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#00b8d7' : '#f7f8fa')};
  color: #fff;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0;
  padding: 0 15px;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: 1fr, 5fr;
  align-items: center;
  justify-content: center;
  grid-gap: 60px;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

  @media screen and (max-width: 768px){
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    grid-gap: 16px;
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 768px){
    padding: 0%;
  }
`

export const Column2 = styled.div`
  max-width: 1000px;
  width: 100%;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media screen and (max-width: 768px){
    padding: 0%;
  }
`

export const TextWrapper = styled.div`
  max-width: 430px;
  width: 100%;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px){
    padding-bottom: 30px;
  }
`

export const TopLine = styled.span`
  display: inline-flex;
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-top: 18px;
  margin-bottom: 18px;
  padding: 4px 24px;
  border: none;
  border-left: 5px solid;
  border-color: ${({ topLineDark }) => (topLineDark ? '#ffffff' : '#ff5f78')};
  color: ${({ topLineDark }) => (topLineDark ? '#ffffff' : '#252525')};
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#ffffff' : '#ff5f78')};

  @media screen and (max-width: 480px){
    font-size: 27px
  }
`

export const SubTitle = styled.p`
  max-width: 400px;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 20px;
  color: ${({ darkText }) => (darkText ? '#ffffff' : '#9b9b9b')};
`

export const ImgWrap = styled.div`
  width: 100%;
  height: 455px;
  border-radius: 4px;
  overflow: hidden;

  @media screen and (max-width: 425px){
    height: 340px
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0 0 0 0;
  padding-right: 0;
  transform-origin: 0 0;
  transition: transform .25s, visibility .25s ease-in;

  :hover {
    transform: scale(1.1);
  }
`
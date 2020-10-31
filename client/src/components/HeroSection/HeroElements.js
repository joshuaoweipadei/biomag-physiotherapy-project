import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 600px;
  position: relative;
  z-index: 1;

  :before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
      180deg, 
      rgba(0, 184, 215, 0.2) 0%, 
      rgba(0, 184, 215, 0.6) 100%
      ),
      linear-gradient(
        180deg,
        rgba(0, 184, 215, 0.2) 0%,
        transparent 100%
      );
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px){
    font-size: 40px
  }

  @media screen and (max-width: 480px){
    font-size: 32px
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px){
    font-size: 24px
  }

  @media screen and (max-width: 480px){
    font-size: 18px
  }
`

export const LineH = styled.hr`
  height: 6px;
  max-width: 170px;
  width: 100%;
  border-radius: 6px;
  background: #ff5f78;
  border: none;
  margin: 30px auto 10px;
`

export const HeroBtnWrapper = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px){
    flex-direction: column;
  }
`
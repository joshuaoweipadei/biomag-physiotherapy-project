import styled from "styled-components";
import { MdLibraryBooks, MdSecurity } from 'react-icons/md'
import { FaRegCalendarCheck } from 'react-icons/fa';
import { HiOutlineUsers } from 'react-icons/hi'

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background: #f7f8fa;
`

export const AboutRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  max-width: 1400px;
  padding: 0 15px;
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const AboutRight = styled.div`
  width: 100%;
  padding: 20px 0;
`

export const AboutRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const AboutRightCard = styled.div`
  margin-bottom: 16px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`

export const AboutRightH1 = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 4px;
`

export const AboutRightH4 = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
  color: #00b8d7;
  text-transform: uppercase;
`

export const AboutRightVisionCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 16px;
  width: 100%;
  margin-top: 25px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

export const AboutRightVisionContainer = styled.div`
  width: 200px;
  height: 200px;
`

export const AboutRightVisionImg = styled.img`
  width: 100%;
  height: 100%;
`

export const AboutRightVisionContent = styled.div`
  width: 100%;
`

export const AboutRightVisionH1 = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 4px;
  padding-left: 16px;
  border-left: 5px solid #00b8d7;
`



// About Left Section
export const AboutLeft = styled.div`
  width: 100%;
  padding: 20px 0;
`

export const AboutLeftWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`

export const AboutLeftCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 58px 10px;
  margin-bottom: 16px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`

export const AboutLeftCardIcon1 = styled(MdLibraryBooks)`
  font-size: 48px;
  margin-bottom: 20px;
  color: #00b8d7;
`

export const AboutLeftCardIcon2 = styled(HiOutlineUsers)`
  font-size: 48px;
  margin-bottom: 20px;
  color: #00b8d7;
`

export const AboutLeftCardIcon3 = styled(FaRegCalendarCheck)`
  font-size: 48px;
  margin-bottom: 20px;
  color: #00b8d7;
`

export const AboutLeftCardIcon4 = styled(MdSecurity)`
  font-size: 48px;
  margin-bottom: 20px;
  color: #00b8d7;
`

export const AboutLeftCardH1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`

export const Para = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #9b9b9b;
  line-height: ${({ spaceLetter }) => (spaceLetter ? '1.7' : '')};
  text-align: ${({ justify }) => (justify ? 'justify' : '')}
`
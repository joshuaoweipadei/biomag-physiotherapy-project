import styled from "styled-components";
import { Link as ScrollLink } from 'react-scroll'
import { GrFacebook, GrTwitter, GrInstagram } from 'react-icons/gr';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  background: #00b8d7;
  color: #fff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
`

export const FooterContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  background: #f7f8fa;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
`

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  margin: auto;
  padding: 0 15px;
`

export const FooterTop = styled.div`
  width: 100%;
  padding: 50px 0;
`

export const FooterTopRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const ContactAddress = styled.div`
  width: 100%;
  margin-bottom: 46px;
`

export const ServicesH2 = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
  padding-left: 20px;
  border-left: 5px solid #e1e1e1;
  color: #fff;
`

export const AddressPhone = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
`

export const AddressPhoneIcon = styled(FaPhoneAlt)`
  font-size: 14px;
  margin-top: 3px;
  margin-right: 20px;

  @media screen and (max-width: 425px) {
    margin-right: 10px;
  }
`

export const AddressEmailIcon = styled(AiTwotoneMail)`
  font-size: 14px;
  margin-top: 3px;
  margin-right: 20px;

  @media screen and (max-width: 425px) {
    margin-right: 10px;
  }
`

export const AddressLocationIcon = styled(ImLocation)`
  font-size: 14px;
  margin-top: 3px;
  margin-right: 20px;

  @media screen and (max-width: 425px) {
    margin-right: 10px;
  }
`

export const AddressText = styled.p`
  color: #fff;
  font-size: 14px;
`

export const ContactItem = styled.ul`
  display: flex;
  flex-direction: column;
`

export const ContactList = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
`

export const ContactLink = styled(ScrollLink)`
  color: #fff;
  font-size: 14px;

  :hover {
    color: #9b9b9b;
  }
`

export const DayRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 20px;
  border-bottom: 1px solid #e1e1e1;
`

export const Day = styled.h5`
  font-size: 15px;
  font-weight: 400;
`

export const Time = styled.p`
  font-size: 14px;
  color: #fff;
`

// Bottom Footer
export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 15px 0;

  @media screen and (max-width: 425px) {
    display: block;
  }
`

export const FooterLeft = styled.div`
  width: 100%;
`

export const FooterP = styled.div`
  font-size: 15px;
  color: #00b8d7;

  @media screen and (max-width: 425px) {
    text-align: center;
    padding: 0 10px;
    font-size: 14px;
  }
`

export const FooterRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 425px) {
    justify-content: center;
    margin-top: 20px;
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const SocialItems = styled.div`
  display: flex;
  align-items: center;
`

export const SocialLink = styled.a`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: #fff;
  text-align: center;
  margin-right: 8px;
  border : 1px solid #00b8d7;
  border-radius: 100%;
  -webkit-transition: all .2s linear;
  -o-transition: all .2s linear;
  transition: all .2s linear;

  :hover {
    background: #e1e1e1;
  }

  @media screen and (max-width: 425px) {
    width: 37px;
    height: 37px;
    font-size: 16px;
  }
`

export const Facebook = styled(GrFacebook)`
  color: #3b5998;
`

export const Twitter = styled(GrTwitter)`
  color: #00aced;
`

export const Instagram = styled(GrInstagram)`
  color: #a7174e;
`
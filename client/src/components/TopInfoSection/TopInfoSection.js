import styled from "styled-components";
import { ImPhone } from 'react-icons/im'
import { GrInstagram } from 'react-icons/gr';

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 100%;
`

export const ServicesRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  padding: 0 15px;
  margin: 0;
  margin-top: -70px;
  z-index: 3;

  @media screen and (max-width: 1024px){
    margin-top: 0px;
    padding: 50px 15px;
  }
`

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding-bottom: 80px;
  width: 100%;

  @media screen and (max-width: 1024px){
    grid-template-columns: 1fr;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 0px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  height: 100%;
  margin: auto;
  width: 100%;
  padding: 20px;
  cursor: pointer;

  &:hover{
    transform: scale(1.01);
  }
`

export const ServicesH2 = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 20px;
  font-weight: 600;
`

// Emergency Help
export const CallContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 30px 20px 0;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 20px;
`

export const CallPhoneIcon = styled(ImPhone)`
  color: #ff5f78;
  font-size: 20px;
  margin-bottom: 0;
`

export const CallPhoneNumber = styled.h6`
  font-size: 16px;
  font-weight: 400;
  margin-left: 15px;
  margin-bottom: 0;

  @media screen and (max-width: 340px){
    font-size: 18px
  }
`

export const ServicesP = styled.p`
  font-size: 14px;
  color: #9b9b9b;
  line-height: 26px;
`

// Make Appointment
export const AppointmentForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 16px;
  margin-top: 10px;
  padding: 22px;
  padding-bottom: 20px;
  width: 100%;
`

export const AppointmentInputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  /* width: 100%; */

  @media screen and (max-width: 520px){
    grid-template-columns: 1fr;
  }
`

export const AppointmentInput = styled.input`
  padding: 12px 24px;
  border: 1px solid #e1e1e1;
  border-radius: 0;
  outline: none;
  font-family: 'Work Sans', sans-serif;

  ::placeholder {
    font-family: 'Work Sans', sans-serif;
  }
`

export const SubmitButton = styled.button`
  border-radius: 0px;
  background: #ff5f78;
  white-space: nowrap;
  padding: 12px 14px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 14px;
  color: #fff;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: #00b8d7;
    color: #fff;
  }

  :disabled {
    background: #e2e2e2;
    color: #00b8d7;
  }
`

// Openning Hours
export const OpeningHours = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 22px;
  padding-bottom: 20px;
`

export const DayRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 20px;
  border-bottom: 1px solid #e1e1e1;
`

export const Day = styled.h5`
  font-size: 16px;
  font-weight: 400;
`

export const Time = styled.p`
  font-size: 14px;
  color: #9b9b9b;
`

export const Instagram = styled(GrInstagram)`
  color: #a7174e;
  font-size: 18px;
  margin-right: 7px;
`
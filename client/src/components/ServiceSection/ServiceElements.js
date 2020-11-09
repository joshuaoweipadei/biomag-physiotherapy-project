import styled from "styled-components";
import { ImPhone } from 'react-icons/im'

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 100px 0;
`

export const ServicesRow = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 15px;
  margin: 0;
`

export const ServicesH1 = styled.h1`
  font-size: 38px;
  font-weight: 700;
  color: #ff5f78;
  padding-bottom: 20px;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 30px;

  @media screen and (max-width: 480px){
    font-size: 2rem; 
  }
`

export const ServicesDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`

export const ServicesInfo = styled.div`

`

export const ServicesItemBox = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
`

export const ServicesItemIcon = styled(ImPhone)`
  margin-right: 22px;
  font-size: 22px;
  color: red;

  @media screen and (max-width: 425px){
    font-size: 16px;
  }
`

export const ServicesItem = styled.h6`
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: capitalize;

  @media screen and (max-width: 425px){
    font-size: 18px;
  }
`

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content:flex-end;
  grid-gap: 36px;
  margin: auto;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px){
    grid-template-columns: 1fr;
  }
`

export const ServicesCard = styled.div`
  background: #fff;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ServicesIcon1 = styled.img`
  width: 100%;
  height: 100%;
`

export const ServicesAddress = styled.div`
  margin-top: 20px;
`

export const ServicesAddressH2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 6px;
  margin-top: 15px;
  color: #ff5f78;
`

export const ServicesAddressP = styled.p`
  font-size: 1rem;
  color: #9b9b9b;
`
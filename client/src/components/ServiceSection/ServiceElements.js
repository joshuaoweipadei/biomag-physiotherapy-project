import styled from "styled-components";
import { GiPentarrowsTornado } from 'react-icons/gi'

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
  grid-template-columns: 1fr;
  grid-gap: 30px;
  

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`

export const ServicesInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`

export const ServicesItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 0;
  margin-right: 30px;
  margin-bottom: 20px;
`

export const ServicesItemIcon = styled(GiPentarrowsTornado)`
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
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
`

export const ServicesCard = styled.div`
  background: #fff;
  max-width: 800px;
  width: 100%;
`

export const ServicesHeader = styled.h4`
  margin-top: 20px;
  padding: 5px 0;
`

export const ServicesPara = styled.div`
  color: #9b9b9b;
`

export const ServicesAddress = styled.div`
  margin-top: 30px;
`

export const ServicesAddressH2 = styled.h2`
  font-size: 18px;
  margin-bottom: 6px;
  margin-top: 25px;
  color: #ff5f78;
`

export const ServicesAddressP = styled.p`
  font-size: 14px;
  color: #9b9b9b;
`
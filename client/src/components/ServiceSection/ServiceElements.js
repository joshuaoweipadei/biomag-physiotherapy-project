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

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ServicesIcon1 = styled(ImPhone)`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const ServicesIcon2 = styled(ImPhone)`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const ServicesIcon3 = styled(ImPhone)`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`
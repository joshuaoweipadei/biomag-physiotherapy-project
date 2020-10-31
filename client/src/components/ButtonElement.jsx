import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 0px;
  background: ${({ primary }) => (primary ? '#00b8d7' : '#fff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 30px' : '12px 14px')};
  color: ${({ dark }) => (dark ? '#005557' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '17px' : '14px')};
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#00b8d7' : '#00ecf2')};
    color: ${({ primary }) => (primary ? '#fff' : '#ff5f78')};
  }
`
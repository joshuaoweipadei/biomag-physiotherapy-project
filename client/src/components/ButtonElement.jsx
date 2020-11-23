import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 0px;
  background: ${({ primary }) => (primary ? '#ff5f78' : '#fff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 30px' : '12px 14px')};
  color: ${({ dark }) => (dark ? '#00b8d7' : '#fff')};
  font-size: ${({ fontbig }) => (fontbig ? '17px' : '14px')};
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
    background: ${({ primary }) => (primary ? '#ff5f78' : '#fff')};
    color: ${({ primary }) => (primary ? '#e1e1e1' : '#005557')};
  }
`
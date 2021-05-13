import React from 'react';
import styled from 'styled-components';
import LogoSVG from '../../logo.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0 32px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Img = styled.img`
  width: 100px;
  color: ${props => props.theme.primary};
`;

const Header = ({ children }) => (
  <Wrapper>
    <Img src={LogoSVG} alt="logo" />
    {children}
  </Wrapper>
);

export default Header;

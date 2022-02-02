import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem;
`;

const HeaderLogo = styled.img`
  height: 5rem;
  width: 10rem;
`;

const HeaderHead = styled.h1`
  font-size: 84px;
  color: white;
`;

const HeaderDetails = styled.div`
  font-size: 32px;
  color: white;
  width: 40rem;
`;

const HeaderButtons = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 1rem 0 0;
`;

const HeaderButton1 = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  background: #7fc89a;
  padding: 1rem;
  margin-right: 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
  }
`;

const HeaderButton2 = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  background: #c77fc8;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderHead>Sold Out</HeaderHead>
      <HeaderDetails>
        Alien Frens are officially SOLD OUT! Buy on Open Sea below!
      </HeaderDetails>
      <HeaderButtons>
        <HeaderButton1> join discord </HeaderButton1>
        <HeaderButton2> buy on os </HeaderButton2>
      </HeaderButtons>
    </HeaderContainer>
  );
}

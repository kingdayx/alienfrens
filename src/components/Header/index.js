import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div``;

const HeaderLogo = styled.img`
  height: 5rem;
  width: 10rem;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo
        src="https://i0.wp.com/alienfrens.io/wp-content/uploads/2021/12/af-logo.png?fit=350%2C68&ssl=1"
        alt="Logo"
      />
    </HeaderContainer>
  );
}

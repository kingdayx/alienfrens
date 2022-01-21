import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  height: 5rem;
  border-bottom: 2px solid black;
`;

const NavBarLogo = styled.h1`
  margin-left: 10rem;
  color: white;
`;

const NavBarContainerRight = styled.div`
  position: relative;
  left: 35rem;
  display: flex;
  float: right;
  justify-content: space-between;
  align-items: center;
  margin-left: 5rem;
  width: 18rem;
`;

const NavBarIcons = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const NavBarIcons1 = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const NavBarButton = styled.div`
  margin-left: 2rem;
  padding: 1rem;
  border: 2px solid black;
  background: #61ce70;
  border-radius: 5px;
  &:hover {
    background: #9b51e0;
  }
`;

export default function NavBar() {
  return (
    <NavBarContainer>
      <NavBarLogo> Multiverse Club </NavBarLogo>
      <NavBarContainerRight>
        <NavBarIcons src="https://i0.wp.com/alienfrens.io/wp-content/uploads/2021/12/af-discord-icon.png?fit=79%2C63&ssl=1" />
        <NavBarIcons src="https://i0.wp.com/alienfrens.io/wp-content/uploads/2021/12/af-twitter-icon-1.png?fit=77%2C64&ssl=1" />
        <NavBarIcons src="https://i0.wp.com/alienfrens.io/wp-content/uploads/2021/12/af-etherscan-icon-2.png?fit=65%2C64&ssl=1" />
        <NavBarIcons src="https://i0.wp.com/alienfrens.io/wp-content/uploads/2021/12/af-OS-icon.png?fit=71%2C64&ssl=1" />
        <NavBarIcons1 src="https://alienfrens.io/wp-content/uploads/2022/01/AF-INSTA-ICON.svg" />
        <NavBarButton> Frens V2 </NavBarButton>
      </NavBarContainerRight>
    </NavBarContainer>
  );
}

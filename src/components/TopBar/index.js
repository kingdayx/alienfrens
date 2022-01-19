import React from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  display: flex;
  height: 4rem;
  justify-content: center;
  align-items: center;
  margin-top: -1.5rem;
  background: linear-gradient(to bottom, #7fc89b, #76b990);
`;

const TopBarText = styled.h4`
  display: flex;
  margin-top: 3rem;
  color: #f9fbfc;
`;

export default function TopBar() {
  return (
    <TopBarContainer>
      <TopBarText>LAUNCHING DECEMBER 20TH @ 0.02ETH</TopBarText>
    </TopBarContainer>
  );
}

import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 10rem;
  height: 30rem;
  background: white;
`;

const CardWrapper = styled.div`
  padding: 1rem;
`;

const CardImage = styled.img``;

const CardHeader = styled.h1``;

export default function Card({ name, rarity, quantity }) {
  return (
    <CardContainer>
      <CardWrapper>
        <CardImage
          src="https://i0.wp.com/alienfrens.io/wp-content/uploads/2021/12/af-alien-xonos.png?fit=556%2C556&ssl=1"
          alt="common alien"
        />
        <CardHeader> {name} </CardHeader>
      </CardWrapper>
    </CardContainer>
  );
}

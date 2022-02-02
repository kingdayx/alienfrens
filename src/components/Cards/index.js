import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardsContainer = styled.div`
display: flex
flex-direction: row;
flex-wrap:wrap;
`;

export default function Cards() {
  const CardsList = [
    { name: "Xenos", rarity: "common", quantity: "4000" },
    { name: "Femi", rarity: "Semi-rare", quantity: "3000" },
    { name: "Lochias", rarity: "rare", quantity: "2000" },
    { name: "olu", rarity: "ultra rare", quantity: "1000" },
  ];
  return (
    <CardsContainer>
      {CardsList.map((index, key) => {
        return (
          <Cards
            key={key}
            name={index.name}
            rarity={index.rarity}
            quantity={index.name}
          />
        );
      })}
    </CardsContainer>
  );
}

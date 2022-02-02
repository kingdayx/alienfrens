import React from "react";
import styled from "styled-components";

const WhoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem;
`;

const WhoTop = styled.div`
  display: flex;
  flex-direction: row;
`;

const WhoLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const WhoLeftHeader = styled.h1`
  font-size: 84px;
  color: white;
  width: 35rem;
`;

const WhoLeftDetails = styled.div`
  font-size: 32px;
  color: white;
  width: 40rem;
`;

const WhoRight = styled.div``;

const WhoImage = styled.img`
  height: 40rem;
  margin-left: 8rem;
  margin-top: 8rem;
`;

export default function Who() {
  return (
    <WhoContainer>
      <WhoTop>
        <WhoLeft>
          <WhoLeftHeader>WHO ARE ALIEN FRENS?</WhoLeftHeader>
          <WhoLeftDetails>
            Alien Frens is a community driven collection of 10k randomly
            generated NFTs on the Ethereum blockchain. Our goal is to build the
            biggest group of frens in the Metaverse. For an accessible price of
            0.02 ETH you receive 1 Alien Fren NFT that provides you not only an
            awesome PFP and a lifelong frenship with 10k other Frens, but a
            ticket to our IRL events, Invasions, Exclusive Merch, Comic Books,
            and the $FRENS Token. Oh, and all of this is only for Version 1.0 of
            our quarterly roadmap. Ready to be beamed up?
          </WhoLeftDetails>
        </WhoLeft>
        <WhoRight>
          <WhoImage
            src="https://i0.wp.com/alienfrens.io/wp-content/uploads/2021/12/aliestraits.png?w=2000&ssl=1"
            alt="image"
          />
        </WhoRight>
      </WhoTop>
    </WhoContainer>
  );
}

import React from "react";
import styled from "styled-components";

const WhoContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const WhoRight = styled.div``;

const WhoImage = styled.img``;

export default function Who() {
  return (
    <WhoContainer>
      <WhoTop>
        <WhoLeft> </WhoLeft>
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

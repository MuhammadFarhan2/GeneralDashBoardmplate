import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Wrapper id="about">
      <div className="lightBgf">
        <div className="containerf">
          <HeaderInfo>
            <h1 className="font40f extraBoldf text-center">About Us</h1>
            <p className="font13f text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;






import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBgf">
        <div className="containerf">
          <InnerWrapper className="flexSpaceCenterf" style={{ padding: "30px 0" }}>
            <Link className="flexCenterf animatef pointerf" to="home" smooth={true} offset={-80}>
              <LogoImg />
              <h1 className="font15f extraBoldf whiteColorf" style={{ marginLeft: "15px" }}>
               OSP
              </h1>
            </Link>
            <StyleP className="whiteColorf font13f">
              © {getCurrentYear()} - <span className="purpleColorf font13f">OSP</span> All Right Reserved
            </StyleP>

            <Link className="whiteColorf animatef pointerf font13f" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
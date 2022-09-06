import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animatef darkBgf" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenterf">
        <div className="flexNullCenterf">
          <LogoIcon />
          <h1 className="whiteColorf font20f" style={{ marginLeft: "15px" }}>
            OSP
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animatef pointerf">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenterf flexColumnf">
        <li className="semiBoldf font15f pointerf">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="activef"
            className="whiteColorf"
            style={{ padding: "10px 15px" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </Link>
        </li>
        <li className="semiBoldf font15f pointerf">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="activef"
            className="whiteColorf"
            style={{ padding: "10px 15px" }}
            to="partner"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Partner with Us 
          </Link>
        </li>
        <li className="semiBoldf font15f pointerf">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="activef"
            className="whiteColorf"
            style={{ padding: "10px 15px" }}
            to="testimonial"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Testimonials
          </Link>
        </li>
         
        <li className="semiBoldf font15f pointerf">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="activef"
            className="whiteColorf"
            style={{ padding: "10px 15px" }}
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
          >
            About
          </Link>
        </li>
        <li className="semiBoldf font15f pointerf">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="activef"
            className="whiteColorf"
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contact
          </Link>
        </li>
    
      </UlStyle>
      <UlStyle className="flexSpaceCenterf">
        <li className="semiBoldf font15f pointerf">
          <a href="/" style={{ padding: "10px 30px 10px 0" }} className="whiteColorf">
            Log in
          </a>
        </li>
        <li className="semiBoldf font15f pointerf flexCenterf">
          <a href="/" className="radius8f lightBgf" style={{ padding: "10px 15px" }}>
            Get Started
          </a>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;

import React from "react";
import styled from "styled-components";

// Assets
import ProjectImg1 from "../../assets/img/projects/testimonial.png";
import ProjectImg2 from "../../assets/img/projects/bgTesti.png";

import TestimonialCards from "./TestimonialCards";

export default function Projects() {
  return (
    <Wrapper id="testimonial">
      <div className="whiteBgf">
        <div className="containerf">
          <h1 className="font40f extraBoldf text-center text-bg-success border rounded-5 ">Testimonial</h1>
          {/* ................................ */}

          <div class="containerf mt-5">
            <div class="row">
              <div class="col mt-3">
                <div>
                  <h1 className=" font60f" style={{ fontFamily: 'courier', textAlign: "center", fontSize: "50px" }} >Since a year, students have won more than thousands scholarship with us!</h1>
                  <p style={{ fontFamily: 'Garamond', textAlign: "center" }}> we are proud to provide such a platform where needy students are getting educations with fully funded scholarships, we thank to our sponsors,donor who help student to lead the world by providing scholarship!</p>
                </div>
              </div>
              <div class="col mt-5 flexCenterf" style={{ backgroundPosition: "right top", backgroundImage: `url(${ProjectImg2})`, backgroundRepeat: "no-repeat" }}>
                <img src={ProjectImg1} class="img-fluid" alt="Testimonial" />
              </div>
            </div> {/* Row 1 */}


          </div> {/** End of containerf Row&Column*/}

          {/* .......................................... */}

          <HeaderInfo>
            <h1 className="font40f extraBoldf  text-center mt-5" >Our Success Testimonial</h1>

            <p className="font13f text-center " style={{ fontFamily: 'Garamond', fontSize: "20px" }}>
              Meet our members and hear their scholarship success stories
            </p>
          </HeaderInfo>
          <TestimonialCards />
        </div>
      </div>

    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

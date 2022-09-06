import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import Registration from "../../assets/img/add/regitration.png"
import Monitor from "../../assets/img/add/monitor.png";
import Payoff from "../../assets/img/add/payoff.png";

export default function Partner() {
  return (
    <Wrapper id="partner">
      <h1 className="font40f extraBoldf text-center text-bg-dark border rounded-5 ">Meet our Partner</h1>

      <div className="lightBgf" style={{ padding: "50px 0" }}>

        <div className="containerf">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBgf" style={{ padding: "60px 0" }}>
        <div className="containerf">
          <HeaderInfo>
          </HeaderInfo>

          <div className="containerf">
            <div className="row">
              <div className="col">
                <div>
                  <h1 className="extraBoldf font60f text-justify">Partner with Us to help students in need!</h1>
                  <button type="button" className="btn rounded-5 btn-success">Get in touch</button>
                </div>
              </div>
              <div className="col">
                <img src={AddImage1} className="img-fluid"  style={{textAlign:"center"}} alt="AddImage1" />
              </div>
            </div> {/* Row 1 */}
            <h1 className="font40f extraBoldf text-center mt-5"  >Three Ways to Partner</h1>

            <div className="row">
              <div className="col">
                <img src={Registration} class="img-fluid" style={{textAlign:"center"}} alt="RegistrationImg" />
              </div>
              <div className="col">
                <div className="mt-5">
                  <h1 className=" font40f extraBoldf " style={{ textAlign: "right", textShadow: "1px 1px 1px red" }}>Register Yourself</h1>
                  <p className="font13f" style={{ fontSize: "18px", padding: "0px 0px 0px 80px" }}>
                    We provides end-to-end scholarship management services to needy Students, Who are poor, and not able to afford their educations expenditure that seek to make a positive impact in the lives of our thousands student community.
                  </p>
                </div>
              </div>
            </div> {/* Row 2 */}


            <div className="row">
              <div className="col">
                <div className="mt-5">
                  <h1 className=" font40f extraBoldf " style={{ textShadow: "1px 1px 1px red" }}>Payoff</h1>
                  <p className="font13f" style={{ fontSize: "18px" }}>
                    Empower students with us to crush their student poverty, A quick and easy tool that helps students to get higher education and letting them to achieve their dream by paying, helping them to lead the world!  </p>
                </div>
              </div>
              <div className="col mt-5">
                <img src={Payoff} class="img-fluid" style={{ textAlign: "center" }} alt="Payoff" />
              </div>
            </div> {/* Row 3 */}

            <div className="row">
              <div className="col ">
                <img src={Monitor} className="img-fluid" style={{ textAlign: "center" }} alt="Monitor" />
              </div>
              <div className="col">
                <div className="mt-5">
                  <h1 className=" font40f extraBoldf " style={{ textAlign: "right", textShadow: "1px 1px 1px red" }}>Monitor Scholar</h1>
                  <p className="font13f" style={{ fontSize: "18px", padding: "0px 0px 0px 45px" }}>
                    Becoming partner with us, you can donate a scholarship in the form of paying , where you can post yourself scholarship, where our needy student can apply and, in this plateform, you can also monitor students who avail your donated scholarship. Which create a trust between you and us!
                  </p>
                </div>
              </div>
            </div> {/* Row 4 */}


          </div> {/** End of containerf */}
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
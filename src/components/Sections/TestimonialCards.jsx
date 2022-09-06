import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import Farhan from "../../assets/img/projects/farhan.png";
import One from "../../assets/img/projects/1.png";
import Two from "../../assets/img/projects/2.png";





export default function TestimonialCards() {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <Slider className="mt-5 border border-success  rounded-5 bg-light" styled={{ color: "red" }} {...settings} >
                <LogoWrapper className="flexCenterf">
                    <div className="containerf">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ImgStyle src={Farhan} alt="client logo" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flexCenterf">
                                <div className="card mx-auto" style={{ width: "35rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "red" }}>Muhammad Farhan</h5>
                                        <h6 className="card-subtitle mb-2 text-muted" >From Sukkur,Sindh,Pakistan</h6>
                                        <p className="card-text">
                                            I belong to poor family, i joined University since 2018, and awarded with Scholarship, to get higher education which was hard for me to afforf this institute's education fees.
                                            This platform, provided by university, helped me yo apply for scholarship in easy way. There's so many different types of scholarships, all for different kind of people. It is giving the user pure opportunity. All you need is effort.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> {/* Row 1 */}
                    </div>

                </LogoWrapper>


                <LogoWrapper className="flexCenterf">
                    <div className="containerf">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ImgStyle src={One} alt="client logo" />

                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flexCenterf">
                                <div className="card mx-auto" style={{ width: "35rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "red" }}>Muhammad Farhan</h5>
                                        <h6 className="card-subtitle mb-2 text-muted" >From Sukkur,Sindh,Pakistan</h6>
                                        <p className="card-text">
                                            I belong to poor family, i joined University since 2018, and awarded with Scholarship, to get higher education which was hard for me to afforf this institute's education fees.
                                            This platform, provided by university, helped me yo apply for scholarship in easy way. There's so many different types of scholarships, all for different kind of people. It is giving the user pure opportunity. All you need is effort.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> {/* Row 1 */}
                    </div>

                </LogoWrapper>

                <LogoWrapper className="flexCenterf">
                    <div className="containerf">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ImgStyle src={Farhan} alt="client logo" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flexCenterf">
                                <div className="card mx-auto" style={{ width: "35rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "red" }}>Muhammad Farhan</h5>
                                        <h6 className="card-subtitle mb-2 text-muted" >From Sukkur,Sindh,Pakistan</h6>
                                        <p className="card-text">
                                            I belong to poor family, i joined University since 2018, and awarded with Scholarship, to get higher education which was hard for me to afforf this institute's education fees.
                                            This platform, provided by university, helped me yo apply for scholarship in easy way. There's so many different types of scholarships, all for different kind of people. It is giving the user pure opportunity. All you need is effort.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> {/* Row 1 */}
                    </div>

                </LogoWrapper>

                <LogoWrapper className="flexCenterf">
                    <div className="containerf">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ImgStyle src={Two} alt="client logo" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flexCenterf">
                                <div className="card mx-auto" style={{ width: "35rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "red" }}>Muhammad Farhan</h5>
                                        <h6 className="card-subtitle mb-2 text-muted" >From Sukkur,Sindh,Pakistan</h6>
                                        <p className="card-text">
                                            I belong to poor family, i joined University since 2018, and awarded with Scholarship, to get higher education which was hard for me to afforf this institute's education fees.
                                            This platform, provided by university, helped me yo apply for scholarship in easy way. There's so many different types of scholarships, all for different kind of people. It is giving the user pure opportunity. All you need is effort.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> {/* Row 1 */}
                    </div>

                </LogoWrapper>


                <LogoWrapper className="flexCenterf">
                    <div className="containerf">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <ImgStyle src={Farhan} alt="client logo" />

                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flexCenterf">
                                <div className="card mx-auto" style={{ width: "35rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "red" }}>Muhammad Farhan</h5>
                                        <h6 className="card-subtitle mb-2 text-muted" >From Sukkur,Sindh,Pakistan</h6>
                                        <p className="card-text">
                                            I belong to poor family, i joined University since 2018, and awarded with Scholarship, to get higher education which was hard for me to afforf this institute's education fees.
                                            This platform, provided by university, helped me yo apply for scholarship in easy way. There's so many different types of scholarships, all for different kind of people. It is giving the user pure opportunity. All you need is effort.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> {/* Row 1 */}
                    </div>

                </LogoWrapper>



            </Slider>
        </>
    );
}


const LogoWrapper = styled.div`
  width: 300px;
  height: 100%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;

  display: block;
  margin-left: auto;
  margin-right: auto;
  ${'' /* width: 50%; */}
`;
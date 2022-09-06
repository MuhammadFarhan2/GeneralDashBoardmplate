import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Partner from "../components/Sections/Partner";
import Testimonial from "../components/Sections/Testimonial";
// import Blog from "../components/Sections/Blog";
import Abouts from "../components/Sections/Abouts";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Partner />
      <Testimonial />
      {/* <Blog /> */}
      <Abouts />
      <Contact />
      <Footer />
    </>
  );
}



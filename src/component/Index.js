import React from "react";
import "../css/index.css";
import Header from "./Header";
import Features from "./Features";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";

function Index() {
  return (
    <div className="body">
      <Header />
      <Features />
      <Partners />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default Index;

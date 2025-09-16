import React from "react";
import Header from "./header/header";
import Landingpage from "./landing/landingpage";
import Footer from "./footer/footer";

const page = () => {
  return (
    <div className="w-full bg-[#FAFAFA]  min-h-screen flex flex-col gap-10">
      <Header />
      <Landingpage />
      <Footer />
    </div>
  );
};

export default page;

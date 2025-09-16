import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <div className="w-full lg:h-[800px] h-600px]  flex  flex-col bg-[#0F3BFE] text-white font-normal p-10 gap-10">
        <div className="flex items-center justify-center">
          <div className="w-[700px] h-[200px] ">
            <img src="/11half.png" alt="" className="pb-20" />
          </div>
        </div>
        <div className="w-full flex justify-between text-[10px] lg:text-[16px]">
          <div className="lg:pl-40 gap-6 flex flex-col lg:mt-20">
            <h3>headroom</h3>
            <div className="flex items-center gap-2 ">
              <BsInstagram /> <p>instagram</p>
            </div>
            <div className="flex items-center gap-2 ">
              <BsTwitter /> <p>twitter</p>
            </div>
            <div className="flex items-center gap-2 ">
              <CiLinkedin /> <p>linkedIn</p>
            </div>
            <div className="w-[40%] lg:text-[14px]">
              © 2025 Headroom by Archetype Labs, inc All right reserved
            </div>
            <div className="underline cursor-pointer">coookies prefrences</div>
          </div>
          <div className="mt-20">
            <div>Cloned:Landingpage</div>
            <div className="animate-pulse">
              Built with ❤️ by Ogunyemi Samuel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

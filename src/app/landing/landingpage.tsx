import { Mail, Moon, Rocket } from "lucide-react";
import React from "react";
import { PiCursor } from "react-icons/pi";
import Image from "next/image";

const Landingpage = () => {
  return (
    <div className="flex-col flex items-center justify-center gap-10">
      {/* {Run on AutoPilot} */}
      <div title="runAutoPilotImage">
        {/* <div className="w-[700px] h-[300px]  mt-10"> */}
        <Image
          height={0}
          width={0}
          sizes="100vw"
          src="/1run.png"
          alt=""
          className="w-full h-auto rounded-md"
        />
        {/* </div> */}
      </div>
      <div title="twoButton" className="gap-3 flex mt-4">
        <button className="px-4 bg-slate-200 py-2 border rounded-md">
          Join waitlist
        </button>
        <button className="px-4 py-2 border rounded-md bg-blue-600 text-white">
          Get access now{" "}
        </button>
      </div>
      <p className="mt-6 text-stone-500">
        Describe your business, get powerful software
      </p>
      <div className="w-full max-w-4xl  lg:w-[500px] rounded-md mx-auto font-semibold  p-2 border flex flex-col justify-between bg-white">
        <div className="text-stone-400">i manage a de</div>
        <div className="flex w-full justify-end ">
          <button className="px-3 py-2 rounded-md border bg-slate-100">
            Generate
          </button>
        </div>
      </div>
      {/* <div className="w-[700px] h-[400px] shadow-md"> */}
      <Image
        height={0}
        width={0}
        sizes="100vw"
        src="/2project.png"
        alt=""
        className="w-full h-auto rounded-md"
      />
      {/* </div> */}
      <div>
        <p className="text-[11px] text-slate-400 text-center">
          Loved by thousands of small business
        </p>
        {/* <div className=" w-[300px] h-[100px] flex justify-center items-center"> */}
        <Image
          height={0}
          width={0}
          sizes="100vw"
          src="/logo.png"
          alt=""
          className="w-full h-auto rounded-md"
        />
        {/* </div> */}
      </div>
      {/* {your Ai assistant} */}
      {/* <div className="w-[1024px] h-[900px] "> */}
      <Image
        height={0}
        width={0}
        sizes="100vw"
        src="/3ai.png"
        alt=""
        className="w-full h-auto rounded-md"
      />
      {/* </div> */}
      {/* {all time consuming} */}
      <div className=" flex flex-col items-center justify-center md:flex-row gap-6">
        <div className="lg:w-[25%] w-[80%] md:w-[25%] text-[30px] font-semibold">
          All your time consuming emails, handled byMax
        </div>
        {/* {three card Parent} */}
        <div className="w-[40%] lg:w-[37%] text-[12px] flex flex-col gap-5 md:flex-row">
          <div className=" flex flex-col gap-3">
            <PiCursor className="text-blue-600" size={40} />
            <p>Max quickly take action for you, because humans are slow</p>
          </div>
          <div className=" flex flex-col gap-3">
            <Mail className="text-blue-600" size={40} />
            <p>
              Max tracks folow up, adn closese the loop wile yo do important
              suff
            </p>
          </div>
          <div className="  flex flex-col gap-3">
            <Moon className="text-blue-600" size={40} />
            <p>
              Reset easy actually knowing your business works without you for
              once
            </p>
          </div>
        </div>
        {/* {end} */}
      </div>
      {/* <div className="w-[800px] h-[500px] mt-10"> */}
      <Image
        height={0}
        width={0}
        sizes="100vw"
        src="/4pr.png"
        alt=""
        className="w-[400px] lg:w-[800px] lg:py-[20px] h-auto rounded-md"
      />
      {/* </div> */}
      {/* {Max saves hours of works} */}
      <div className="flex flex-col items-center justify-center md:flex-row gap-6">
        <div className="lg:w-[25%] w-[80%] md:w-[25%] text-[30px] font-semibold">
          Max saves hours of work for you and your team
        </div>
        <div className="w-[40%] lg:w-[37%] text-[12px] flex flex-col gap-5 md:flex-row">
          <div className="  flex flex-col gap-3">
            <PiCursor className="text-blue-600" size={40} />
            <p>
              instantly unlock insights and decision from your business data
            </p>
          </div>
          <div className="  flex flex-col gap-3">
            <Mail className="text-blue-600" size={40} />
            <p>Route task to the right person, automatically</p>
          </div>
          <div className=" flex flex-col gap-3">
            <Moon className="text-blue-600" size={40} />
            <p>
              Critical decisions, always reviewed by a human when it matters
            </p>
          </div>
        </div>
      </div>
      {/* <div className="w-[900px] h-[600px] mt-10 flex items-center justify-center"> */}
      <Image
        height={0}
        width={0}
        sizes="100vw"
        src="/5event.png"
        alt=""
        className="w-full h-auto rounded-md"
      />
      {/* </div> */}
      {/* <div className="w-[700px] h-[400px] "> */}
      <Image
        height={0}
        width={0}
        sizes="100vw"
        src="/6we.png"
        alt=""
        className="w-full h-auto rounded-md"
      />
      {/* </div> */}
      <div className="flex flex-col items-center justify-center md:flex-row gap-6">
        <div className="lg:w-[25%] w-[80%] md:w-[25%] text-[30px] font-semibold">
          Your worksflows, tailored to your business needs
        </div>
        <div className="w-[40%] lg:w-[37%] text-[12px] flex flex-col gap-5 md:flex-row">
          <div className=" flex flex-col gap-3">
            <PiCursor className="text-blue-600" size={40} />
            <p>
              Describe your business process to Headroom's AI assistant, Max
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <Mail className="text-blue-600" size={40} />
            <p>We build custom Ai-powered software in seconds</p>
          </div>
          <div className=" flex flex-col gap-3">
            <Moon className="text-blue-600" size={40} />
            <p>Leverage our powerful agents to automate your work</p>
          </div>
        </div>
      </div>
      {/* <div className="w-[600px] h-[400px] mt-10"> */}
      <Image
        height={0}
        width={0}
        sizes="100vw"
        src="/7brand.png"
        alt=""
        className="w-full h-auto rounded-md"
      />
      {/* </div> */}
      {/* <div className="w-[900px] h-[700px] "> */}
      <Image
        height={0}
        width={0}
        sizes="100vw"
        src="/8every.png"
        alt=""
        className="w-full h-auto rounded-md"
      />
      {/* </div> */}
      {/* <div className="w-[800px] h-[700px] "> */}
      <Image
        height={0}
        width={0}
        sizes="100vw"
        src="/9always.png"
        alt=""
        className="w-full h-auto rounded-md"
      />
      {/* </div> */}
      <div className="flex flex-col gap-4 items-center justify-center">
        <Rocket size={40} />
        <div className="text-[29px] font-semibold">Ready to begin?</div>
        <div className="text-[13px] text-stone-400 w-[82%] text-center">
          Sign up for our early access program to get started We'll be in touch
          soon to talk about your business needs
        </div>
        <button className="px-4 py-2 border rounded-md bg-blue-600 text-white">
          Get early access now
        </button>
      </div>
      {/* <div className="w-[700px] h-[400px]  flex justify-end items-center"> */}
      <Image
        height={0}
        width={0}
        sizes="100vw"
        src="/10sun.png"
        alt=""
        className="w-full h-auto rounded-md"
      />
      {/* </div> */}
    </div>
  );
};

export default Landingpage;

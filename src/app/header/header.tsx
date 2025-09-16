import React from "react";

const ThreeNavs = [
  {
    id: 1,
    hd: "🧾headroom",
  },
  { id: 2, pl: "Platform" },
  { id: 3, ab: "About" },
];
const Header = () => {
  return (
    <div className="w-full h-[60px] flex items-center justify-between lg:p-14 p-4 ">
      <div className="flex gap-4">
        {ThreeNavs.map((el, i) => {
          return (
            <div key={i} className="text-[10px] flex items-center font-bold">
              <div className="font-semibold text-[18px]">{el.hd}</div>
              <div className="text-slate-400">{el.pl}</div>
              <div>{el.ab}</div>
            </div>
          );
        })}
      </div>
      <div className="gap-3 flex  text-[7px] lg:text-[13px]">
        <button className=" bg-slate-200 px-3 py-2 border lg:px-4 lg:py-3 rounded-md md:px-3 md:py-3">
          Login
        </button>
        <button className=" border rounded-md px-2 py-2 bg-blue-600  lg:px-4 lg:py-3 text-white">
          Get access now{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;

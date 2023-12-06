import { memo } from "react";

const Footer = memo(() => {
  return (
    <div className="bg-gray-300 w-[1280px] flex flex-col items-start justify-start py-16 px-8 box-border z-[0] text-left text-sm text-mintcream font-inter">
      <div className="w-full flex flex-row flex-wrap items-center justify-between max-w-[1200px]">
        <div className="flex flex-col items-start justify-center gap-[8px]">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img className="relative w-8 h-8" alt="" src="/icon1.svg" />
            <div className="relative leading-[150%] font-semibold">
              ExpenseShare
            </div>
          </div>
          <div className="relative text-xs leading-[160%] text-gainsboro-200">
            All rights reserved 2024
          </div>
        </div>
        <div className="w-[234px] flex flex-row flex-wrap items-center justify-start gap-[32px]">
          <div className="flex-1 relative leading-[150%]">Twitter</div>
          <div className="flex-1 relative leading-[150%]">Instagram</div>
          <div className="flex-1 relative leading-[150%] text-gainsboro-200">
            YouTube
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;

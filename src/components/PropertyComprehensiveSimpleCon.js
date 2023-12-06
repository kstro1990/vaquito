import { memo } from "react";

const PropertyComprehensiveSimpleCon = memo(() => {
  return (
    <section className="bg-gray-300 w-[1280px] flex flex-col items-center justify-center py-20 px-4 box-border gap-[56px] z-[4] text-left text-32xl text-mintcream font-inter">
      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-[40px] max-w-[1064px]">
        <div className="w-[512px] flex flex-col items-center justify-center">
          <img
            className="flex-1 relative rounded-13xl max-h-full w-[512px] overflow-hidden object-cover"
            alt=""
            src="/image--dalle@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-[40px] min-w-[272px] max-w-[720px]">
          <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              How ExpenseShare Works
            </h1>
            <div className="self-stretch relative text-lg leading-[140%] text-gainsboro-200">
              Simple steps to financial clarity.
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] py-4 px-10 bg-lightseagreen rounded-lg flex flex-row items-center justify-center box-border max-w-[360px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
            autoFocus={true}
          >
            <div className="flex flex-row items-center justify-center py-0 px-1">
              <div className="relative text-sm leading-[150%] font-semibold font-inter text-mintcream text-center">
                Get Started
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-[1064px] text-lg sm:flex-col sm:gap-[20px] sm:items-start sm:justify-start">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[240px] max-w-[400px] sm:flex-[unset] sm:self-stretch">
          <img className="relative w-8 h-8" alt="" src="/icon-icon.svg" />
          <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
            Expense Logging
          </div>
          <div className="self-stretch relative text-sm leading-[150%] text-gainsboro-200 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
            Record each penny spent.
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[240px] max-w-[400px] sm:flex-[unset] sm:self-stretch">
          <img className="relative w-8 h-8" alt="" src="/icon-icon1.svg" />
          <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
            Add Friends
          </div>
          <div className="self-stretch relative text-sm leading-[150%] text-gainsboro-200 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
            Share expenses with friends.
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[240px] max-w-[400px] sm:flex-[unset] sm:self-stretch">
          <img className="relative w-8 h-8" alt="" src="/icon-icon2.svg" />
          <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
            Transaction History
          </div>
          <div className="self-stretch relative text-sm leading-[150%] text-gainsboro-200 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
            Review your spending habits.
          </div>
        </div>
      </div>
    </section>
  );
});

export default PropertyComprehensiveSimpleCon;

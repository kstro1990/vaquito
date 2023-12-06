import { memo } from "react";

const CardWithBenefitsForm = memo(() => {
  return (
    <div className="bg-gray-300 w-[1280px] flex flex-row items-center justify-center py-[120px] px-4 box-border z-[1] text-left text-32xl text-mintcream font-inter">
      <div className="flex-1 flex flex-row flex-wrap items-center justify-center gap-[48px] max-w-[1200px]">
        <div className="flex-1 rounded-13xl bg-gray-300 flex flex-col items-start justify-center gap-[32px] min-w-[304px] max-w-[524px]">
          <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
            <b className="self-stretch relative tracking-[-0.02em] leading-[120%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              Start Saving Today
            </b>
            <div className="self-stretch relative text-lg leading-[140%] text-gainsboro-200">
              Join ExpenseShare now.
            </div>
          </div>
          <div className="w-full rounded-lg bg-lightseagreen flex flex-row items-center justify-center py-4 px-12 box-border max-w-[360px] text-center text-lg">
            <div className="flex-1 flex flex-row items-center justify-center py-0 px-1">
              <div className="relative leading-[140%] font-semibold">
                Register
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-29xl bg-gray-100 overflow-hidden flex flex-col items-center justify-center p-12 box-border gap-[24px] min-w-[280px] max-h-[520px] text-lg">
          <div className="w-full flex flex-col items-start justify-start gap-[8px] min-w-[320px] max-w-[400px]">
            <img className="relative w-8 h-8" alt="" src="/icon-icon1.svg" />
            <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              Expense Analysis
            </div>
            <div className="self-stretch relative text-sm leading-[150%] text-gainsboro-200 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              Understand your spending.
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-[8px] min-w-[320px] max-w-[400px]">
            <img className="relative w-8 h-8" alt="" src="/icon--icon.svg" />
            <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              Friend Invites
            </div>
            <div className="self-stretch relative text-sm leading-[150%] text-gainsboro-200 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              Share expenses easily.
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-[8px] min-w-[320px] max-w-[400px]">
            <img className="relative w-8 h-8" alt="" src="/icon--icon1.svg" />
            <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              Secure Records
            </div>
            <div className="self-stretch relative text-sm leading-[150%] text-gainsboro-200 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              Trustworthy transaction history.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CardWithBenefitsForm;

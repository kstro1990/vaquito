import { memo } from "react";
import FreePlanContainer from "./FreePlanContainer";

const PlanSelectionContainer = memo(() => {
  return (
    <section className="bg-gray-300 w-[1280px] flex flex-col items-center justify-center py-[120px] px-4 box-border z-[2] text-left text-32xl text-mintcream font-inter">
      <div className="w-full flex flex-col items-start justify-center gap-[40px] max-w-[1440px]">
        <div className="w-full flex flex-col items-center justify-center min-w-[304px] max-w-[720px]">
          <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              Choose Your Plan
            </h1>
            <h3 className="m-0 self-stretch relative text-3xl leading-[130%] font-normal font-inherit text-gainsboro-200">
              Affordable options for everyone.
            </h3>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[40px] text-sm text-gainsboro-200">
          <div className="flex-1 flex flex-col items-center justify-center min-w-[180px] max-w-[180px] font-manrope">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative leading-[150%]">Friends</b>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative leading-[150%]">Expenses</b>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative leading-[150%]">Food Expenses</b>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative leading-[150%]">
                  Shared Expenses
                </b>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative leading-[150%]">
                  Expense Storage
                </b>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative leading-[150%]">24/7 Support</b>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative leading-[150%]">
                  Secure Transactions
                </b>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative leading-[150%]">Community Tips</b>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-[24px] min-w-[204px] text-3xl text-mintcream">
            <FreePlanContainer
              planType="Free"
              priceLabel="$0"
              buttonLabel="Sign Up"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm text-gainsboro-200">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="flex-1 relative leading-[150%]">1</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="flex-1 relative leading-[150%]">1</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[150%]">–</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[150%]">–</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[150%]">–</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[150%]">–</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[150%]">–</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[150%]">–</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-[24px] min-w-[204px] text-3xl text-mintcream">
            <div className="self-stretch h-[152px] flex flex-col items-start justify-center gap-[16px] min-w-[256px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h3 className="m-0 self-stretch relative text-inherit leading-[130%] font-semibold font-inherit">
                  Premium
                </h3>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[4px]">
                  <div className="relative leading-[130%] font-semibold">
                    $5
                  </div>
                  <b className="relative text-lg leading-[140%] flex font-manrope items-center w-[23px] h-7 shrink-0">
                    99
                  </b>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center text-xs">
                  <div className="relative leading-[160%]">per month</div>
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative leading-[160%]">yearly</div>
                    <div className="rounded-21xl bg-lightseagreen w-[26px] flex flex-row items-center justify-end p-0.5 box-border">
                      <div className="relative rounded-21xl bg-gray-300 w-3 h-3 overflow-hidden shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-lightseagreen flex flex-row items-center justify-center py-4 px-6 text-center text-sm hover:bg-darkcyan hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
                <div className="flex-1 flex flex-row items-center justify-center py-0 px-1">
                  <div className="relative leading-[150%] font-semibold">
                    Upgrade Now
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[316px] flex flex-col items-start justify-start gap-[8px] text-sm text-gainsboro-200">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="flex-1 relative leading-[150%]">Unlimited</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="flex-1 relative leading-[150%]">
                  Food Expenses
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="flex-1 relative leading-[150%]">
                  Shared Expenses
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="flex-1 relative leading-[150%]">Expenses</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="flex-1 relative leading-[150%]">
                  Expense Storage
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="flex-1 relative leading-[150%]">
                  24/7 Support
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[150%]">–</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[150%]">–</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-[24px] min-w-[204px]">
            <FreePlanContainer
              planType="Enterprise"
              priceLabel="$10"
              buttonLabel="Contact Us"
              propHeight="152px"
              propFlexShrink="0"
              propFlex="1"
              propFlex1="1"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="flex-1 relative leading-[150%]">Unlimited</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="flex-1 relative leading-[150%]">
                  Food Expenses
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="flex-1 relative leading-[150%]">
                  Shared Expenses
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="flex-1 relative leading-[150%]">Expenses</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="relative leading-[150%]">Expense Storage</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="relative leading-[150%]">24/7 Support</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="flex-1 relative leading-[150%]">
                  Secure Transactions
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/checkcircle--icon.svg"
                />
                <div className="relative leading-[150%]">Community Tips</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default PlanSelectionContainer;

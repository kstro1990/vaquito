import { memo, useMemo } from "react";

const FreePlanContainer = memo(
  ({
    planType,
    priceLabel,
    buttonLabel,
    propHeight,
    propFlexShrink,
    propFlex,
    propFlex1,
  }) => {
    const planStyle = useMemo(() => {
      return {
        height: propHeight,
        flexShrink: propFlexShrink,
      };
    }, [propHeight, propFlexShrink]);

    const divStyle = useMemo(() => {
      return {
        flex: propFlex,
      };
    }, [propFlex]);

    const detailsContainerStyle = useMemo(() => {
      return {
        flex: propFlex1,
      };
    }, [propFlex1]);

    return (
      <div
        className="self-stretch overflow-hidden flex flex-col items-start justify-center gap-[16px] min-w-[256px] text-left text-3xl text-mintcream font-inter"
        style={planStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start">
          <h3 className="m-0 self-stretch relative text-inherit leading-[130%] font-semibold font-inherit">
            {planType}
          </h3>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
          <div
            className="relative leading-[130%] font-semibold"
            style={divStyle}
          >
            {priceLabel}
          </div>
          <div
            className="flex flex-col items-start justify-center text-xs"
            style={detailsContainerStyle}
          >
            <div className="relative leading-[160%]">per month</div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative leading-[160%]">yearly</div>
              <div className="rounded-21xl bg-lightseagreen w-[26px] flex flex-row items-center justify-end p-0.5 box-border">
                <div className="relative rounded-21xl bg-gray-300 w-3 h-3 overflow-hidden shrink-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-6 text-center text-sm border-[1px] border-solid border-dimgray">
          <div className="flex-1 flex flex-row items-center justify-center py-0 px-1">
            <div className="relative leading-[150%] font-semibold">
              {buttonLabel}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default FreePlanContainer;

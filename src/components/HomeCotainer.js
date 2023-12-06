import { memo } from "react";

const HomeCotainer = memo(() => {
  return (
    <section className="bg-mintcream w-[1280px] flex flex-row flex-wrap items-center justify-center z-[5] text-left text-48xl text-gray-200 font-inter">
      <div className="flex-1 flex flex-col items-center justify-center py-[120px] px-6 box-border min-w-[320px] z-[1]">
        <div className="w-full flex flex-col items-start justify-center gap-[40px] min-w-[304px] max-w-[720px]">
          <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[104%] font-bold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              Track, Share, Save
            </h1>
            <h3 className="m-0 self-stretch relative text-3xl leading-[130%] font-normal font-inherit text-darkslategray">
              Manage your expenses effortlessly.
            </h3>
          </div>
          <button
            className="cursor-pointer [border:none] py-4 px-12 bg-lightseagreen w-full rounded-lg flex flex-row items-center justify-between box-border max-w-[360px] hover:bg-darkcyan hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
            autoFocus={true}
            id="btn_01"
            preload
          >
            <div className="flex flex-row items-center justify-center py-0 px-1">
              <div className="relative text-lg leading-[140%] font-semibold font-inter text-mintcream text-center">
                Start Tracking
              </div>
            </div>
          </button>
        </div>
      </div>
      <img
        className="flex-1 max-w-full overflow-hidden h-[725px] object-cover min-w-[320px] z-[0]"
        alt=""
        src="/image-container@2x.png"
      />
    </section>
  );
});

export default HomeCotainer;

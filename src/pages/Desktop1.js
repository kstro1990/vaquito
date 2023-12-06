import RectangleIcon from "../components/RectangleIcon";

const Desktop1 = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center gap-[104px]">
      <div className="self-stretch relative bg-gainsboro-100 h-[73px]" />
      <div className="rounded-[25px] bg-aqua w-[779px] overflow-hidden flex flex-col items-start justify-end pt-[30px] px-[152px] pb-[86px] box-border gap-[46px]">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[447px] shrink-0 object-cover"
          alt=""
          src="/-dc5b5c21ec764039952a7c282c83239f-1@2x.png"
        />
        <RectangleIcon />
      </div>
    </div>
  );
};

export default Desktop1;

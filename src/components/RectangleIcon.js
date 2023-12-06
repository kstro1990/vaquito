import { memo } from "react";

const RectangleIcon = memo(() => {
  return (
    <img
      className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[61px] shrink-0"
      alt=""
      src="/rectangle-3.svg"
    />
  );
});

export default RectangleIcon;

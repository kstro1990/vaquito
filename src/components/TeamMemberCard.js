import { memo, useMemo } from "react";

const TeamMemberCard = memo(
  ({ profileImage, personName, jobTitle, propAlignItems }) => {
    const infoStyle = useMemo(() => {
      return {
        alignItems: propAlignItems,
      };
    }, [propAlignItems]);

    return (
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[124px] text-left text-lg text-mintcream font-inter">
        <img
          className="relative rounded-381xl w-[120px] h-[120px] object-cover"
          alt=""
          src={profileImage}
        />
        <div
          className="self-stretch flex flex-col items-start justify-start"
          style={infoStyle}
        >
          <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
            {personName}
          </div>
          <div className="self-stretch relative text-sm leading-[150%] text-gainsboro-200">
            {jobTitle}
          </div>
        </div>
      </div>
    );
  }
);

export default TeamMemberCard;

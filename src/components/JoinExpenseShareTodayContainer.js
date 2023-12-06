import { memo } from "react";
import TeamMemberCard from "./TeamMemberCard";

const JoinExpenseShareTodayContainer = memo(() => {
  return (
    <section className="bg-gray-300 w-[1280px] flex flex-row flex-wrap items-center justify-between z-[3] text-left text-32xl text-mintcream font-inter">
      <div className="flex-1 h-[803px] flex flex-row items-center justify-center py-20 px-4 box-border min-w-[322px]">
        <div className="flex-1 flex flex-col items-start justify-center gap-[40px] max-w-[420px]">
          <div className="w-full flex flex-col items-start justify-center min-w-[304px] max-w-[720px]">
            <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[120%] font-bold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                Join ExpenseShare Today
              </h1>
              <h3 className="m-0 self-stretch relative text-3xl leading-[130%] font-normal font-inherit text-gainsboro-200">
                Take control of your finances.
              </h3>
            </div>
          </div>
          <div className="w-full flex flex-row flex-wrap items-center justify-start gap-[32px] max-w-[1200px] text-lg">
            <TeamMemberCard
              profileImage="/avatar-aisplashavatars@2x.png"
              personName="John Doe"
              jobTitle="Expense Analyst"
            />
            <TeamMemberCard
              profileImage="/avatar-aisplashavatars1@2x.png"
              personName="Jane Smith"
              jobTitle="Financial Advisor"
              propAlignItems="flex-start"
            />
            <TeamMemberCard
              profileImage="/avatar-aisplashavatars2@2x.png"
              personName="Samuel Green"
              jobTitle="Customer Support"
              propAlignItems="center"
            />
            <TeamMemberCard
              profileImage="/avatar-aisplashavatars3@2x.png"
              personName="Emily Brown"
              jobTitle="Tech Support"
              propAlignItems="flex-start"
            />
          </div>
        </div>
      </div>
      <img
        className="flex-1 max-w-full overflow-hidden h-[803px] object-cover min-w-[320px]"
        alt=""
        src="/image--dalle1@2x.png"
      />
    </section>
  );
});

export default JoinExpenseShareTodayContainer;

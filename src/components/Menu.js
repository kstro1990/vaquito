import { memo } from "react";

const Menu = memo(() => {
  return (
    <header className="self-stretch my-0 mx-[!important] absolute w-full top-[0px] right-[0px] left-[0px] flex flex-row items-center justify-between p-2 box-border z-[6] text-left text-xs text-gray-200 font-inter">
      <div className="bg-mintcream w-[1279px] h-[74px] flex flex-row items-center justify-between py-4 px-2 box-border relative">
        <nav className="m-0 flex flex-row items-center justify-center py-0 px-4 gap-[16px] z-[0] text-left text-xs text-gray-200 font-inter">
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-2">
            <div className="relative leading-[160%] font-semibold">
              Dashboard
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-2">
            <div className="relative leading-[160%] font-semibold">
              Expenses
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-2">
            <div className="relative leading-[160%] font-semibold">Friends</div>
          </div>
        </nav>
        <div className="flex flex-row items-center justify-center py-0 px-4 gap-[16px] z-[1]">
          <a className="[text-decoration:none] self-stretch flex flex-row items-center justify-start py-0 px-2 text-[inherit]">
            <div className="relative leading-[160%] font-semibold">History</div>
          </a>
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-2">
            <div className="relative leading-[160%] font-semibold">
              Tutorials
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-2">
            <div className="relative leading-[160%] font-semibold">Support</div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[calc(50%_-_12px)] left-[calc(50%_-_65px)] flex flex-row items-center justify-center gap-[8px] z-[2] text-sm">
          <img className="relative w-6 h-6" alt="" src="/icon.svg" />
          <div className="relative leading-[150%] font-semibold">
            ExpenseShare
          </div>
        </div>
      </div>
    </header>
  );
});

export default Menu;

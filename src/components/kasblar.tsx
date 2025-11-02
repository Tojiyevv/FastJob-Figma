import { Icon } from "@/img/icon";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuBriefcaseBusiness, LuWallet } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const Kasblar = () => {
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("/about-job");
  };

  return (
    <>
      <div>
        <div className="w-[100%] mx-auto justify-between ">
          <div className="shadow-[3px_3px_25.8px_0px_rgba(0,0,0,0.08)] p-[40px] rounded-[20px]">
            <div className="w-[100%] flex justify-between">
              <div className="w-[117px] bg-[#2d5b681a] items-center text-center h-[28px] rounded-[8px] pt-[2px]   ">
                <h2>10 minut oldin</h2>
              </div>
              <CiBookmarkPlus className="text-gray-700 w-8 h-8" />
            </div>
            <div className="flex items-center gap-[20px] pt-6">
              <Icon />
              <div className="flex flex-col gap-[20px]">
                <h2 className="font-figtree font-semibold text-[28px] leading-[100%] tracking-[0%]">
                  RECORD MIR company
                </h2>
                <p className="font-figtree font-normal text-[16px] leading-[100%] tracking-[0%]">
                  Bizga Fullstack xodim kerak.
                </p>
              </div>
            </div>
            <div className="w-[100%] flex items-center justify-between pt-[50px]">
              <div className="flex items-center gap-[24px] ">
                <div className="flex items-center gap-[6.5px] ">
                  <LuBriefcaseBusiness className="text-[#2DBBF9] w-7 h-7 mx-auto" />
                  <h2 className="font-figtree text-[#6C757D] font-semibold text-[16px] leading-[100%] tracking-[0%]">
                    Record Mir
                  </h2>
                </div>
                <div className="flex items-center gap-[6.5px]">
                  <FaRegClock className="w-6 h-6 text-[#2DBBF9]" />
                  <h2 className="font-figtree text-[#6C757D] font-semibold text-[16px] leading-[100%] tracking-[0]">
                    9:00 dan 17:00 gacha
                  </h2>
                </div>
                <div className="flex items-center gap-[6.5px]">
                  <LuWallet className="w-7 h-7 text-[#2DBBF9]" />
                  <h2 className="text-[#6C757D] font-figtree font-semibold text-[16px] leading-[100%] tracking-[0]">
                    $300-$800
                  </h2>
                </div>
                <div className="flex items-center gap-[6.5px]">
                  <HiOutlineLocationMarker className="w-7 h-7 text-[#2DBBF9]" />
                  <h2 className="text-[#6C757D] font-figtree font-semibold text-[16px] leading-[100%] tracking-[0]">
                    Surxondaryo. Uzb
                  </h2>
                </div>
              </div>
              <button
                onClick={() => HandleClick()}
                className="pt-[14.5px] pr-[20px] pb-[14.5px] pl-[20px] text-white font-figtree font-semibold text-[16px] leading-[100%] tracking-[0] rounded-[8px] bg-[#2DBBF9] transition-all duration-300 hover:bg-[#1faeea] hover:shadow-lg hover:shadow-blue-400/50 active:scale-95"
              >
                Ishni qabul qilish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

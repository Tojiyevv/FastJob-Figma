import { CiSearch } from "react-icons/ci";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsBuildings } from "react-icons/bs";

export const HomeHero = () => {
  return (
    <>
      <section>
        <div className="container w-[1440px] mx-auto text-center">
          <h1 className="text-white text-6xl font-bold pt-40">
            O’zingizga yoqadigan kasbda ishlang
          </h1>
          <p className="text-[#FFFFFFCC] pt-[20px] pb-[40px]   font-medium text-[18px] leading-[100%] tracking-[0] text-center">
            Sizning muvaffaqiyatingiz uchun darvoza
          </p>
          <form>
            <div className="w-[800px] mx-auto flex items-center">
              <input
                className="pl-[16.5px] pr-[560px] pt-[19px] pb-[19px] rounded-[9px] bg-white text-[#000000]"
                type="text"
                placeholder="Kasb qidiring"
              />
              <button
                type="submit"
                className="bg-[#2DBBF9] absolute ml-[725px] text-white rounded-[10px] p-[9.5px] hover:bg-[#1faeea] hover:shadow-lg hover:shadow-blue-400/50 active:scale-95"
              >
                <CiSearch className="w-7 h-7" />
              </button>
            </div>
          </form>
          <div className="w-[600px] pt-[80px] pb-[50px] justify-between flex items-center mx-auto">
            <div className="w-[1440px] text-center mx-auto flex items-center gap-[12px] justify-center">
              <div className="bg-[#2DBBF9] p-4 rounded-[50%] flex items-center  ">
                <LuBriefcaseBusiness className="text-white w-7 h-7 mx-auto" />
              </div>
              <div className="flex flex-col text-white">
                <h2>25,850</h2>
                <p>Ishlar</p>
              </div>
            </div>
            <div className="w-[1440px] text-center mx-auto flex items-center gap-[12px] justify-center">
              <div className="bg-[#2DBBF9] p-4 rounded-[50%] flex items-center  ">
                <FaPeopleGroup className="text-white w-7 h-7 mx-auto" />
              </div>
              <div className="flex flex-col text-white">
                <h2>10,250</h2>
                <p>Mijozlar</p>
              </div>
            </div>
            <div className="w-[1440px] text-center mx-auto flex items-center gap-[12px] justify-center">
              <div className="bg-[#2DBBF9] p-4 rounded-[50%] flex items-center  ">
                <BsBuildings className="text-white w-7 h-7 mx-auto" />
              </div>
              <div className="flex flex-col text-white">
                <h2>18,400</h2>
                <p>Vakansiyalar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

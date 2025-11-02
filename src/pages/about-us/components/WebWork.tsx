import { MdOutlineAccountBox } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";

export const WebWork = () => {
  return (
    <section>
      <div className="w-[1440px] mx-auto pt-[60px]">
        <div className="w-[690px] mx-auto text-center">
          <h2 className="font-figtree font-bold text-[50px] leading-[100%] tracking-[0] text-center">
            Bu web sayt qanday ishlaydi
          </h2>
          <p className="pt-[40px] font-figtree font-normal text-[16px] leading-[100%] tracking-[0] text-center">
            Bu web saytda birinchi akk ochiladi va rasume to'ldirib ish qidirib
            topgan ishiga to'liq o'zi haqida ma'lumotlarni tashlaydi. Agar
            mijozga sizning rezumegiz yoqsa sizni ishga oladi
          </p>
        </div>
        <div className="w-[1296px] flex items-center mx-auto pt-[60px] pb-[120px] text-center justify-between">
          <div className="w-[306px] rounded-[20px] border-[2px] px-[33px] py-[57.5px] flex flex-col items-center">
            <MdOutlineAccountBox className="text-[#2DBBF9] w-10 h-10" />

            <h2 className="font-figtree pt-[24px] pb-[20px] font-bold text-[20px] leading-[100%] tracking-[0]">
              Account oching
            </h2>
            <p className="text-[#00000099] font-figtree font-normal text-[16px] leading-[24px] tracking-[0] text-center">
              Nunc sed a nisl purus. Nibh dis faucibus proin lacus{" "}
            </p>
          </div>
          <div className="w-[306px] px-[33px] py-[57.5px] border-[2px] rounded-[20px] flex flex-col items-center">
            <FiFileText className="text-[#2DBBF9] w-10 h-10" />

            <h2 className="font-figtree pt-[24px] pb-[20px] font-bold text-[20px] leading-[100%] tracking-[0]">
              Resume to’ldiring
            </h2>
            <p className="text-[#00000099] font-figtree font-normal text-[16px] leading-[24px] tracking-[0] text-center">
              Felis eu ultrices a sed massa. Commodo fringilla sed tempor
            </p>
          </div>
          <div className="w-[306px] px-[33px] py-[57.5px] border-[2px] rounded-[20px] flex flex-col items-center">
            <LuBriefcaseBusiness className="text-[#2DBBF9] w-7 h-7 mx-auto" />

            <h2 className="font-figtree pt-[24px] pb-[20px] font-bold text-[20px] leading-[100%] tracking-[0]">
              Ish qidiring
            </h2>
            <p className="text-[#00000099] font-figtree font-normal text-[16px] leading-[24px] tracking-[0] text-center">
              Commodo fringilla sed tempor risus laoreet ultricies ipsum
            </p>
          </div>
          <div className="w-[306px] px-[33px] py-[57.5px] border-[2px] rounded-[20px] flex flex-col items-center">
            <IoCheckmarkCircleOutline className="text-[#2DBBF9] w-10 h-10" />

            <h2 className="font-figtree pt-[24px] pb-[20px] font-bold text-[20px] leading-[100%] tracking-[0]">
              Yoqan takliflarga <br /> rezume yuboring
            </h2>
            <p className="text-[#00000099] font-figtree font-normal text-[16px] leading-[24px] tracking-[0] text-center">
              Nisi enim feugiat enim volutpat. Sem quis viverra
            </p>
          </div>
        </div>
        <div className="about-video text-center w-[1296px] h-[760px] rounded-[20px] mx-auto">
          <div className="w-[952px] mx-auto pt-[219px]">
            <div className="w-15 mx-auto bg-white rounded-[50%]">
              <FaCirclePlay className="text-[#2DBBF9] w-15 h-15" />
            </div>
            <h2 className="pt-[60px] font-figtree font-bold text-[50px] leading-none tracking-[0px] text-center text-white">
              Bu videoda bu web sayt haqida <br /> ancha ma’lumotga ega bo’lasiz
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

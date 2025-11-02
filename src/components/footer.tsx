import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <section className="w-[100%] bg-black">
        <div className="container w-[100%] mx-auto pt-[70px] pb-[60px] bg-black">
          <div className="w-[1296px] mx-auto flex justify-between pb-[80px]">
            <div className="w-[377px]">
              <div className="w-[128px] flex items-center gap-[10px]">
                <LuBriefcaseBusiness className="text-white w-7 h-7 mx-auto" />
                <h2 className="font-inter text-white font-semibold text-[20px] leading-[100%] tracking-[0%]">
                  Jobstock
                </h2>
              </div>
              <p className="py-[40px] font-lexend font-semibold text-[18px] leading-[30px] tracking-[0%] text-[#FFFFFFCC]">
                Biz haqimizda At eu lobortis pretium tincidunt amet lacus ut
                aenean aliquet. Blandit a massa elementum
              </p>
              <div className="w-[154px] flex items-center justify-between">
                <FaFacebook className="text-white w-10 h-10" />
                <AiFillTwitterCircle className="w-10 h-10 text-white" />
                <FaInstagramSquare className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="w-128px">
              <h2 className="font-inter font-semibold text-[20px] leading-[100%] tracking-[0%] text-white pb-6">
                Kompaniya
              </h2>
              <h2 className="font-inter font-normal text-[16px] leading-[26px] tracking-[0%] text-white">
                Kompaniya haqida
              </h2>
              <h2 className="font-inter font-normal text-[16px] leading-[26px] tracking-[0%] text-white pt-3 pb-3">
                Bizning jamoamiz
              </h2>
              <h2 className="font-inter font-normal text-[16px] leading-[26px] tracking-[0%] text-white pb-3">
                Hamkorlar
              </h2>
              <h2 className="font-inter font-normal text-[16px] leading-[26px] tracking-[0%] text-white ">
                Mijozlar
              </h2>
            </div>
            <div className="w-[172px]">
              <h2 className="font-inter pb-6 font-semibold text-[20px] leading-[100%] tracking-[0%] text-white">
                Bog’lanish
              </h2>
              <h2 className="font-inter font-normal text-[16px] leading-[26px] tracking-[0%] text-white">
                +998-(94)-060-93-00
              </h2>
              <h2 className="font-inter font-normal text-[16px] leading-[26px] tracking-[0%] text-white pt-3">
                Surxondaryo.Angor
              </h2>
            </div>
            <div className="w-[306px] flex flex-col">
              <h2 className="font-inter font-semibold text-[20px] leading-[100%] tracking-[0%] text-white pb-6">
                Kompaniya
              </h2>
              <p className="font-inter font-normal w-[250px] text-[14px] leading-[16px] tracking-[0%] text-white">
                Siz tushunmagan narsalaringizni so’rov yuborish bilan hal qiling
              </p>
              <form>
                <input
                  type="text"
                  placeholder="So’rov"
                  className="py-[18px] pr-[100px] pl-[21px] border-white border-[1px] rounded-[12px] mt-4 mb-4 text-white font-inter font-normal text-[14px] leading-[16px] tracking-[0%]"
                />
                <button
                  className="py-[15.5px] px-[96px] bg-[#2DBBF9] text-white font-inter rounded-[12px] font-bold text-[16px] leading-[100%] tracking-[0%] hover:bg-[#1faeea] hover:shadow-lg hover:shadow-blue-400/50 active:scale-95"
                  type="submit"
                >
                  Subscribe now
                </button>
              </form>
            </div>
          </div>
          <div className="w-[1296px] mx-auto flex justify-between">
            <h2 className="font-inter font-normal text-[14px] leading-[26px] tracking-[0%] text-[#FFFFFF80]">
              © Copyright Jobstock 2025. figmaed abduvohid_design
            </h2>
            <div className="flex items-center gap-[20px]">
              <a
                href="#"
                className="font-inter font-normal text-[16px] leading-[26px] tracking-[0%] underline decoration-solid decoration-[0%] text-[#FFFFFF]"
              >
                Web sayt haqida
              </a>
              <a
                href="#"
                className="font-inter font-normal text-[16px] leading-[26px] tracking-[0%] underline decoration-solid decoration-[0%] text-[#FFFFFF]"
              >
                Bizning jamoamiz haqida
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

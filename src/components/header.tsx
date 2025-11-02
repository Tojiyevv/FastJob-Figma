import { Logo } from "@/img/logo";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="container flex justify-between items-center w-[1440px] pt-[26px] pb-[26px] mx-auto pr-[72px] pl-[72px]">
          <Logo />
          <ul className="flex gap-[44px]">
            <li>
              <a
                onClick={() => navigate("/")}
                className="cursor-pointer text-[#c7c6c6] hover:text-white font-[Figtree] font-medium text-[16px] leading-[100%] tracking-[0]"
              >
                Bosh sahifa
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/kasblar")}
                className="cursor-pointer text-[#c7c6c6] hover:text-white font-[Figtree] font-medium text-[16px] leading-[100%] tracking-[0]"
              >
                Kasblar
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/biz-haqimizda")}
                className="cursor-pointer text-[#c7c6c6] hover:text-white font-[Figtree] font-medium text-[16px] leading-[100%] tracking-[0]"
              >
                Biz haqimizda
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/boglanish")}
                className="cursor-pointer text-[#c7c6c6] hover:text-white font-[Figtree] font-medium text-[16px] leading-[100%] tracking-[0]"
              >
                Bog’lanish
              </a>
            </li>
          </ul>
          <div className="w-[284px] items-center flex justify-between">
            <h2
              onClick={() => navigate("/login")}
              className="cursor-pointer text-white font-[Figtree] font-medium text-[16px] leading-[100%] tracking-[0]"
            >
              Tizimga kirish
            </h2>
            <button
              onClick={() => navigate("/register")}
              className="bg-[#2DBBF9] text-[#FFFFFF] pt-[14.5px] pb-[14.5px] pr-[20px] pl-5 rounded-[8px] font-[Figtree] font-semibold text-[16px] leading-[100%] tracking-[0] items-center hover:bg-[#1faeea] hover:shadow-lg hover:shadow-blue-400/50 active:scale-95"
            >
              Ro’yhatdan o’tish
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

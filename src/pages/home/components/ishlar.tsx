import { Kasblar } from "@/components/kasblar";

export const Ishlar = () => {
  return (
    <>
      <section>
        <div className="container w-[1440px] mx-auto pt-[60px] pb-[60px]">
          <div className="w-[1296px] mx-auto pb-[60px] justify-between items-baseline-last flex">
            <div className="flex flex-col gap-[40px]">
              <h2 className="text-black font-figtree font-bold text-[50px] leading-[100%] tracking-[0%] text-center">
                Eng so’nggi ishlar
              </h2>
              <p className="font-figtree font-normal text-[16px] leading-[100%] tracking-[0%]">
                O’zingizga yoqqan kasbni tanlang....
              </p>
            </div>
            <div>
              <a
                className="text-[#2DBBF9] font-figtree font-semibold text-[24px] leading-[100%] tracking-[0%] underline decoration-solid decoration-[0%] underline-offset-[0%]"
                href="#"
              >
                Hammasini ko’rish
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[60px]">
            <Kasblar />
            <Kasblar />
            <Kasblar />
            <Kasblar />
          </div>
        </div>
      </section>
    </>
  );
};

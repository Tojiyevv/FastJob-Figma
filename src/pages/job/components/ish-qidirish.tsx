import { Kasblar } from "@/components/kasblar";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export const IshQidirish = () => {
  const [active, setActive] = useState<number>(1); // boshlang‘ich 1-chi tugma aktiv

  const handleClick = (num: number) => {
    if (active !== num) {
      setActive(num); // faqat boshqa tugma bosilganda o‘zgaradi
    }
  };

  return (
    <>
      <section>
        <div className="w-[1440px] px-[72px] pb-[30px] pt-[60px] mx-auto flex justify-between">
          <div className="relative">
            <div className="w-[306px] bg-[#EAF5F6] py-[40px] px-[20px] rounded-2xl flex flex-col gap-5">
              <div>
                <h3 className="font-figtree font-semibold text-[16px] mb-2">
                  Ish nomi bo‘yicha qidirish
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Qidirish"
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                  <span className="absolute left-2 top-2.5 text-gray-400">
                    🔍
                  </span>
                </div>
              </div>

              {/* Manzil */}
              <div>
                <h3 className="font-figtree font-semibold text-[16px] mb-2">
                  Manzil
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Manzil bo‘yicha qidirish"
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                  <span className="absolute left-2 top-2.5 text-gray-400">
                    📍
                  </span>
                </div>
              </div>

              {/* Kasb turlari */}
              <div>
                <h3 className="font-figtree font-semibold text-[16px] mb-2">
                  Kasb turlari
                </h3>
                <ul className="flex flex-col gap-2 text-[14px] text-gray-700">
                  {[
                    "To‘liq stavka",
                    "Yarim kun",
                    "Freelance",
                    "Mavsumiy",
                    "Narx belgilash",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex justify-between items-center"
                    >
                      <label className="flex gap-2 items-center">
                        <input type="checkbox" className="accent-sky-500" />
                        {item}
                      </label>
                      <span className="text-gray-400 text-[13px]">10</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tajriba darajasi */}
              <div>
                <h3 className="font-figtree font-semibold text-[16px] mb-2">
                  Tajriba darajasi
                </h3>
                <ul className="flex flex-col gap-2 text-[14px] text-gray-700">
                  {["Tajribasiz", "Yangiroq", "O‘rta daraja", "Mutaxassis"].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex justify-between items-center"
                      >
                        <label className="flex gap-2 items-center">
                          <input type="checkbox" className="accent-sky-500" />
                          {item}
                        </label>
                        <span className="text-gray-400 text-[13px]">10</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* E'lon qilingan sana */}
              <div>
                <h3 className="font-figtree font-semibold text-[16px] mb-2">
                  E'lon qilingan sana
                </h3>
                <ul className="flex flex-col gap-2 text-[14px] text-gray-700">
                  {[
                    "Butun kun",
                    "Oxirgi soat",
                    "Oxirgi 24 soat",
                    "Oxirgi 7 kun",
                    "Oxirgi 30 kun",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex justify-between items-center"
                    >
                      <label className="flex gap-2 items-center">
                        <input type="checkbox" className="accent-sky-500" />
                        {item}
                      </label>
                      <span className="text-gray-400 text-[13px]">10</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ish haqi */}
              <div>
                <h3 className="font-figtree font-semibold text-[16px] mb-2">
                  Ish haqi
                </h3>
                <input
                  type="range"
                  min="0"
                  max="9999"
                  className="w-full accent-sky-500"
                />
                <p className="text-[14px] mt-1 text-gray-600">
                  Ish haqi: $0 - $9999
                </p>
                <button className="w-full bg-sky-500 hover:bg-sky-600 text-white text-[14px] font-medium py-2 mt-2 rounded-lg transition">
                  Jo’natish
                </button>
              </div>

              {/* Sarlavhalar */}
              <div>
                <h3 className="font-figtree font-semibold text-[16px] mb-3">
                  Sarlavhalar
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Frontend",
                    "Design",
                    "UI/UX",
                    "Marketing",
                    "Management",
                    "Soft",
                    "Construction",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-sky-100 text-sky-700 text-[13px] px-3 py-1 rounded-full font-medium hover:bg-sky-200 cursor-pointer transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-[966px] flex flex-col gap-[24px]">
            <Kasblar />
            <Kasblar />
            <Kasblar />
            <Kasblar />
            <Kasblar />

            <div className="w-[966px] mx-auto flex">
              {/* 1-tugma */}
              <div className="w-[966px] flex justify-end">
                <div className="w-[535px] flex items-center justify-between ">
                  <div className="w-[104px] flex items-center justify-between mr-5">
                    <button
                      onClick={() => handleClick(1)}
                      className={`font-figtree font-semibold text-[20px] leading-[100%] px-[15px] py-[13px] rounded-lg border transition-colors duration-200 ${
                        active === 1
                          ? "bg-[#2DBBF9] text-white border-[#2DBBF9]"
                          : "bg-white text-black border-[#2DBBF9]"
                      }`}
                    >
                      1
                    </button>

                    {/* 2-tugma */}
                    <button
                      onClick={() => handleClick(2)}
                      className={` font-figtree font-semibold text-[20px] leading-[100%] px-[15px] py-[13px] rounded-lg border transition-colors duration-200 ${
                        active === 2
                          ? "bg-[#2DBBF9] text-white border-[#2DBBF9]"
                          : "bg-white text-black border-[#2DBBF9]"
                      }`}
                    >
                      2
                    </button>
                  </div>

                  {/* Next tugmasi */}
                  <button className="flex items-center gap-2 border-[2px] border-[#6C757D] text-[#6C757D] font-figtree font-medium text-[20px] leading-[100%] tracking-[0] rounded-[8px] py-[8px] px-[16px] hover:bg-[#dbdbdb] transition-colors duration-200">
                    <span>Keyingi</span>
                    <BsArrowRight size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

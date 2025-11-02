import { Kasblar } from "@/components/kasblar";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { LuBriefcaseBusiness, LuWallet } from "react-icons/lu";
import { PiMedalBold } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoPerson } from "react-icons/go";

export const AboutJobSolution = () => {
  const jobInfo = [
    {
      icon: <GoPerson className="text-[#2DBBF9] w-7 h-7" />,
      title: "Mas’ul shaxs",
      desc: "Olimjonov Abduvohid",
    },
    {
      icon: <CiClock2 className="text-[#2DBBF9] w-7 h-7" />,
      title: "Ish vaqti",
      desc: "Erkin ijodiy",
    },
    {
      icon: <LuBriefcaseBusiness className="text-[#2DBBF9] w-7 h-7" />,
      title: "Katalog",
      desc: "Design",
    },
    {
      icon: <PiMedalBold className="text-[#2DBBF9] w-7 h-7" />,
      title: "Tajriba",
      desc: "5 yil",
    },
    {
      icon: <FaGraduationCap className="text-[#2DBBF9] w-7 h-7" />,
      title: "Daraja",
      desc: "Yuqori",
    },
    {
      icon: <LuWallet className="text-[#2DBBF9] w-7 h-7" />,
      title: "Ish haqi",
      desc: "$100 - $1000",
    },
    {
      icon: <HiOutlineLocationMarker className="text-[#2DBBF9] w-7 h-7" />,
      title: "Manzil",
      desc: "Uzb. Surxondaryo",
    },
  ];

  return (
    <section>
      <div className="w-[1440px] px-[72px] mx-auto">
        <div className="w-[1296px]">
          <Kasblar />
        </div>

        <div className="w-[1296px] flex items-baseline gap-6 pt-[60px]">
          {/* Chap qism */}
          <div className="w-[966px] pt-[60px]">
            <h2 className="font-figtree pb-[40px] font-semibold text-[24px] leading-[100%]">
              Ish to’g’risidagi ma’lumotnoma
            </h2>
            <p className="font-figtree font-normal text-[16px] leading-[24px]">
              Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique.
              Sit congue non vitae odio sit erat in. Felis eu ultrices a sed
              massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum.
              Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim
              volutpat. Sem quis viverra viverra odio mauris nunc.
              <br />
              <br />
              Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi
              vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet
              adipiscing cursus fames mauris. Tortor amet porta proin in. Orci
              imperdiet nisi dignissim pellentesque morbi vitae. Quisque
              tincidunt metus lectus porta eget blandit euismod sem nunc. Tortor
              gravida amet amet sapien mauris massa.
            </p>

            {/* Asosiy mas’uliyat */}
            <div className="pt-[60px]">
              <h2 className="font-figtree font-semibold text-[24px] leading-[100%]">
                Asosiy mas'uliyat
              </h2>
              <div className="pt-[40px] space-y-[24px]">
                {[
                  "Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare.",
                  "Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris.",
                  "Ornare varius faucibus nisi vitae vitae cras ornare.",
                  "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae.",
                  "Tortor amet porta proin in. Quisque tincidunt metus lectus porta.",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <IoMdCheckmark className="w-7 h-7 text-[#2DBBF9]" />
                    <p className="font-figtree font-normal text-[16px] leading-[24px]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sarlavhalar */}
            <div className="pt-[60px] pb-[60px]">
              <h2 className="font-figtree font-semibold text-[24px]">
                Sarlavhalar
              </h2>
              <div className="w-[577px] flex flex-wrap gap-3 pt-[40px]">
                {[
                  "Full time",
                  "Commerce",
                  "New-York",
                  "Corporate",
                  "Location",
                ].map((tag) => (
                  <button
                    key={tag}
                    className="px-[14.5px] py-[12px] bg-[#3096891A] text-[#2DBBF9] rounded-[12px]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Ijtimoiy tarmoqlar */}
            <div className="flex items-center gap-4">
              <h2 className="font-figtree font-semibold text-[20px]">
                Admin bilan bog'lanish:
              </h2>
              <FaFacebook className="w-7 h-7 cursor-pointer hover:text-[#2DBBF9]" />
              <FaXTwitter className="w-7 h-7 cursor-pointer hover:text-[#2DBBF9]" />
              <IoLogoLinkedin className="w-8 h-8 cursor-pointer hover:text-[#2DBBF9]" />
            </div>

            <div className="w-[966px] pt-[180px] pb-[60px]">
              <h2 className="pb-[70px] font-figtree font-semibold text-[50px] leading-[100%] tracking-[0]">
                Shunga o’xshash ishlar
              </h2>
              <div className="flex flex-col gap-10">
                <Kasblar />
                <Kasblar />
                <Kasblar />
              </div>
            </div>
          </div>

          {/* O‘ng qism */}
          <div className="w-[306px] flex flex-col gap-[40px]">
            {/* Ish haqida ma'lumot */}
            <div className="bg-[#EBF5F4] rounded-2xl px-[20px] pt-[28px] pb-[20px]">
              <h3 className="font-figtree font-bold text-[18px] mb-[20px] text-[#1E1E1E]">
                Ish haqida ma’lumot
              </h3>

              <div className="flex flex-col gap-4">
                {jobInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {item.icon}
                    <div>
                      <p className="font-figtree font-semibold text-[16px] text-[#1E1E1E]">
                        {item.title}
                      </p>
                      <p className="font-figtree font-normal text-[16px] text-[#8D8D8D]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Xarita */}
              <div className="mt-6 rounded-xl overflow-hidden border border-[#DADADA]">
                <img
                  src="https://maps.googleapis.com/maps/api/staticmap?center=Surxondaryo,Uzbekistan&zoom=13&size=306x160&maptype=roadmap&markers=color:blue%7C37.9469,67.5709&key=YOUR_API_KEY"
                  alt="map"
                  className="w-full h-[160px] object-cover"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#EBF5F4] rounded-2xl px-[20px] py-[40px]">
              <h3 className="font-figtree font-bold text-[18px] mb-[20px] text-[#1E1E1E]">
                Bizga xabar yuboring
              </h3>

              <form className="flex flex-col gap-[16px]">
                <input
                  type="text"
                  placeholder="Ism"
                  className="w-full bg-white border border-[#DADADA] rounded-xl px-4 py-2 text-[15px] font-figtree outline-none focus:ring-2 focus:ring-[#2DBBF9]"
                />
                <input
                  type="email"
                  placeholder="Email adres"
                  className="w-full bg-white border border-[#DADADA] rounded-xl px-4 py-2 text-[15px] font-figtree outline-none focus:ring-2 focus:ring-[#2DBBF9]"
                />
                <input
                  type="tel"
                  placeholder="Raqamingiz"
                  className="w-full bg-white border border-[#DADADA] rounded-xl px-4 py-2 text-[15px] font-figtree outline-none focus:ring-2 focus:ring-[#2DBBF9]"
                />
                <textarea
                  placeholder="O‘zingiz haqingizda"
                  className="w-full h-[100px] resize-none bg-white border border-[#DADADA] rounded-xl px-4 py-2 text-[15px] font-figtree outline-none focus:ring-2 focus:ring-[#2DBBF9]"
                ></textarea>

                <button
                  type="submit"
                  className="bg-[#2DBBF9] text-white font-figtree font-medium text-[15px] py-2 rounded-xl hover:bg-[#23a8e0] transition-all"
                >
                  Yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useNavigate } from "react-router-dom";
import { Briefcase, FileText, Building2, Award } from "lucide-react";

export const AboutNews = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full flex flex-col items-center px-4 py-16 gap-24">
      {/* ==========================
          1️⃣ Biz faqat ishlaymiz...
      =========================== */}
      <div className="w-full max-w-[1296px] flex flex-col lg:flex-row items-center gap-10 pb-[60px]">
        {/* Chap tomondagi rasmlar */}
        <div className="flex gap-4 w-full lg:w-1/2">
          <div className="first rounded-2xl w-full md:w-1/2 lg:w-full h-[560px]"></div>
          <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-full">
            <div className="second rounded-2xl h-[338px]"></div>
            <div className="third rounded-2xl h-[200px]"></div>
          </div>
        </div>

        {/* O‘ng tomondagi matnlar */}
        <div className="flex flex-col w-full lg:w-1/2 gap-6">
          <h2 className="text-4xl font-bold leading-tight">
            Biz faqat ishlaymiz <br /> Eng yaxshilar bilan
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Ultricies purus dolor viverra mi laoreet at cursus justo. Ultricies
            purus diam egestas amet faucibus tempor blandit.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-center gap-3">
              <Briefcase className="text-sky-500" size={24} />
              <span className="font-medium text-gray-800">Sifatli ish</span>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="text-sky-500" size={24} />
              <span className="font-medium text-gray-800">
                Rezume yaratuvchisi
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="text-sky-500" size={24} />
              <span className="font-medium text-gray-800">
                Eng yaxshi kompaniyalar
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-sky-500" size={24} />
              <span className="font-medium text-gray-800">Eng yaxshilari</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================
          2️⃣ Yangiliklar va blog
      =========================== */}
      <div className="w-full max-w-[1296px] text-center">
        <h2 className="text-4xl font-bold mb-3">Yangiliklar va blog</h2>
        <p className="text-gray-600 mb-10">
          Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed
          tristique in dolor
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog kartasi 1 */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden">
            <div className="h-[260px] w-full four"></div>
            <div className="p-5 text-left">
              <p className="text-sm text-gray-500 mb-2">31 December 2025</p>
              <h3 className="font-semibold text-lg mb-3">
                Bizning web sayt yaqin kunlarda yangilanishi mumkin!
              </h3>
              <button
                onClick={() => navigate("/")}
                className="text-sky-500 flex items-center gap-1 font-medium hover:underline"
              >
                Batafsil →
              </button>
            </div>
          </div>

          {/* Blog kartasi 2 */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden">
            <div className="h-[260px] w-full five"></div>
            <div className="p-5 text-left">
              <p className="text-sm text-gray-500 mb-2">30 March 2024</p>
              <h3 className="font-semibold text-lg mb-3">
                Ish Suhbatidagi Eng Keng Tarqalgan Oltita Xatolardan Qanday
                Qochish Kerak
              </h3>
              <button
                onClick={() => navigate("/")}
                className="text-sky-500 flex items-center gap-1 font-medium hover:underline"
              >
                Batafsil →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

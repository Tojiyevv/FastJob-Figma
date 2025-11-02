import { useState } from "react";
import { Plus, X } from "lucide-react";

export const AboutQuastions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      id: 1,
      question: "Rezumeda xatolik ketsa uni to‘g‘rilash mumkinmi?",
      answer:
        "Ha, uni to‘g‘rilash uchun admin ga murojaat qiling: +998-(94)-060-93-00",
    },
    {
      id: 2,
      question: "Ishga qabul qilish jarayoni qancha davom etadi?",
      answer: "Odatda jarayon 5 ish kuni ichida yakunlanadi.",
    },
    {
      id: 3,
      question:
        "Ishga qabul qilish va tanlash jarayoni nimani o‘z ichiga oladi?",
      answer:
        "Jarayon suhbat, test topshirish va yakuniy suhbat bosqichlaridan iborat.",
    },
    {
      id: 4,
      question:
        "Bitiruvchilar, shogirdlar va talabalar uchun ishga qabul qilasizmi?",
      answer:
        "Ha, bizda yangi bitiruvchilar va talabalar uchun stajirovka dasturlari mavjud.",
    },
    {
      id: 5,
      question:
        "Meni qiziqtiradigan har qanday kelajakdagi ishlar haqida bildirishnomalar olsam bo‘ladimi?",
      answer:
        "Ha, saytimiz orqali elektron pochta orqali yangiliklarga obuna bo‘lishingiz mumkin.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center px-4 py-16">
      <div className="w-full max-w-[1296px] pb-[120px]">
        <h2 className="text-3xl font-bold text-center mb-10">
          Tez-tez so‘raladigan savollar
        </h2>

        <div className="space-y-3">
          {questions.map((item, index) => (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? "bg-[#F0F8FA] border-transparent"
                  : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center px-8 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-bold text-lg ${
                      openIndex === index ? "text-sky-500" : "text-gray-500"
                    }`}
                  >
                    {String(item.id).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-[18px] font-medium ${
                      openIndex === index ? "text-sky-700" : "text-gray-900"
                    }`}
                  >
                    {item.question}
                  </span>
                </div>

                <div className="text-sky-500 transition-transform duration-200">
                  {openIndex === index ? <X size={22} /> : <Plus size={22} />}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-[92px] pb-5 text-gray-600 text-[15px] leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const ContactKafolat = () => {
  return (
    <section className="max-w-[1296px] mx-auto py-16 px-4 flex flex-col lg:flex-row justify-between items-center gap-10">
      {/* Chap qism */}
      <div className="flex-1">
        <h2 className="font-figtree font-bold text-[48px] lg:text-[60px] leading-[100%] mb-8">
          Siz muvaffaqiyatga erishasiz. <br /> Va'da beramiz
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[#111827]">
          {/* Telefon */}
          <div className="flex flex-col items-start gap-3">
            <Phone className="text-sky-500 w-6 h-6" />
            <div>
              <h3 className="font-semibold">Telefon raqam</h3>
              <p className="text-gray-600">+998-(94)-060-93-00</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-start gap-3">
            <Mail className="text-sky-500 w-6 h-6" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">Abduvohid2009@gmail.com</p>
            </div>
          </div>

          {/* Ish vaqti */}
          <div className="flex flex-col items-start gap-3">
            <Clock className="text-sky-500 w-6 h-6" />
            <div>
              <h3 className="font-semibold">Ish vaqtimiz</h3>
              <p className="text-gray-600">Dush–Sha 8:00 – 18:00</p>
            </div>
          </div>

          {/* Office */}
          <div className="flex flex-col items-start gap-3">
            <MapPin className="text-sky-500 w-6 h-6" />
            <div>
              <h3 className="font-semibold">Office</h3>
              <p className="text-gray-600">
                19 North Road Piscataway, NY 08854
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* O‘ng qism – Forma */}
      <div className="w-full lg:w-[584px] bg-[#EBF5F4] p-8 rounded-2xl shadow-sm mx-auto lg:mx-0">
        <h3 className="font-bold text-xl mb-1 text-center">Bog‘lanish uchun</h3>
        <p className="text-gray-600 text-sm mb-6 text-center">
          To‘liq ma’lumotlarni kiriting
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Familiya"
              className="w-full p-3 rounded-md border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="text"
              placeholder="Ism"
              className="w-full p-3 rounded-md border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <textarea
            placeholder="Xabar"
            className="w-full h-32 p-3 rounded-md border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-3 rounded-md hover:bg-sky-600 transition"
          >
            Yuborish
          </button>
        </form>
      </div>
    </section>
  );
};

import { useState } from "react";
import LoginImage from "@/img/login-image.png";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1️⃣ Ma'lumotni saqlaymiz
    const newUser = { fullname, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));

    // 2️⃣ So‘ng login sahifasiga o‘tamiz
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="max-w-[1200px] mx-auto px-6 py-6 flex justify-between items-center">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold">
            J
          </div>
          <span className="font-figtree font-medium">Jobstock</span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <button
            onClick={() => navigate("/")}
            className="hover:text-[#2DBBF9]"
          >
            Kasblar
          </button>
          <button
            onClick={() => navigate("/about")}
            className="hover:text-[#2DBBF9]"
          >
            Biz haqimizda
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="hover:text-[#2DBBF9]"
          >
            Bog‘lanish
          </button>

          <button
            onClick={() => navigate("/login")}
            className="hover:text-[#2DBBF9]"
          >
            Tizimga kirish
          </button>

          <button
            onClick={() => navigate("/")}
            className="ml-4 px-3 py-1 rounded-full bg-[#2DBBF9] text-white"
          >
            Bosh sahifaga qaytish
          </button>
        </nav>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 py-6">
        <h1 className="text-3xl font-figtree font-semibold mb-2">
          Ro‘yxatdan o‘tish
        </h1>
        <p className="text-gray-500 mb-6">
          Quyidagi ro‘yxatdan o‘tish usullarini tanlang.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 flex gap-8 items-center">
          <form className="w-[520px]" onSubmit={handleSubmit}>
            <label className="block text-sm mb-2">F.I.SH</label>
            <input
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full border border-gray-200 rounded-md px-4 py-3 mb-4"
              placeholder="F.I.SH"
            />

            <label className="block text-sm mb-2">Email manzil</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-md px-4 py-3 mb-4"
              placeholder="Email"
            />

            <label className="block text-sm mb-2">Parol</label>
            <div className="relative mb-4">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPass ? "text" : "password"}
                className="w-full border border-gray-200 rounded-md px-4 py-3"
                placeholder="Parol"
              />
              <button
                type="button"
                onClick={() => setShowPass((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2DBBF9] text-sm"
              >
                {showPass ? "Yashirish" : "Ko‘rsatish"}
              </button>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <input type="checkbox" className="w-4 h-4 accent-[#2DBBF9]" />
              <span className="text-sm">Eslab qolish</span>
            </div>

            <button className="w-full bg-[#2DBBF9] text-white py-3 rounded-lg font-figtree font-semibold">
              Tasdiqlash
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Sizda akkaunt bormi?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-[#2DBBF9] cursor-pointer hover:underline"
              >
                Kirish
              </span>
            </p>
          </form>

          <div className="w-[380px] h-[320px] flex items-center justify-center">
            <div>
              <img src={LoginImage} alt="Register Illustration" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

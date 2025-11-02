import { useState } from "react";
import LoginImage from "@/img/login-image.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { email: "", password: "" };
    let isValid = true;

    // 🔹 Email tekshirish
    if (!email.trim()) {
      newErrors.email = "Email kiriting!";
      isValid = false;
    }

    // 🔹 Parol tekshirish
    if (!password.trim()) {
      newErrors.password = "Parol kiriting!";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      if (email === user.email && password === user.password) {
        toast.success("Tizimga muvaffaqiyatli kirdingiz!");
        navigate("/");
      } else {
        setErrors({
          email: "Email yoki parol noto‘g‘ri!",
          password: "Email yoki parol noto‘g‘ri!",
        });
        toast.error("Email yoki parol xato!");
      }
    } else {
      toast.error("Avval ro‘yxatdan o‘ting!");
    }
  };

  return (
    <>
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
            onClick={() => navigate("/kasblar")}
            className="hover:text-[#2DBBF9]"
          >
            Kasblar
          </button>
          <button
            onClick={() => navigate("/biz-haqimizda")}
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
        </nav>

        <div className="flex items-center">
          <button
            onClick={() => navigate("/register")}
            className="hover:text-[#2DBBF9]"
          >
            Ro‘yxatdan o‘tish
          </button>

          <button
            onClick={() => navigate("/")}
            className="ml-4 px-3 py-1 rounded-full bg-[#2DBBF9] text-white"
          >
            Bosh sahifaga qaytish
          </button>
        </div>
      </header>

      {/* LOGIN FORM */}
      <main className="w-[1200px] mx-auto px-6">
        <h1 className="text-3xl font-figtree font-semibold mb-2">KIRISH</h1>
        <p className="text-gray-500 mb-6">
          Quyidagi kirish usullarini tanlang.
        </p>

        <div className="w-[1150px] justify-between bg-white rounded-2xl shadow-lg px-[31px] py-[94px] flex items-center">
          {/* LEFT FORM */}
          <div className="w-[500px] relative">
            <form onSubmit={handleSubmit}>
              <label className="block text-sm font-figtree mb-2">
                Email / Telfon raqam
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
                className={`w-full border rounded-md px-4 py-3 mb-1 text-sm focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-200 focus:ring-sky-200"
                }`}
                placeholder="Email yoki telefon raqam"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mb-3">{errors.email}</p>
              )}

              <label className="block text-sm font-figtree mb-2">Parol</label>
              <div className="relative mb-1">
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prev) => ({ ...prev, password: "" }));
                  }}
                  type={showPass ? "text" : "password"}
                  className={`w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:ring-sky-200"
                  }`}
                  placeholder="Parol"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#2DBBF9]"
                >
                  {showPass ? "Yashirish" : "Ko‘rsatish"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mb-3">{errors.password}</p>
              )}

              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4 accent-[#2DBBF9]"
                  />
                  <span>Eslab qolish</span>
                </label>
                <a className="text-sm text-[#2DBBF9] hover:underline cursor-pointer">
                  Parolni unutdingizmi?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2DBBF9] text-white py-3 rounded-lg font-figtree font-semibold text-[16px]"
              >
                Tasdiqlash
              </button>

              <p className="text-sm text-gray-600 mt-4">
                Ro‘yxatdan o‘tmagan bo‘lsangiz?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="text-[#2DBBF9] hover:underline cursor-pointer"
                >
                  Ro‘yxatdan o‘tish
                </span>
              </p>
            </form>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-[500px] h-[400px] flex items-center justify-center">
            <div>
              <img src={LoginImage} alt="Login Illustration" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

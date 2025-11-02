import { Route, Routes } from "react-router-dom";
import { HomeIndex } from "./pages/home";
import { JobIndex } from "./pages/job";
import { Login } from "./pages/Login/login";
import { Register } from "./pages/register/register";
import { Toaster } from "react-hot-toast";
import { AboutJobIndex } from "./pages/about-job";
import { AboutIndex } from "./pages/about-us";
import { ContactIndex } from "./pages/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/kasblar" element={<JobIndex />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-job" element={<AboutJobIndex />} />
        <Route path="/biz-haqimizda" element={<AboutIndex />} />
        <Route path="/boglanish" element={<ContactIndex />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;

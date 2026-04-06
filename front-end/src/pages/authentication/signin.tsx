import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignInCall } from "../../utils/api";
import { toast } from "react-toastify";

export default function SignIn() {
  // 📦 State
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<{
    email?: string;
    phone?: string;
    password: string;
  }>({
    email: "",
    phone: "",
    password: "",
  });

  // 🧾 Handle Input Changes
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🚀 Submit Handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await SignInCall();

      const data = await response.json();
      if (response.ok) {
        toast.success("تم إنشاء الحساب بنجاح 🎉");
      } else {
        toast.error(data.message || "حدث خطأ أثناء التسجيل");
      }
    } catch (error) {
      toast.error("خطأ في الاتصال بالسيرفر");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#735145] to-[#000000]/40">
      <div className="w-full h-screen md:h-auto md:max-w-md space-y-8 rounded-[.5rem] border border-gray-100 bg-white p-8 shadow-lg fade-in">
        <div className="text-center">
          <img
            src="/assets/stavo-transparent-color.webp"
            alt="Stavo"
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
            تسجيل الدخول إلى حسابك
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            أو{" "}
            <Link
              to="/signup"
              className="font-medium text-[#735145] hover:text-[#8c6659]"
            >
              إنشاء حساب جديد
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-right text-gray-700">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="example@gmail.com"
                className="w-full rounded-[.25rem] px-4 py-3 text-gray-900 shadow focus:shadow-[0_1px_3px_#73514580] transition-all"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-right text-gray-700">
                كلمة المرور
              </label>
              <input
                type="password"
                required
                placeholder="Super1Strength2Password#"
                className="shadow focus:shadow-[#735145] w-full rounded-[.25rem] border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-[#735145] focus:ring-[#735145]"
              />
              <span className="mr-2">تذكرني</span>
            </label>
            <Link
              to={`/forget-password${form.email && `?email=${form.email}`}`}
              className="text-sm font-medium text-[#735145] hover:text-[#8c6659]"
            >
              نسيت كلمة المرور؟
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-[.25rem] bg-[#735145] px-4 py-3 text-white font-semibold hover:bg-[#8c6659] transition-all"
          >
            {loading ? "جارٍ التسجيل..." : "تسجيل الدخول"}
          </button>
        </form>
      </div>
    </div>
  );
}

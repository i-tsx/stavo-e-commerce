import React, { useState } from "react";
import {
  FaCircleExclamation,
  FaRegCircleCheck,
  FaAngleDown,
  FaEye,
  FaEyeSlash,
  FaRegCircleXmark,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const COUNTRIES = [
  { name: "سوريا", code: "+963", flag: "sy", format: "9xx xxx xxx" },
  { name: "لبنان", code: "+961", flag: "lb", format: "7x xxx xxx" },
  { name: "الأردن", code: "+962", flag: "jo", format: "7x xxxx xxxx" },
  { name: "فلسطين", code: "+970", flag: "ps", format: "5x xxx xxxx" },
  { name: "العراق", code: "+964", flag: "iq", format: "7x xxx xxxx" },
  { name: "تركيا", code: "+90", flag: "tr", format: "5xx xxx xxxx" },
  { name: "السعودية", code: "+966", flag: "sa", format: "5x xxx xxxx" },
  { name: "الإمارات", code: "+971", flag: "ae", format: "50x xxx xxx" },
  { name: "قطر", code: "+974", flag: "qa", format: "3x xxx xxx" },
  { name: "البحرين", code: "+973", flag: "bh", format: "3x xxx xxx" },
  { name: "الكويت", code: "+965", flag: "kw", format: "5x xxx xxx" },
  { name: "عُمان", code: "+968", flag: "om", format: "9x xxx xxx" },
  { name: "اليمن", code: "+967", flag: "ye", format: "7x xxx xxx" },
];

export default function SignUp() {
  // 📦 State
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Password Validation
  const checks = (password: any) => ({
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    noSpecial: !/[.\-|/= ]/.test(password),
  });

  const isValidPassword = () => {
    const c = checks(form.password);
    return c.length && c.uppercase && c.number && c.noSpecial;
  };

  const isMatching = () =>
    form.confirm.length > 0 && form.password === form.confirm;

  // 🌍 Handle Country Selection
  const handleSelect = (country: any) => {
    setSelectedCountry(country);
    setOpenDropdown(false);
  };

  // 🧾 Handle Input Changes
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🚀 Submit Handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!isValidPassword() || !isMatching()) return;

    setLoading(true);

    try {
      const response = await fetch("https://api.example.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: `${selectedCountry.code}${form.phone}`,
          password: form.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("تم إنشاء الحساب بنجاح 🎉");
      } else {
        alert(data.message || "حدث خطأ أثناء التسجيل");
      }
    } catch (error) {
      alert("خطأ في الاتصال بالسيرفر");
    } finally {
      setLoading(false);
    }
  };

  // 🧱 UI
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#735145] to-[#000000]/40">
      <div className="w-full h-screen md:h-auto md:max-w-md space-y-8 rounded-[.5rem] bg-white p-8 shadow-lg fade-in overflow-x-auto">
        {/* Header */}
        <div className="text-center">
          <img
            src="/assets/stavo-transparent-color.webp"
            alt="Stavo"
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
            إنشاء حساب جديد
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            لديك حساب بالفعل؟{" "}
            <Link
              to="/signin"
              className="font-medium text-[#735145] hover:text-[#8c6659]"
            >
              تسجيل الدخول
            </Link>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* First & Last name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-right text-gray-700">
                الاسم الأول
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                autoComplete={"given-name"}
                placeholder="Abdullah"
                className="w-full rounded-[.25rem] px-4 py-3 text-gray-900 shadow focus:shadow-[0_1px_3px_#73514580] transition-all"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-right text-gray-700">
                الاسم الأخير
              </label>
              <input
                type="text"
                name={"lastName"}
                value={form.lastName}
                onChange={handleChange}
                required
                autoComplete="family-name"
                placeholder="AlShebli"
                className="w-full rounded-[.25rem] px-4 py-3 text-gray-900 shadow focus:shadow-[0_1px_3px_#73514580] transition-all"
              />
            </div>
          </div>

          {/* Email */}
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

          {/* Phone */}
          <div dir="ltr">
            <div className="flex items-center rounded-[.25rem] shadow transition-all focus-within:shadow-[0_1px_3px_#73514580]">
              <button
                type="button"
                onClick={() => setOpenDropdown(!openDropdown)}
                className="w-[100px] flex items-center justify-center gap-2 px-4 py-4 rounded-l-lg border-r-2 border-gray-200"
              >
                <img
                  src={`https://flagcdn.com/w40/${selectedCountry.flag}.png`}
                  alt={selectedCountry.name}
                  className="w-5 rounded-sm object-cover"
                />
                <FaAngleDown className="text-gray-500 text-sm" />
              </button>

              <span className="px-3 text-gray-700 font-medium select-none">
                {selectedCountry.code}
              </span>

              <input
                type="tel"
                name="phone"
                required
                placeholder={selectedCountry.format}
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                className="w-full rounded-r-lg px-4 py-3 text-gray-900 placeholder-gray-400 outline-none bg-transparent"
              />
            </div>

            {openDropdown && (
              <div className="max-h-60 overflow-y-auto absolute mt-1 w-56 bg-white border border-gray-200 rounded-[.25rem] shadow-md z-10">
                {COUNTRIES.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => handleSelect(country)}
                    className="flex items-center w-full gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                  >
                    <img
                      src={`https://flagcdn.com/w20/${country.flag}.png`}
                      alt={country.name}
                      className="h-4 w-6 rounded-sm object-cover"
                    />
                    <span className="flex-1 text-right">{country.name}</span>
                    <span className="text-gray-500">{country.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Password */}
          <div>
            <div
              className={`relative flex items-center rounded-[.25rem] shadow focus-within:shadow-[0_1px_3px_#73514580] transition-all border ${
                touched
                  ? isValidPassword()
                    ? "border-green-500"
                    : "border-red-500"
                  : "border-gray-300"
              }`}
            >
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-500 hover:text-[#735145]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="كلمة المرور"
                value={form.password}
                onChange={handleChange}
                onFocus={() => setTouched(true)}
                className="w-full rounded-[.25rem] bg-transparent py-3 pr-10 pl-10 text-gray-900 placeholder-gray-400 outline-none"
              />

              {touched && (
                <span className="absolute left-3">
                  {isValidPassword() ? (
                    <FaRegCircleCheck className="text-green-500" />
                  ) : (
                    <FaCircleExclamation className="text-red-500" />
                  )}
                </span>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          {isValidPassword() && (
            <div>
              <div
                className={`relative flex items-center rounded-[.25rem] shadow focus-within:shadow-[0_1px_3px_#73514580] border ${
                  form.confirm
                    ? isMatching()
                      ? "border-green-500"
                      : "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirm"
                  placeholder="إعادة كتابة كلمة المرور"
                  value={form.confirm}
                  onChange={handleChange}
                  className="w-full rounded-[.25rem] bg-transparent py-3 pr-10 pl-10 text-gray-900 placeholder-gray-400 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 text-gray-500 hover:text-[#735145]"
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </button>

                {form.confirm && (
                  <span className="absolute left-3">
                    {isMatching() ? (
                      <FaRegCircleCheck className="text-green-500" />
                    ) : (
                      <FaCircleExclamation className="text-red-500" />
                    )}
                  </span>
                )}
              </div>

              {!isMatching() && form.confirm && (
                <p className="flex items-center gap-2 mt-1 text-sm text-red-500">
                  <FaRegCircleXmark /> كلمتا المرور غير متطابقتان
                </p>
              )}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-[.25rem] bg-[#735145] px-4 py-3 text-white font-semibold hover:bg-[#8c6659] transition-all disabled:opacity-50"
          >
            {loading ? "جارٍ الإنشاء..." : "إنشاء الحساب"}
          </button>
        </form>
      </div>
    </div>
  );
}

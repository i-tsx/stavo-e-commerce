import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#735145] text-[#c2b4af]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2">
              <img
                alt=""
                src="/assets/stavo-transparent-white.webp"
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-4 text-sm leading-6">
              اكتشف الملابس الكلاسيكية عالية الجودة التي تجمع بين الراحة
              والفخامة. ستاڤو يقدّم لك تجربة أزياء خالدة تلائم أسلوب حياتك
              الراقي.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-4 text-lg">
              <Link to="none" className="hover:text-white">
                <FaFacebook />
              </Link>
              <Link to="none" className="hover:text-white">
                <FaInstagram />
              </Link>
              <Link to="none" className="hover:text-white">
                <FaXTwitter />
              </Link>
              <Link to="none" className="hover:text-white">
                <FaGithub />
              </Link>
              <Link to="none" className="hover:text-white">
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* المنتجات */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              المنتجات
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/products/new-arrivals" className="hover:text-white">
                  المنتجات الجديدة
                </Link>
              </li>
              <li>
                <Link to="/products/tops" className="hover:text-white">
                  التيشيرتات
                </Link>
              </li>
              <li>
                <Link to="/products/pants" className="hover:text-white">
                  السراويل
                </Link>
              </li>
              <li>
                <Link to="/products/accessories" className="hover:text-white">
                  الإكسسوارات
                </Link>
              </li>
            </ul>
          </div>

          {/* الدعم */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              الدعم
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/support/faq" className="hover:text-white">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link to="/support/contact" className="hover:text-white">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link to="/support/shipping" className="hover:text-white">
                  الشحن والتوصيل
                </Link>
              </li>
              <li>
                <Link to="/support/returns" className="hover:text-white">
                  الإرجاع والاستبدال
                </Link>
              </li>
            </ul>
          </div>

          {/* الشركة */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              الشركة
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  المدونة
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white">
                  الوظائف
                </Link>
              </li>
            </ul>
          </div>

          {/* الشروط القانونية */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              الشروط القانونية
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/terms" className="hover:text-white">
                  شروط الخدمة
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link to="/refunds" className="hover:text-white">
                  سياسة الإرجاع
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center font-light mt-12 border-t border-[#c2b4af] border-solid pt-6 text-sm text-left">
          © {new Date().getFullYear()} متجر ستاڤو, جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}

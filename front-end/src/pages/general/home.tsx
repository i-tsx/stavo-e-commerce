import { FunctionComponent } from "react";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const products = [
    {
      title: "الأناقة الدائمة",
      items: [
        {
          id: 1,
          name: "تيشيرت كلاسيكي أسود",
          href: "/products/t-shirt-classic-black",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "تيشيرت أسود كلاسيكي",
          price: "$45",
          color: "أسود",
        },
        {
          id: 2,
          name: "تيشيرت كلاسيكي أبيض",
          href: "/products/t-shirt-classic-white",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "تيشيرت أبيض كلاسيكي",
          price: "$45",
          color: "أبيض",
        },
        {
          id: 3,
          name: "قميص كلاسيكي أزرق",
          href: "/products/shirt-classic-blue",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "قميص أزرق كلاسيكي",
          price: "$60",
          color: "أزرق",
        },
        {
          id: 4,
          name: "قميص كلاسيكي رمادي",
          href: "/products/shirt-classic-gray",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "قميص رمادي كلاسيكي",
          price: "$60",
          color: "رمادي",
        },
      ],
    },
    {
      title: "مجموعة التراث",
      items: [
        {
          id: 5,
          name: "سروال رسمي أسود",
          href: "/products/trousers-heritage-black",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "سروال رسمي أسود",
          price: "$80",
          color: "أسود",
        },
        {
          id: 6,
          name: "سروال رسمي كحلي",
          href: "/products/trousers-heritage-navy",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "سروال رسمي كحلي",
          price: "$80",
          color: "كحلي",
        },
        {
          id: 7,
          name: "تيشيرت تراثي أبيض",
          href: "/products/t-shirt-heritage-white",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "تيشيرت أبيض تراثي",
          price: "$50",
          color: "أبيض",
        },
        {
          id: 8,
          name: "تيشيرت تراثي رمادي",
          href: "/products/t-shirt-heritage-gray",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "تيشيرت رمادي تراثي",
          price: "$50",
          color: "رمادي",
        },
      ],
    },
    {
      title: "الأساسيات الراقية",
      items: [
        {
          id: 9,
          name: "تيشيرت أساسي أسود",
          href: "/products/t-shirt-essential-black",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "تيشيرت أساسي أسود",
          price: "$40",
          color: "أسود",
        },
        {
          id: 10,
          name: "تيشيرت أساسي أبيض",
          href: "/products/t-shirt-essential-white",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "تيشيرت أساسي أبيض",
          price: "$40",
          color: "أبيض",
        },
        {
          id: 11,
          name: "قميص أساسي أزرق فاتح",
          href: "/products/shirt-essential-lightblue",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "قميص أساسي أزرق فاتح",
          price: "$55",
          color: "أزرق فاتح",
        },
        {
          id: 12,
          name: "قميص أساسي رمادي فاتح",
          href: "/products/shirt-essential-lightgray",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "قميص أساسي رمادي فاتح",
          price: "$55",
          color: "رمادي فاتح",
        },
      ],
    },
    {
      title: "المنتجات الجديدة",
      items: [
        {
          id: 13,
          name: "تيشيرت جديد أسود",
          href: "/products/new-tshirt-black",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "تيشيرت أسود جديد",
          price: "$50",
          color: "أسود",
        },
        {
          id: 14,
          name: "تيشيرت جديد أبيض",
          href: "/products/new-tshirt-white",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "تيشيرت أبيض جديد",
          price: "$50",
          color: "أبيض",
        },
        {
          id: 15,
          name: "قميص جديد أزرق",
          href: "/products/new-shirt-blue",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "قميص أزرق جديد",
          price: "$65",
          color: "أزرق",
        },
        {
          id: 16,
          name: "قميص جديد رمادي",
          href: "/products/new-shirt-gray",
          imageSrc: "/assets/stavo.webp",
          imageAlt: "قميص رمادي جديد",
          price: "$65",
          color: "رمادي",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative overflow-hidden bg-white top-[104px]">
        <div className="pb-80 pt-40 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-6xl text-center lg:text-start">
                الأناقة الشتوية وصلت أخيراً
              </h1>
              <p className="mt-4 text-xl text-gray-500 text-center lg:text-start">
                هذا الموسم، مجموعتنا الجديدة من الملابس الشتوية تمنحك الدفء
                والأناقة لمواجهة برد الشتاء بأسلوب مميز وفريد.
              </p>
            </div>
            <div>
              <div className="mt-10 lg:block flex items-center justify-center">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="hidden lg:flex pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:right-1/2 sm:top-0 sm:translate-x-8 lg:right-1/2 lg:top-0 lg:translate-y-[10%] lg:-translate-x-8">
                    <div className="flex items-center gap-6">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="/assets/stavo.webp"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-6">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/assets/stavo.webp"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/assets/stavo.webp"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-6">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="/assets/stavo.webp"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/man"
                  className="inline-block rounded-md border border-transparent bg-[#735145] px-8 py-3 text-center font-medium text-white hover:bg-[#815f52]"
                >
                  تسوق الآن!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[104px] bg-white">
        {products.map((product) => (
          <div className="border-t border-[#c2b4af] border-solid mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {product.title}
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {product.items.map((item) => (
                <div key={item.id} className="group relative">
                  <img
                    alt={item.imageAlt}
                    src={item.imageSrc}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={item.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {item.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;

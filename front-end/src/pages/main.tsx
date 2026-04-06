import "../index.css";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";

function Main() {

  const { pathname } = useLocation();

  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    const scrolled = window.scrollY !== 0;
    if (scrolled) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    document.onkeydown = function (t) {
      if (t.which === 9) return false;
      else if (t.which === 123) {
        console.log(
          "%cHold Up!",
          "font-size: 8rem; color: #6752a7;text-shadow: 2px 2px 0px black;"
        );
        console.log(
          "%cIf someone told you to copy/paste something here you have an 11/10 chance you're being scammed.",
          "font-size: large;"
        );
        console.log(
          "%cPasting anything in here could give attackers access to your Discord account.",
          "color: red;font-size: large;"
        );
        return true;
      }
    };

    document.addEventListener("scroll", handleScroll);

    document.documentElement.setAttribute("dir", "rtl");

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Get the elements you want to observe for intersection
    const sections = document.querySelectorAll(".fade-in");

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    // Start observing each section
    sections?.forEach?.((section) => {
      observer.observe(section);
    });
if (pathname.startsWith("/login"))
      document.title = "Stavo Store | Login";
    else document.title = "Stavo Store";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (document.body.classList.value.includes("modal-opened"))
      document.body.classList.remove("modal-opened");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <ToastContainer
        position={`top-right`}
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        theme="dark"
        transition={Zoom}
      />
      <Outlet />
    </>
  );
}

export default Main;

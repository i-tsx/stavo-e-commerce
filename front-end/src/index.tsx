import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Home from "./pages/general/home";
import SignIn from "./pages/authentication/signin";
import SignUp from "./pages/authentication/signup";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/.env",
    element: <>This method is not allowed</>,
  },
  {
    path: "/",
    element: <Main />,
    errorElement: <></>,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "signin",
            element: <SignIn />
        },
        {
            path: "signup",
            element: <SignUp />
        }
    ],
  },
]);

root.render(
  <>
    <RouterProvider router={router} />
  </>
);

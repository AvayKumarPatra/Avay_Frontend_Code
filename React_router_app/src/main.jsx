import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Route from "./Route.jsx";
import Home from "../src/components/Home/Home.jsx";
import About from "../src/components/About/About.jsx";
import Contact from "./components/Contacts/Contacts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import AuthLayout from "../layout/AuthLayout";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "/auth",
          element: <AuthLayout />,
        },
      ],
    },
    {},
    {},
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;

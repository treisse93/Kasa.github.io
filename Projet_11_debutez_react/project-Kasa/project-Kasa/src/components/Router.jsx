// Data
import housingData from "../data/housing.json";

// React logic
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Housing from "../pages/Housing";
import Error404 from "../pages/404";

// Components
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// Base page with header and footer
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/housing/:id",
        loader: ({ params }) =>
          housingData.find((data) => data.id === params.id),
        element: <Housing />,
        errorElement: <Error404 />, // When id doesn't exist
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*", // All other routes don't exist
        element: <Error404 />,
      },
    ],
  },
]);

const KasaRouter = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default KasaRouter;

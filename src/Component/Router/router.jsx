import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import AllProducts from "../Page/AllProducts/AllProducts";

import NotFound from "../Page/NotFound/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>,
      },
     ],
  },
  {
    path: "*",
    element: <NotFound ></NotFound>,
  },
]);
export default router;

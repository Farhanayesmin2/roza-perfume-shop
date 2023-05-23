import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Main from "../Main/Layout"
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
      
    
    ],
  },
  {
    path: "*",
    element: <NotFound ></NotFound>,
  },
]);
export default router;

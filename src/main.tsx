import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/base.scss";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Layout } from "./components/layout/Layout";
import { ErrorComponent } from "./components/layout/ErrorComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Practices } from "./components/practices/Practices";
import { JavascriptExcersises } from "./components/practices/js/JavascriptExcersises";
import { TriangleLoop } from "./components/practices/js/eloquentJS/chapter2/TriangleLoop";
import { FizzBuzz } from "./components/practices/js/eloquentJS/chapter2/FizzBuzz";
import { Chessboard } from "./components/practices/js/eloquentJS/chapter2/Chessboard";
import { Minimum } from "./components/practices/js/eloquentJS/chapter3/Minimum";
import { Recursion } from "./components/practices/js/eloquentJS/chapter3/Recursion";
import { BeanCount } from "./components/practices/js/eloquentJS/chapter3/BeanCount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "practices",
        element: <Practices />,
        children: [
          {
            index: true,
            path: "js",
            element: <JavascriptExcersises />,
          },
          {
            path: "js/triangle",
            element: <TriangleLoop />,
          },
          {
            path: "js/fizzbuzz",
            element: <FizzBuzz />,
          },
          {
            path: "js/chessboard",
            element: <Chessboard />,
          },
          {
            path: "js/minimum",
            element: <Minimum />,
          },
          {
            path: "js/recursion",
            element: <Recursion />,
          },
          {
            path: "js/bean-count",
            element: <BeanCount />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);

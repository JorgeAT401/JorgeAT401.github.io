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
import { TriangleLoop } from "./components/practices/js/eloquentJS/TriangleLoop";
import { FizzBuzz } from "./components/practices/js/eloquentJS/FizzBuzz";
import { Chessboard } from "./components/practices/js/eloquentJS/Chessboard";

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

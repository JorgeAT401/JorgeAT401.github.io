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
import { SumOfRange } from "./components/practices/js/eloquentJS/chapter4/SumOfRange";
import { ReversingArray } from "./components/practices/js/eloquentJS/chapter4/ReversingArray";
import { List } from "./components/practices/js/eloquentJS/chapter4/List";
import { DeepComparison } from "./components/practices/js/eloquentJS/chapter4/DeepComparison";
import { Flatten } from "./components/practices/js/eloquentJS/chapter5/Flatten";
import { MyOwnLoop } from "./components/practices/js/eloquentJS/chapter5/MyOwnLoop";
import { Everything } from "./components/practices/js/eloquentJS/chapter5/Everything";
import { VectorVisualizer } from "./components/practices/js/eloquentJS/chapter6/VectorVisualizer";
import { GroupManager } from "./components/practices/js/eloquentJS/chapter6/GroupManager";

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
          {
            path: "js/sum-range",
            element: <SumOfRange />,
          },
          {
            path: "js/reversing-array",
            element: <ReversingArray />,
          },
          {
            path: "js/list",
            element: <List />,
          },
          {
            path: "js/deep-comparison",
            element: <DeepComparison />,
          },
          {
            path: "js/flatten",
            element: <Flatten />,
          },
          {
            path: "js/my-own-loop",
            element: <MyOwnLoop />,
          },
          {
            path: "js/everything",
            element: <Everything />,
          },
          {
            path: "js/vector-visualizer",
            element: <VectorVisualizer />,
          },
          {
            path: "js/group-manager",
            element: <GroupManager />,
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

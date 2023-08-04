import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Menu from "./Components/Menu/Menu.jsx";
import Meals from "./Components/Meals/Meals.jsx";
import First from "./Components/First/First.jsx";
import Service from "./Components/Service/Service.jsx";
import MealDetails from "./Components/MealDetails/MealDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First></First>,

    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "meals",
        element: <Meals></Meals>,
        loader: () =>
          fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?a=american"
          ),
      },
      {
        path: "meal/:mealId",
        element: <MealDetails></MealDetails>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
          ),
      },
      {
        path: "service",
        element: <Service></Service>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

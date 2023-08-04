import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  const data = useLoaderData();
  console.log(data.meals);
  const meals = data.meals;

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-center   container mx-auto p-10">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} meal={meal}></Meal>
      ))}
    </div>
  );
};

export default Meals;

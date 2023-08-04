import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const meal = data.meals;
  console.log(meal[0].strMeal);
  return (
    <div className="text-center py-6">
      <p className="text-white text-6xl">{meal[0].strMeal}</p>
      <button onClick={handleGoBack} className="text-red-800 text-6xl">
        go back
      </button>
    </div>
  );
};

export default MealDetails;

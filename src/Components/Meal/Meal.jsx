import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/meal/ ${meal.idMeal}`);
  };
  return (
    <div className="bg-amber-900 shadow rounded text-center cursor-pointer">
      <div>
        <img
          className="h-48 w-full object-cover"
          src={meal.strMealThumb}
          alt=""
        />
      </div>
      <p className="text-1xl text-white p-2   ">{meal.strMeal}</p>

      <p className="text-white p-2 bg-amber-600 hover:bg-amber-700 duration-200">
        <Link to={`/meal/${meal.idMeal}`}>Meal Details</Link>
      </p>

      <button className="p-4 " onClick={handleDetails}>
        Details with navigate
      </button>
    </div>
  );
};

export default Meal;

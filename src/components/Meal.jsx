import { useState } from "react";
import { useParams } from "react-router-dom";
import { byCategoryItems } from "../api";
import {Loader} from "./Loader";
import Meals from "./Meals";

const Meal = () => {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();

  byCategoryItems(name).then((data) => {
    setMeals(data.meals);
  });

  return (
    <div className="container">
      <h1 className="py-5">Meals</h1>
      <div className="content row d-flex justify-content-center">
      {!meals.length ? (
        <Loader />
      ) : (
        meals.map((item) => <Meals key={item.idMeal} {...item} />)
      )}
    </div>
    </div>
  );
};

export default Meal;

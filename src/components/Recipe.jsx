import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api";
import Loader from "./Loader";

const Recipe = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const {
    strMeal,
    strCategory,
    strArea,
    strMealThumb,
    strYoutube,
    strInstructions,
  } = items;
  const [tableBtn, setTableBtn] = useState(0);
  const [classList, setClassList] = useState(
    "table table-striped table-hover Recipe-table"
  );
  const [btnContent, setBtnContent] = useState(false);
  const [btnClass, setBtnClass] = useState("Recipe-btn btn btn-success mt-4 mb-2")

  useEffect(() => {
    if (tableBtn === 0) {
      setClassList("d-none");
    } else if (tableBtn === 1) {
      setBtnClass("Recipe-btn btn btn-success mt-4 mb-2 disabled")
      setClassList(
        "table table-striped table-hover Recipe-table Recipe-table-hide"
      );
      setTimeout(() => {
        setClassList("d-none");
        setBtnClass("Recipe-btn btn btn-success mt-4 mb-2")
      }, 1500);
    } else {
      setBtnClass("Recipe-btn btn btn-success mt-4 mb-2 disabled")
      setClassList(
        "table table-striped table-hover Recipe-table Recipe-table-show"
      );
      setTimeout(() => {
        setBtnClass("Recipe-btn btn btn-success mt-4 mb-2")
      }, 1000);
    }
  }, [tableBtn]);

  const tableBtn1 = () => {
    if (tableBtn === 0 || tableBtn === 1) {
      setTableBtn(2);
      setBtnContent(true);
    } else {
      setTableBtn(1);
      setBtnContent(false);
    }
  };

  useEffect(() => {
    getMealById(id).then((data) => {
      setItems(data.meals[0]);
    });
  }, []);

  if(!items){
    return <Loader />
  }

  return (
    <div className="content container pb-5">
      <h1 className="my-5">{strMeal}</h1>
      <div className="img-container mb-5">
        <a href={strMealThumb}>
          <img
            src={strMealThumb}
            className="img-fluid img-thumbnail"
            alt={strMeal}
          />
        </a>
      </div>
      <iframe
        className="Recipe-yt"
        width="948"
        height="533"
        src={`https://www.youtube.com/embed/${String(strYoutube).slice(
          32,
          String(strYoutube).length
        )}`}
        title={strMeal}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="text-start mt-3">
        <b>Category: </b>
        {strCategory} <br />
        <b>Area: </b>
        {strArea ? strArea : ""} <br />
      </p>
      <div className="text-start">
        <button
          onClick={tableBtn1}
          className={btnClass}
        >
          {btnContent ? "Hide Recipe" : "Show Recipe"}
        </button>
      </div>
      <table className={classList}>
        <thead>
          <tr>
            <th>#</th>
            <th>Ingredient</th>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map((e) => {
            if (e.includes("strIngredient") && items[e]) {
              return (
                <tr key={e}>
                  <th>{e.slice(13)}</th>
                  <td>{items[e]}</td>
                  <td>{items[`strMeasure${e.slice(13)}`]}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <br />
      <p className="text-start">{strInstructions}</p>
    </div>
  );
};

export default Recipe;

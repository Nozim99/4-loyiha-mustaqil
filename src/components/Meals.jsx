import {useNavigate} from 'react-router-dom'

const Meals = ({ strMeal, strMealThumb, idMeal }) => {
    const navigate = useNavigate()
  return (
      <div className="card m-2 py-2 Meals-card">
        <img src={strMealThumb} className="card-img-top" alt={strMeal} />
        <div className="card-body position-relative">
          <h5 className="card-title">{strMeal.length > 20 ? strMeal.slice(0, 20)+'...' : strMeal}</h5>
          <p className="card-text">
            {strMeal.length > 50 ? strMeal.slice(0, 50) + "..." : strMeal}
          </p>
          <button onClick={()=>navigate(`${idMeal}`)} className="btn btn-primary Meals-btn position-absolute bottom-0 start-50 translate-middle-x">Show Recipe</button>
        </div>
      </div>
  );
};

export default Meals;

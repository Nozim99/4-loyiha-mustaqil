import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Loader2 } from './Loader';

const Meals = ({ strMeal, strMealThumb, idMeal }) => {
    const navigate = useNavigate()
    const [url, setUrl] = useState('')
    useEffect(()=>{
      fetch(strMealThumb).then(data => {
        if(data.status === 200){
          setUrl(data.url)
        }
      })
    }, [strMealThumb])


  return (
      <div className="card m-2 py-2 Meals-card">
        <div className='Beef-cards'>
          {!url ? <Loader2 /> : <img src={url} className="card-img-top card_img" alt={strMeal} />}
        
        </div>
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

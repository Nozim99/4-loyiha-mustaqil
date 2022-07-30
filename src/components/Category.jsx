import {useNavigate} from "react-router-dom"

const CategoryList = ({strCategory, strCategoryThumb, strCategoryDescription}) => {
    const navigate = useNavigate()

  return (
      <div className="card m-2 py-2" style={{width: "18rem"}}>
        <img src={strCategoryThumb} className="card-img-top" alt={strCategory} />
        <div className="card-body">
          <h5 className="card-title">strCategory</h5>
          <p className="card-text">
            {strCategoryDescription.length > 50 ? strCategoryDescription.slice(0, 50) + '...' : strCategoryDescription}
          </p>
          <button onClick={()=>navigate(`meals/${strCategory}`)} href="#" className="btn btn-primary">
            Show Categories
          </button>
        </div>
      </div>
  );
};

export default CategoryList;

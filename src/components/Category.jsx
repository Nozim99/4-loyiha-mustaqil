import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "./Loader";

const CategoryList = ({
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  const navigate = useNavigate();

  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    fetch(strCategoryThumb).then((data) => {
      setImgSrc(data.url)
    });
  }, [strCategoryThumb]);

  return (
    <div className="card m-2 py-2" style={{ width: "18rem" }}>
      <div className="card_img_box">
        {imgSrc ? <img
          src={imgSrc}
          className="card-img-top card_img"
          alt={strCategory}
        /> : <Loader2 />}
        
      </div>
      <div className="card-body">
        <h5 className="card-title">strCategory</h5>
        <p className="card-text">
          {strCategoryDescription.length > 50
            ? strCategoryDescription.slice(0, 50) + "..."
            : strCategoryDescription}
        </p>
        <button
          onClick={() => navigate(`meals/${strCategory}`)}
          href="#"
          className="btn btn-primary"
        >
          Show Categories
        </button>
      </div>
    </div>
  );
};

export default CategoryList;

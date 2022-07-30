import { useEffect, useState } from "react";
import { getByCategory } from "../api";
import Category from "../components/Category";
import {Loader} from "../components/Loader";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getByCategory().then((data) => {
      setCategories(data.categories);
    });
  }, []);

  return (
    <div className="container pb-5">
        <h1 className="py-5">Categories</h1>
      <div className="content row d-flex justify-content-center">
        {!categories.length ? (
          <Loader />
        ) : (
          categories.map((element) => (
            <Category key={element.idCategory} {...element} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;

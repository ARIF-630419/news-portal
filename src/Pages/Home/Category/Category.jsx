import { useLoaderData, useParams } from "react-router-dom";
import Cards from "../Cards/Cards";

const Category = () => {
  const { id } = useParams();
  const categories = useLoaderData();
  return (
    <div>
      {id && <h2>This is category {categories.length}</h2>}
      <div>
        {
          categories.map(news => <Cards key={news._id} news={news}></Cards>)
        }
      </div>
    </div>
  );
};

export default Category;
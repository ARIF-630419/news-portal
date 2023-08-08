import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const LeftNav = () => {
  const [categoris, setCategoris] = useState([]);
  useEffect(() => {
    fetch("https://news-portal-server-ariful25-013-diuedubd.vercel.app/categories")
      .then(res => res.json())
      .then(data => setCategoris(data))
      .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <h4>All Category</h4>
      <div className="ps-4">
        {
          categoris.map(categori => <p key={categori.id}>
            <Link to={`/categoris/${categori.id}`} className="text-decoration-none text-black">{categori.name}</Link>
          </p>)
        }
      </div>
    </div>
  );
};

export default LeftNav;
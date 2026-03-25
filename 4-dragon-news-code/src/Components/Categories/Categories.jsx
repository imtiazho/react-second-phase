import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="font-semibold">All Category</h2>
      <div className="flex flex-col gap-2 mt-5 text-left">
        {
          categories.map(eachCate => <NavLink to={`/category/${eachCate.id}`} className="btn border-0 bg-white shadow-none hover:bg-base-200 justify-start text-accent" key={eachCate.id}>{eachCate.name}</NavLink>)
        }
      </div>
    </div>
  );
};

export default Categories;

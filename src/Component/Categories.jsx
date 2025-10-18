import React, { use } from "react";
import { NavLink } from "react-router";

//ebhabe data fetch kora sohoj ar eti data load na howa porjonto component render hoy na etar madhome loading dekhano sohoj tai react19 er modhe ebhabe data fetch kora hoy
const categoriePromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoriePromise);

  // console.log(categories);

  return (
    <div className=" ">
      <h2 className=" font-semibold">All Categories</h2>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((categorie) => {
          return (
            <NavLink
              to={`/category/${categorie.id}`}
              key={categorie.id}
              className={
                "btn bg-base-100  hover:bg-base-200 border-none font-semibold text-accent"
              }
            >
              {categorie.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

import CategoryItem from "./CategoryItem.jsx";

function Category({loaderData}) {
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl border border-slate-600 bg-dark text-light">Browse by
        category</h1>
      <ul className="home-category-ul">
        {loaderData.categories.map((item, index) => <CategoryItem item={item} key={index}/>)}
      </ul>
    </div>
  );
}

export default Category;
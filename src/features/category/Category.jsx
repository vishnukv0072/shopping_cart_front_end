import CategoryItem from "./CategoryItem.jsx";



function Category({loaderData}) {
  return (
    <ul className="home-category-ul">
      {loaderData.categories.map((item, index) => <CategoryItem item={item} key={index}/>)}
    </ul>
  );
}

export default Category;
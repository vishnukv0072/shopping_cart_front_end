import CategoryItem from "./CategoryItem.jsx";
import {getUser} from "../user/userSlice.jsx";
import {useSelector} from "react-redux";

function Category({loaderData}) {
  const user = useSelector(getUser);
  const text = user.isAuthenticated ? "Your recent searches" : "Most searched categories";
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl border border-slate-600 bg-dark text-light uppercase tracking-wider">{text}</h1>
      <ul className="home-category-ul">
        {Object.entries(loaderData.categories).map(([category, images], index) => <CategoryItem category={category} images={images} key={index}/>)}
      </ul>
    </div>
  );
}

export default Category;
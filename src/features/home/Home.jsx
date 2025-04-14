import {getCategories} from "../../services/apiProduct.js";
import Category from "../category/Category.jsx";
import Welcome from "../../ui/Welcome.jsx";
import {useLoaderData} from "react-router-dom";

// import {Slider, Stack} from "@mui/material";


function Home() {
  const loaderData = useLoaderData();
  return (
    <div>
      <Welcome/>
      <div className="max-w-[80rem] m-auto">
        <Category loaderData={loaderData}/>
      </div>
    </div>
  );
}

export async function loader() {
  return await getCategories();
}

export default Home;
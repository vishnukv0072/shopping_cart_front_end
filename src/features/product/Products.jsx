import {getProducts} from "../../services/apiProduct.js";
import {useLoaderData} from "react-router-dom";
import ProductItem from "./ProductItem.jsx";
import ProductsFilter from "./ProductsFilter.jsx";

function Products() {
  const loaderData = useLoaderData();
  return (
    <>
      <ProductsFilter/>
      <div className="px-5">
        <ul className="space-y-2">
          {loaderData.data.map(item => <ProductItem item={item} key={item.id}/>)}
        </ul>
      </div>
    </>
  );
}

export async function loader({params}) {
  const query = params.productType;
  return await getProducts({query});
}

export default Products;
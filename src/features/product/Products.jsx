import {getProducts} from "../../services/apiProduct.js";
import {useLoaderData} from "react-router-dom";
import ProductItem from "./ProductItem.jsx";
import ProductsFilter from "./ProductsFilter.jsx";
import {Pagination} from "@mui/material";

function Products() {
  const loaderData = useLoaderData();
  return (
    <>
      <ProductsFilter/>
      <div className="p-5">
        <ul className="space-y-[30px]">
          {loaderData.data.map(item => <ProductItem item={item} key={item.id}/>)}
        </ul>
      </div>
      <Pagination count={10} onClick={(e,v,f) => console.log(e,v,f)} />
    </>
  );
}

export async function loader({params}) {
  const query = params.productType;
  return await getProducts({query});
}

export default Products;
import ProductItem from "./ProductItem.jsx";
import ProductsFilter from "./ProductsFilter.jsx";
import {Pagination} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {clearAll, fetchProducts, setLoading, setQuery,} from "../search/SearchSlice.js";

function Products() {
  const params = useParams();
  const search = useSelector(store => store.search)
  const dispatch = useDispatch();
  const results = useSelector(store => store.search.results);

  useEffect(() => {
    if (search.query !== params.productType) {
      dispatch(clearAll());
      dispatch(setQuery(params.productType));
      dispatch(fetchProducts());
    } else {
      dispatch(setLoading(false));
    }
  }, []);

  return (
    <div className="pb-5">
      <ProductsFilter/>
      <div className="p-5">
        <ul className="space-y-[30px]">
          {results.map(item => <ProductItem item={item} key={item.id}/>)}
        </ul>
      </div>
      <Pagination count={10} className="flex justify-center" onClick={(e,v,f) => console.log(e,v,f)} />
    </div>
  );
}

export default Products;
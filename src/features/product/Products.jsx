import ProductItem from "./ProductItem.jsx";
import ProductsFilter from "./ProductsFilter.jsx";
import {Pagination} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {clearAll, fetchProducts, getResults, setLoading, setQuery,} from "../search/searchSlice.js";
import CartWidget from "../cart/CartWidget.jsx";
import {getCartItemIds, getCartItemsCount} from "../cart/cartSlice.js";
import {getCurrencyValue} from "../otherSlices/miscSlice.js";

function Products() {
  const params = useParams();
  const search = useSelector(store => store.search)
  const dispatch = useDispatch();
  const results = useSelector(getResults);
  const cartItemsCount = useSelector(getCartItemsCount);
  const cartItemIds = useSelector(getCartItemIds);
  const currencyValue = useSelector(getCurrencyValue);


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
      {results.length > 0 && <ProductsFilter currencyValue={currencyValue}/>}
      <div className="p-5">
        <ul className="space-y-[30px]">
          {results.map(item => <ProductItem item={item} currencyValue={currencyValue} cartItemIds={cartItemIds} key={item.id}/>)}
        </ul>
      </div>
      <CartWidget cartItemsCount={cartItemsCount} />
      <Pagination count={10} className="flex justify-center" onClick={(e,v,f) => console.log(e,v,f)} />
    </div>
  );
}

export default Products;
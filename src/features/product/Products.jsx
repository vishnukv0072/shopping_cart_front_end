import ProductItem from "./ProductItem.jsx";
import ProductsFilter from "./ProductsFilter.jsx";
import {Pagination} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {
  clearAll,
  fetchProducts, getIsSearching, getMaxPages, getOffset,
  getResults,
  getSearchQuery, setLoading, setOffset,
  setQuery,
} from "../search/searchSlice.js";
import CartWidget from "../cart/CartWidget.jsx";
import {getCartItemIds, getCartItemsCount} from "../cart/cartSlice.js";
import {getCurrencyValue} from "../otherSlices/miscSlice.js";
import NoResult from "../../ui/NoResult.jsx";

function Products() {
  const currentOffset = useSelector(getOffset);
  const maxPages = useSelector(getMaxPages);
  const params = useParams();
  const searchQuery = useSelector(getSearchQuery)
  const dispatch = useDispatch();
  const results = useSelector(getResults);
  const cartItemsCount = useSelector(getCartItemsCount);
  const cartItemIds = useSelector(getCartItemIds);
  const currencyValue = useSelector(getCurrencyValue);
  const isSearching = useSelector(getIsSearching);


  useEffect(() => {
    if (searchQuery !== params.productType) {
      dispatch(clearAll());
      dispatch(setQuery(params.productType));
      dispatch(fetchProducts());
    } else {
      if (results.length !== 0) dispatch(setLoading(false));
    }
  }, [searchQuery, params.productType]);

  function handleChange(e, v) {
    dispatch(setLoading(true));
    dispatch(setOffset(v - 1));
    dispatch(fetchProducts());
  }

  if (!isSearching && results.length === 0) return <NoResult/>
  return (
    <div className="pb-5">
      {results.length > 0 && <ProductsFilter currencyValue={currencyValue}/>}
      <div className="p-5">
        <ul className="space-y-[30px]">
          {results.map(item => <ProductItem item={item} currencyValue={currencyValue} cartItemIds={cartItemIds} key={item.id}/>)}
        </ul>
      </div>
      <CartWidget cartItemsCount={cartItemsCount} />
      {results.length > 0 && <Pagination count={maxPages} page={currentOffset + 1} className="flex justify-center" onChange={handleChange} />}
    </div>
  );
}

export default Products;
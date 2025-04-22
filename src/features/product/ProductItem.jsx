import {Rating} from "@mui/material";
import Typography from "@mui/material/Typography";
// import {convertCurrency, formatCurrency} from "../../utils/helpers.js";
import Button from "../../ui/Button.jsx";
import {useDispatch} from "react-redux";
import {addItem} from "../cart/cartSlice.js";
import {useState} from "react";

// async function getPrice(price) {
//   const converted = await convertCurrency(price);
//   return formatCurrency(converted);
// }

function ProductItem({item}) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  function addToCart() {
    setAdded(true);
    dispatch(addItem(item));
  }

  return (
    <li>
      <div className="grid grid-cols-2 bg-white p-3 min-h-60 sm:grid-cols-4">
        <div className="flex items-start justify-center col-span-2 w-[70%] sm:col-span-1 mb-2 sm:mb-0">
          <img src={item.image_url} alt={item.category}/>
        </div>
        <div className="px-5 relative col-span-2 sm:col-span-3">
          <p>{item.title}</p>
          <div className="flex items-center my-2 gap-2">
            <Rating name="half-rating-read" value={item.rating} precision={0.5} readOnly/>
            <Typography component="legend">{item.rating} ({item.reviews_count})</Typography>
          </div>
          <p>{item.price}</p>
          <div className="space-y-2 mt-6 lg:absolute lg:bottom-0 lg:mt-0">
            {
              added ? (
                <Button type="dark">Remove item</Button>
              ) : (
                <Button type="dark" onClick={addToCart}>Add to cart</Button>
              )
            }
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
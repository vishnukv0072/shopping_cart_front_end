import {Rating} from "@mui/material";
import Typography from "@mui/material/Typography";
import {convertCurrency} from "../../utils/helpers.js";

function ProductItem({item}) {

  return (
    <li>
      <div className="flex">
        <img src={item.image_url} alt={item.category} className="max-w-[200px] min-w-[200]px"/>
        <div className="p-5">
          <p>{item.title}</p>
          <div className="flex items-center my-2 gap-2">
            <Rating name="half-rating-read" value={item.rating} precision={0.5} readOnly/>
            <Typography component="legend">{item.rating} ({item.reviews_count})</Typography>
          </div>
          <p>{(convertCurrency(item.price))}</p>
          <div className="space-x-4">
            <button className="bg-dark text-light p-3 rounded cursor-pointer">Add to cart</button>
            <button className="bg-dark text-light p-3 rounded cursor-pointer">Buy now</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
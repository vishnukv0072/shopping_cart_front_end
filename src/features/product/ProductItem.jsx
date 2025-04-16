import {Rating} from "@mui/material";
import Typography from "@mui/material/Typography";
import {convertCurrency} from "../../utils/helpers.js";
import Button from "../../ui/Button.jsx";

function ProductItem({item}) {

  return (
    <li>
      <div className="grid grid-cols-2 bg-white p-3 sm:grid-cols-4">
        <div className="flex items-start justify-center col-span-2 sm:col-span-1 mb-2 sm:mb-0">
          <img src={item.image_url} alt={item.category}/>
        </div>
        <div className="px-5 relative col-span-2 sm:col-span-3">
          <p>{item.title}</p>
          <div className="flex items-center my-2 gap-2">
            <Rating name="half-rating-read" value={item.rating} precision={0.5} readOnly/>
            <Typography component="legend">{item.rating} ({item.reviews_count})</Typography>
          </div>
          <p>{(convertCurrency(item.price))}</p>
          <div className="space-x-4 space-y-2 absolute bottom-0">
            <Button type="dark">Buy now</Button>
            <Button type="dark">Add to cart</Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
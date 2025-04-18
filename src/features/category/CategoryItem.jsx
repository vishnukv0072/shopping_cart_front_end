import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setLoading} from "../search/SearchSlice.js";

function clipLong(input, length) {
  const clipped = input.split("").slice(0, length).join("");
  return clipped.length === input.length ? [clipped] : `${clipped}....`;
}

function CategoryItem({category, images}) {
  const dispatch = useDispatch();
  return (
    <li>
      <Link to={`/products/${category}`} onClick={() => setTimeout(() => dispatch(setLoading(true)), 50)}>
        <Card sx={{maxWidth: 345, padding: 1}}>
          <CardActionArea>
            <div title={category}>
              <div className="image-box">
                {images.map((img, i) => <img src={img} alt={category} key={i}/>)}
              </div>
              <CardContent>
                <p className="min-h-[55px] text-center">{clipLong(category, 20)}</p>
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
      </Link>
    </li>
  );
}

export default CategoryItem;
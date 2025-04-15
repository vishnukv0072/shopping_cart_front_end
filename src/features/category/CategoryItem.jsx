import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {Link} from "react-router-dom";

function clipLong (input, length) {
  const clipped = input.split("").slice(0, length).join("");
  return clipped.length === input.length ? [clipped] : `${clipped}....`;
} 

function CategoryItem({category, images}) {
  return (
    <li>
      <Link to={`/products/${category}`}>
        <Card sx={{maxWidth: 345, padding: 1}}>
          <CardActionArea>
            <div title={category}>
              <div className="image-box">
                {images.map((img, i) => <img src={img} alt={category} key={i}/>)}
              </div>
              <CardContent>
                <p className="min-h-[55px] text-center">{clipLong(category, 20)}</p>
                {/*<Typography gutterBottom variant="h5" component="div">*/}
                {/*  {item.name}*/}
                {/*</Typography>*/}
                {/*<Typography variant="body2" sx={{ color: 'text.secondary' }}>*/}
                {/*  {item.name}*/}
                {/*</Typography>*/}
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
      </Link>
    </li>
  );
}

export default CategoryItem;
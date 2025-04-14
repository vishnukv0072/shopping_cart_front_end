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

function CategoryItem({item}) {
  return (
    <li>
      <Link to={`/${item.name}`} >
      <Card sx={{ maxWidth: 345, padding: 1 }}>
        <CardActionArea>
      <div title={item.name}>
          <div className="image-box">
            {item.image.map((img, i) => <img src={img} alt={item.name} key={i}/>)}
          </div>
      {/*  <p>{clipLong(item.name, 20)}</p>*/}

          <CardContent>
            <p className="min-h-[55px] text-center">{clipLong(item.name, 20)}</p>
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
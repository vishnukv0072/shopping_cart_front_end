import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function CategoryItem({item}) {
  return (
    <li>
      <Card sx={{ maxWidth: 345, padding: 1 }}>
        <CardActionArea>
          <div className="grid grid-column-4">
            {item.image.map(img => <img src={img} alt={item.name}/>)}
          </div>


          <CardContent>
            <p>{item.name}</p>
            {/*<Typography gutterBottom variant="h5" component="div">*/}
            {/*  {item.name}*/}
            {/*</Typography>*/}
            {/*<Typography variant="body2" sx={{ color: 'text.secondary' }}>*/}

            {/*</Typography>*/}
          </CardContent>
        </CardActionArea>
      </Card>
    </li>
  );
}

export default CategoryItem;
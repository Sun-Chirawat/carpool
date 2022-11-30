import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material';
import { CardActionArea } from '@mui/material';


const cardArr = 
[{img: 'motorcycle.jpg',title:'Mortorcycle', textContent : 'when they ask if you have any special skill to perform'},
{img: 'pickup.jpg',title:'Pickup', textContent: 'อยากสบายก็ไปขึ้นรถทัวร์ อยากใจเต้นรัวๆให้ขึ้นคันนี้'},
{img: 'car.jpg',title:'Car', textContent: 'It is your problem not my problem'},
{img: 'bus.jpg',title:'Bus', textContent : 'Fast and Furious'},
{img: 'Van.jpg',title:'Van', textContent : 'Rare pokemon inside'},
{img: 'car1.jpg',title:'Car', textContent: 'Who needs a moving van?'},]


const listCard = cardArr.map( (e) => 
<Card sx={{ margin : '30px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={e.img}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {e.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {e.textContent} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
)


export default function card() {
  return (
    <>
    {listCard}
    </>
    
    )
}
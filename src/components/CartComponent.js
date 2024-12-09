import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { cartDecreaseItem, cartIncreaseItem } from '../redux/slice/cartSlice';

export default function CartComponent({ data }) {
  console.log(data);
   const dispatch=useDispatch(); 
  const increaseItem=(id,actualPrice)=>{
    dispatch(cartIncreaseItem({id,actualPrice}))
  }
  const decreaseItem=(id,actualPrice)=>{
    dispatch(cartDecreaseItem({id,actualPrice}))
  }
  return (
    <Box
      sx={{
        my: 2,
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {data.length > 0 ? (
        data.map((item, index) => (
          <Card
            key={index}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, 
              my: 2,
              justifyContent: 'space-between',
              width: { xs: '100%', sm: '700px' },
              maxWidth: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                padding: { xs: 2, sm: 3 },
              }}
            >
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {item.title.length > 50
                    ? `${item.title.slice(0, 30)}...`
                    : item.title}
                </Typography>
                <Typography component="div" variant="body2" color="text.secondary">
                  {item.description.length > 90
                    ? `${item.description.slice(0, 180)}...`
                    : item.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: 'text.secondary' }}
                >
                  {item.category}
                </Typography>
                <Box sx={{display:'flex',gap:'10px'}}>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: 'green' }}
                >
                  ${item.price}
                </Typography>
                 
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: 'green' }}
                >
                 {`(${item.count} Item)`}
                </Typography>
                </Box>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  pl: 1,
                  pb: 1,
                  gap: 1,
                }}
              >
                <Button variant="contained" onClick={(e)=>increaseItem(item.id,item.actualPrice)}>
                  <AddIcon />
                </Button>
                <Button variant="contained"  onClick={(e)=>decreaseItem(item.id,item.actualPrice)}>
                  <RemoveIcon/>
                </Button>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{
                width: { xs: '100%', sm: 181 },
                height: { xs: 200, sm: 'auto' },
                objectFit: 'contain',
                marginRight: { xs: 0, sm: '10px' },
              }}
              image={item.image}
              alt="Product image"
            />
          </Card>
        ))
      ) : (
        <Typography variant="body1" align="center">
          No items in the cart
        </Typography>
      )}
    </Box>
  );
}

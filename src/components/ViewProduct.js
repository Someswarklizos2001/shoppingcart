import {
  Box,
  Grid,
  CardMedia,
  Typography,
  Stack,
  Chip,
  Button,
  Skeleton,
} from "@mui/material";
import axios from "axios";
import styles from "./ViewProduct.module.css";
import StarIcon from "@mui/icons-material/Star";
import SellIcon from "@mui/icons-material/Sell";
import { Navigate, useParams } from "react-router-dom";
import { ProductCards } from "./ProductCards";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/slice/cartSlice";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const ViewProduct = () => {
 
  
  const { id, category } = useParams();
  const { cart_id } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(()=>{

    window.scrollTo(0,0);
  },[id]);
  
  const {data:result,isLoading:load,isError}=useQuery({
    queryKey:['productById',id],
    queryFn:()=>{
      return axios.get(`https://fakestoreapi.com/products/${id}`)
    },
    select:(data)=>data.data,
    
  })

  const {data:result1,isError:error1}=useQuery({
    queryKey:['DetailsByCategory',category],
    queryFn:()=>{
      return axios.get(`https://fakestoreapi.com/products/category/${category}`)
    },
    select:(data)=>data.data,
    
  })

  if(isError|| error1) return <Navigate to='/error'/>

  return (
    <Box>
      <Grid container spacing={2} sx={{ padding: { xs: "0px", md: "67px" } }}>
        <Grid item xs={12} lg={5} className={styles.childGrid1}>
          {load ? (
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={300}
              height={500}
            />
          ) : (
            <CardMedia
              component="img"
              src={result.image}
              sx={{ width: { xs: "300px", md: "400px" }, objectFit: "contain" }}
              className={styles.image}
            />
          )}
        </Grid>
        <Grid item xs={12} lg={7} className={styles.childGrid2}>
          <Box sx={{ width: { xs: "300px", sm: "500px", lg: "700px" } }}>
            <Typography variant="h6" color="text.secondary">
              {load ? <Skeleton animation="wave" /> : result.title}
            </Typography>
            <Box className={styles.childGrid3}>
              <Stack direction="row">
                <Chip icon={<StarIcon />} label="5" />
              </Stack>
              <Typography variant="body2">
                5,453 Ratings & 903 Reviews
              </Typography>
            </Box>
            <Typography variant="body2" color="red" sx={{ my: 1 }}>
              Hurry, only a few product left!
            </Typography>
            <Typography variant="body2">
              <Box className={styles.childGrid3}>
                <SellIcon sx={{ color: "green" }} />
                Available offers Bank Offer 5% Unlimited Cashback on Flipkart
                Axis Bank Credit Card T&C
              </Box>
            </Typography>
            <Typography variant="body2">
              <Box className={styles.childGrid3}>
                <SellIcon sx={{ color: "green" }} />
                Bank Offer10% off up to ₹750 on HDFC Bank Credit Card EMI on 3
                months tenure. Min. Txn Value: ₹7,500T&C
              </Box>
            </Typography>
            <Typography variant="body2">
              <Box className={styles.childGrid3}>
                <SellIcon sx={{ color: "green" }} />
                Bank Offer10% off up to ₹1,000 on HDFC Bank Credit Card EMI on 6
                and 9 months tenure. Min Txn Value: ₹7,500T&C
              </Box>
            </Typography>
            <Typography variant="body2">
              <Box className={styles.childGrid3}>
                <SellIcon sx={{ color: "green" }} />
                Special PriceGet extra 36% off (price inclusive of
                cashback/coupon)T&C
              </Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ my: 2 }}>
              {load ? (
                <Skeleton animation="wave" height={90} />
              ) : (
                result.description
              )}
            </Typography>
            <Box className={styles.childGrid3}>
              <Typography variant="h6" color="green">
                {load ? (
                  <Skeleton animation="wave" width={40} />
                ) : (
                  `$${result.price}`
                )}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ textDecoration: "line-through" }}
              >
                {load ? (
                  <Skeleton animation="wave" width={50} />
                ) : (
                  `$${(1.5 * result.price).toFixed(2)}`
                )}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                25% off
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary">
              {load ? (
                <Skeleton animation="wave" width={90} />
              ) : (
                result.category
              )}
            </Typography>
            <Button
              variant="contained"
              sx={{ borderRadius: 4, padding: 2, my: 2 }}
              disabled={cart_id.includes(result?.id)}
              onClick={(e) =>
                dispatch(
                  addCart({
                    id: result?.id,
                    count: 1,
                    title: result?.title,
                    image: result?.image,
                    category: result?.category,
                    actualPrice: result?.price,
                    price: result?.price,
                    description: result?.description,
                  })
                )
              }
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box>
        <Typography variant="h6" align="center" sx={{ padding: "20px" }}>
          Similar products you may interested in
        </Typography>

        <ProductCards result={result1} show={false} loading1={load} />
      </Box>
    </Box>
  );
};

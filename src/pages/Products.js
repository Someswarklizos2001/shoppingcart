import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { ProductCards } from "../components/ProductCards.js";
import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice/apiSlice.js";
import { Navigate } from "react-router-dom";

export const Products = () => {
  
  const { products, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status==='idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "failed") return <Navigate to="/error"/>;


  return (
    <Box>
      <Box className={styles.background}>
        <Box sx={{ left: { xs: "5%", md: "50%" } }} className={styles.body}>
          <Typography variant="body2" color="text.secondary">
            New Arrival
          </Typography>
          <Typography variant="h6">Discover Our New Collection</Typography>
          <Typography>
            "Discover a seamless shopping experience with our exclusive deals
            and premium products,
            <br /> crafted to meet your every need!"
          </Typography>
          <Button
            variant="contained"
            className={styles.btn}
            sx={{ mt: 2, borderRadius: 5 }}
          >
            Buy Now
          </Button>
        </Box>
      </Box>

      {status==='pending' ? <Box className={styles.center}><CircularProgress size={30}/></Box>:<ProductCards result={products} show={true} />}
    </Box>
  );
};

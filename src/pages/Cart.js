import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CartComponent from "../components/CartComponent";
import styles from "./Cart.module.css";

export const Cart = () => {
  const { cart,Total } = useSelector((state) => state.cart);

  return (
    <Box sx={{minHeight:"84vh"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} sx={{ marginTop: "20px" }}>
          <Typography variant="h5" sx={{ marginLeft: "40px" }}>
            Continue Shopping
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" sx={{ marginLeft: "40px" }}>
            Shopping cart
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginLeft: "40px" }}
          >
            you have {cart.length} items in your cart
          </Typography>

          <CartComponent data={cart} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{ padding: "20px" }}>
            <Typography variant="h6">Card type</Typography>

            <Divider sx={{ my: 2 }} />
            <Box className={styles.body1}>
              <span>subtotal</span>
              <span>{Total}</span>
            </Box>
            <Box className={styles.body1}>
              <span>Shipping</span>
              <span>$0</span>
            </Box>
            <Box className={styles.body1}>
              <span>Total(Tax incl.)</span>
              <span>${Total}</span>
            </Box>
            <Button>${Total}</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

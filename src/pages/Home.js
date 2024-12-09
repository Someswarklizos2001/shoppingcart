import { Box, Typography, Button, Grid, CircularProgress } from "@mui/material";
import { Navbar } from "../components/Navbar.js";
import { useState, useEffect } from "react";
import { ResponsiveNavbar } from "../components/ResponsiveNavbar.js";
import { Footer } from "../components/Footer.js";
import styles from "./Home.module.css";
import axios from "axios";
import { ProductCards } from "../components/ProductCards.js";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PaymentIcon from "@mui/icons-material/Payment";

export const Home = () => {
  const [result, setResult] = useState([]);
  const [load,setLoad]=useState(false);

  useEffect(() => {
    setLoad(true);

    axios
      .get("https://fakestoreapi.com/products?limit=8")
      .then((res) => {
        setResult(res.data);
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
        setLoad(false);
      });
  }, []);

  const [responsive, setResponsive] = useState(window.innerWidth);

  useEffect(() => {
    const ResizeFunc = () => {
      setResponsive(window.innerWidth);
    };
    window.addEventListener("resize", ResizeFunc);

    return () => {
      window.removeEventListener("resize", ResizeFunc);
    };
  }, []);

  return (
    <Box>
      {responsive > 738 ? <Navbar /> : <ResponsiveNavbar />}
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
            sx={{ borderRadius: 4, mt: 2 }}
            className={styles.btn}
          >
            Buy Now
          </Button>
        </Box>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography variant="h6" sx={{ marginLeft: "5%", my: 5 }}>
          How to use delivery service
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} className={styles.body2}>
            <LocalShippingIcon
              sx={{ fontSize: "2.5rem", color: "blueViolet" }}
            />
            <Typography variant="body1">choose your product</Typography>
            <Typography variant="body2">
              there are 20+ products for you
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.body2}>
            <PaymentIcon sx={{ fontSize: "2.5rem", color: "blueViolet" }} />
            <Typography variant="body1">we delivery it to you</Typography>
            <Typography variant="body2">Choose delivery service</Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.body2}>
            <ProductionQuantityLimitsIcon
              sx={{ fontSize: "2.5rem", color: "blueViolet" }}
            />
            <Typography variant="body1">Enjoy your product</Typography>
            <Typography variant="body2">
              Enjoy you new product got from us
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 5 }}>
        <Typography variant="h6" sx={{ marginLeft: "5%", }}>
          Browse The Range
        </Typography>
        <Typography variant="body2" sx={{ marginLeft: "5%", }} color="text.secondary">
          Lorem Ipsum dolor sit amet, Lorem dolor amet sit
        </Typography>

        <Box sx={{ my: 4 }}>
        {load?<Box className={styles.center}><CircularProgress size={30}/></Box>:<ProductCards result={result} show={false} />}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

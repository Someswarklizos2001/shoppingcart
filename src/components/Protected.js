import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { ResponsiveNavbar } from "./ResponsiveNavbar";
import { useState, useEffect } from "react";
import { Footer } from "./Footer";

export const Protected = () => {
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
      <Outlet />
      <Footer />
    </Box>
  );
};

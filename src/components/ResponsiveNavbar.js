import { Box, Divider, Typography } from "@mui/material";
import "./ResponsiveNavbar.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export const ResponsiveNavbar = () => {
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {hide ? (
        <Box className="responsiveNavbar">
          <div>
            <MenuIcon onClick={() => setHide(!hide)} />
            <Typography variant="body1" onClick={(e) => navigate("/")}>
              Shopping App
            </Typography>
          </div>
          <Divider sx={{ my: 2, width: "100vw" }} />
          <p onClick={(e) => navigate("/")}>Home</p>
          <p onClick={(e) =>navigate(`/products`)}>Products</p>
          <p onClick={(e) =>navigate(`/cart`)}>Cart</p>
        </Box>
      ) : (
        <Box className="MenuIcon">
          <MenuIcon onClick={() => setHide(!hide)} />
          <span onClick={(e) => navigate("/")}>Multi App</span>
        </Box>
      )}
    </Box>
  );
};

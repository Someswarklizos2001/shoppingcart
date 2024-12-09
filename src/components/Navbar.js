import { Box } from "@mui/material";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {

  return (
    <Box className="Navbar">
      <Box className="Navbar1">
        <NavLink to="/" className="navlink">
          Shopping App
        </NavLink>
      </Box>
      <Box className="Navbar2">
        <NavLink
          to="/"
          className="navlink"
          style={({ isActive }) => ({
            color: isActive ? "#7979bd" : "black",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className="navlink"
          style={({ isActive }) => ({
            color: isActive ? "#7979bd" : "black",
          })}
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          className="navlink"
          style={({ isActive }) => ({
            color: isActive ? "#7979bd" : "black",
          })}
        >
          Cart
        </NavLink>
      
      </Box>
    </Box>
  );
};

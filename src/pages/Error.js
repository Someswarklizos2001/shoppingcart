import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";
import styles from './Error.module.css';

export const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <Box
     className={styles.parent}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: "red", mb: 2 }} />
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Oops! Something Went Wrong
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "gray" }}>
        We couldn't find the page you were looking for. Please try again or go
        back to the home page.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        sx={{ borderRadius: 4, px: 4 }}
      >
        Go to Home Page
      </Button>
    </Box>
  );
};

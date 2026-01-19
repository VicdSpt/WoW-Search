import React from "react";
import { Box, Container, Typography, IconButton } from '@mui/material';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#6a0001",
        color: "white",
        py: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth={false} disableGutters sx={{ px: 2 }} >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography>
            © {new Date().getFullYear()} Victor dS - All rights reserved
          </Typography>
          <Box>
            <IconButton component="a" href="https://facebook.com" color="inherit" aria-label="Facebook" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton component="a" href="https://www.linkedin.com/feed/" color="inherit" aria-label="LinkedIn" target="_blank">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

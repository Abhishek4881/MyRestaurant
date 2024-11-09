import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from '@mui/icons-material/X';
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <a
            style={{ color: "white" }}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <InstagramIcon />
          </a>
          <a
            style={{ color: "white" }}
            href="https://www.twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <XIcon />
          </a>
          <a
            style={{ color: "white" }}
            href="https://www.github.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <GitHubIcon />
          </a>
          <a
            style={{ color: "white" }}
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <YouTubeIcon />
          </a>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved <br></br>
          <p style={{ fontSize: "16px" }}>&copy; Abhishek Anand</p>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;

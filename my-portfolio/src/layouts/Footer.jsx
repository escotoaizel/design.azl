import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          height: "75px",
          backgroundColor: "#212121",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" color="secondary">
          {"© "}
          {new Date().getFullYear() + " "}
          <a color="inherit" target="_blank" rel="noopener">
            Aizel Escoto. All rights reserved.
          </a>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;

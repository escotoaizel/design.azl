import { AppBar, Box, Button, Typography } from "@mui/material";
import aizel_logo from "../assets/AE Logo.png";

const Header = () => {
  return (
    <AppBar position="sticky" width="100%">
      <Box
        sx={{
          height: "75px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          padding: "0 90px 0 90px",
        }}
      >
        <img
          src={aizel_logo}
          alt="aizel logo"
          style={{ height: "50px", width: "50px" }}
        />
        <nav>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              listStyle: "none",
              gap: "32px",
            }}
          >
            <li>
              <Typography
                href="#"
                color="primary"
                style={{ textDecoration: "none" }}
              >
                Projects
              </Typography>
            </li>
            <li>
              <Typography
                href="#"
                color="primary"
                style={{ textDecoration: "none" }}
              >
                About
              </Typography>
            </li>
            <li>
              <Typography
                href="#"
                color="primary"
                style={{ textDecoration: "none" }}
              >
                Contact
              </Typography>
            </li>
            <li>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: "16px",
                  borderRadius: "8px",
                  padding: "10px 48px",
                  backgroundColor: "black",
                }}
              >
                Resume
              </Button>
            </li>
          </Box>
        </nav>
      </Box>
    </AppBar>
  );
};

export default Header;

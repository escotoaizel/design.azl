import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import aizel_logo from "../assets/AE Logo.png";

const Header = ({ handleButtonClick, handleOpenMenu }) => {
  return (
    <AppBar
      position="sticky"
      width="100%"
      sx={{
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          height: "75px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          borderBottom: "0.5px solid #3D3D3D80",
          paddingX: {
            xs: "22px",
            sm: "60px",
            md: "90px",
          },
        }}
      >
        <Box
          height={{
            xs: "35px",
            md: "45px",
          }}
        >
          <img src={aizel_logo} alt="aizel logo" style={{ height: "100%" }} />
        </Box>

        <nav>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                md: "flex",
              },
              alignItems: "center",
              listStyle: "none",
              gap: {
                sm: "24px",
                md: "32px",
              },
            }}
          >
            <Button onClick={() => handleButtonClick("section1")}>
              <Typography
                href="#"
                color="primary"
                style={{ textDecoration: "none" }}
              >
                Projects
              </Typography>
            </Button>
            <Button onClick={() => handleButtonClick("section1")}>
              <Typography
                href="#"
                color="primary"
                style={{ textDecoration: "none" }}
              >
                About
              </Typography>
            </Button>
            <Button onClick={() => handleButtonClick("section1")}>
              <Typography
                href="#"
                color="primary"
                style={{ textDecoration: "none" }}
              >
                Contact
              </Typography>
            </Button>
            <li>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: "16px",
                  borderRadius: "8px",
                  padding: {
                    sm: "10px 28px",
                    md: "10px 48px",
                  },
                  backgroundColor: "black",
                }}
                disableElevation
              >
                Resume
              </Button>
            </li>
          </Box>
        </nav>
        <MenuIcon
          onClick={handleOpenMenu}
          sx={{
            display: {
              xs: "block",
              sm: "none",
              md: "none",
            },
            color: "black",
          }}
        />
      </Box>
    </AppBar>
  );
};

Header.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
};

export default Header;

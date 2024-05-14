import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import aizel_logo from "../assets/AE Logo.png";

const Header = ({
  handleButtonClick,
  handleOpenMenu,
  handleDownloadResume,
  currentSection,
}) => {
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
          sx={{
            cursor: "pointer",
          }}
          onClick={() => handleButtonClick("home")}
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
            <Box
              sx={{
                cursor: "pointer",
                ":hover": {
                  borderBottom: "2px solid black",
                  marginBottom: "-1px",
                  transition: "all 0.1s ease-in-out",
                },
                borderBottom:
                  currentSection === "projects" && "2px solid black",
                marginBottom: currentSection === "-1px",
                transition: "all 0.15s ease-in-out",
              }}
              onClick={() => handleButtonClick("projects")}
            >
              <Typography
                href="#"
                color="primary"
                style={{ textDecoration: "none" }}
              >
                Projects
              </Typography>
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                ":hover": {
                  borderBottom: "2px solid black",
                  marginBottom: "-1px",
                  transition: "all 0.1s ease-in-out",
                },
                borderBottom: currentSection === "about" && "2px solid black",
                marginBottom: currentSection === "-1px",
                transition: "all 0.15s ease-in-out",
              }}
              onClick={() => handleButtonClick("about")}
            >
              <Typography
                href="#"
                color="primary"
                style={{ textDecoration: "none" }}
              >
                About
              </Typography>
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                ":hover": {
                  borderBottom: "2px solid black",
                  marginBottom: "-1px",
                  transition: "all 0.1s ease-in-out",
                },
                borderBottom: currentSection === "contact" && "2px solid black",
                marginBottom: currentSection === "-1px",
                transition: "all 0.15s ease-in-out",
              }}
              onClick={() => handleButtonClick("contact")}
            >
              <Typography
                href="#"
                color="primary"
                style={{ textDecoration: "none" }}
              >
                Contact
              </Typography>
            </Box>
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
                onClick={handleDownloadResume}
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
  handleDownloadResume: PropTypes.func.isRequired,
  currentSection: PropTypes.string.isRequired,
};

export default Header;

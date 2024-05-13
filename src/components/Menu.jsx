import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Drawer, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Menu = ({
  openMenu,
  handleOpenMenu,
  handleButtonClick,
  handleDownloadResume,
}) => {
  return (
    <>
      <Drawer
        open={openMenu}
        anchor="right"
        sx={{
          width: "100%",
          "& .MuiDrawer-paper": {
            width: "100%",
          },
        }}
      >
        <Box width={"100%"} textAlign={"right"} padding={"20px"}>
          <CloseIcon
            onClick={handleOpenMenu}
            sx={{
              fontSize: "24px",
              color: "black",
              cursor: "pointer",
            }}
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"25px"}
          padding={"50px 25px"}
          textAlign={"center"}
          sx={{
            width: "100%",
            "& .MuiDrawer-paper": {
              width: "100%",
            },
          }}
        >
          <Box
            onClick={() => {
              handleButtonClick("projects"), handleOpenMenu();
            }}
          >
            <Typography>Projects</Typography>
          </Box>
          <Box
            onClick={() => {
              handleButtonClick("about"), handleOpenMenu();
            }}
          >
            <Typography>About</Typography>
          </Box>
          <Box
            onClick={() => {
              handleButtonClick("contact"), handleOpenMenu();
            }}
          >
            <Typography>Contact</Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: "14px",
              borderRadius: "8px",
              paddingY: "11px",
              backgroundColor: "black",
              justifyContent: "center",
            }}
            disableElevation
            onClick={handleDownloadResume}
          >
            Resume
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

Menu.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  handleDownloadResume: PropTypes.func.isRequired,
};

export default Menu;

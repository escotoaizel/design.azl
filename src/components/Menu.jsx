import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Drawer, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Menu = ({ openMenu, handleOpenMenu }) => {
  return (
    <>
      <Drawer
        open={openMenu}
        padding={"88px 25px 0px 25px"}
        display={"flex"}
        backgroundColor={"lightgrey"}
        width={"100vw"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          width={"100%"}
          paddingTop={"50px"}
          textAlign={"center"}
        >
          <Box>
            <Typography>Projects</Typography>
          </Box>
          <Box>
            <Typography>About</Typography>
          </Box>
          <Box>
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
          >
            Resume
          </Button>
        </Box>
        <CloseIcon
          onClick={handleOpenMenu}
          sx={{ fontSize: "24px", color: "black", cursor: "pointer" }}
        />
      </Drawer>
    </>
  );
};

Menu.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
};

export default Menu;

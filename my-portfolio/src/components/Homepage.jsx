import { Box, Button, Typography } from "@mui/material";
import canva_icon from "../assets/canva_icon.svg";
import figma_icon from "../assets/figma_icon.svg";
import illustrator_icon from "../assets/illustrator_icon.svg";
import photoshop_icon from "../assets/photoshop_icon.svg";
import powerpoint_icon from "../assets/powerpoint_icon.svg";
import xd_icon from "../assets/xd_icon.svg";

const Homepage = () => {
  return (
    <>
      <Box
        sx={{
          padding: "212px 100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Typography variant="h5" color="initial">
          Hi! I’m Aizel, a freelance
        </Typography>
        <Typography
          fontSize={"110px"}
          color="initial"
          fontFamily={"Monument Extended"}
        >
          UI/UX DESIGNER
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <Box gap={"10px"} display={"flex"}>
            <img src={xd_icon} alt="xd icon" />
            <img src={illustrator_icon} alt="illustrator icon" />
            <img src={photoshop_icon} alt="photoshop icon" />
          </Box>
          <Typography variant="h5" color="initial">
            based in Pampanga, Philippines
          </Typography>
          <Box gap={"10px"} display={"flex"}>
            <img src={figma_icon} alt="figma icon" />
            <img src={canva_icon} alt="canva icon" />
            <img src={powerpoint_icon} alt="powerpoint icon" />
          </Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "350px",
              fontSize: "20px",
              borderRadius: "8px",
              padding: "10px 48px",
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
            }}
          >
            See Projects
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;

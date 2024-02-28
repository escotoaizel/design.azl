import { Box, Button, Typography } from "@mui/material";
// import canva_icon from "../assets/canva_icon.svg";
// import figma_icon from "../assets/figma_icon.svg";
// import illustrator_icon from "../assets/illustrator_icon.svg";
// import photoshop_icon from "../assets/photoshop_icon.svg";
// import powerpoint_icon from "../assets/powerpoint_icon.svg";
import title_photo from "../assets/title_photo.png";
// import xd_icon from "../assets/xd_icon.svg";

const Homepage = () => {
  return (
    <>
      <Box
        sx={{
          padding: "151px 100px 235px 100px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Typography variant="h5" color="initial">
          Hi! I’m Aizel, a freelance
        </Typography>
        <Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              fontSize={"170px"}
              color="initial"
              fontFamily={"Monument Extended"}
              lineHeight={"1"}
            >
              UX
            </Typography>
            <img
              src={title_photo}
              style={{
                height: "100%",
              }}
              alt="title photo"
            />
          </Box>
          <Typography
            fontSize={"170px"}
            color="initial"
            fontFamily={"Monument Extended"}
            lineHeight={"1"}
          >
            DESIGNER
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography variant="h5" color="initial">
            I specialize in creating intuitive and visually compelling digital
            interfaces to elevate user experiences.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "350px",
              fontSize: "20px",
              borderRadius: "8px",
              padding: "12px 48px",
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

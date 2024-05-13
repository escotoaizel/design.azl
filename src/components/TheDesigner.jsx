import Personal_Photo from "@/assets/Personal_Photo.png";
import handwave from "@/assets/handwave.svg";
import { Box, Typography } from "@mui/material";
import { forwardRef } from "react";

const TheDesigner = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Box
        sx={{
          padding: {
            xs: "48px 24px 60px 24px",
            sm: "72px 18px 72px 32px",
            md: "100px 100px 96px 100px",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box display={"flex"} alignItems={"end"} width={"100%"} zIndex={"1"}>
          <Typography
            fontSize={{
              xs: "20px",
              sm: "24px",
              md: "30px",
            }}
            fontWeight={600}
            color="initial"
          >
            About Me
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: "space-between",
            gap: {
              sm: "28px",
              md: "15%",
            },
            width: "100%",
            marginTop: {
              sm: "0px",
              md: "-45px",
            },
          }}
        >
          <Box
            sx={{
              paddingTop: {
                xs: "24px",
                sm: "36px",
                md: "111px",
              },
              width: {
                xs: "100%",
                sm: "50%",
              },
            }}
          >
            <Typography variant="body1" color="initial" marginBottom={"24px"}>
              Hi <img src={handwave} />, I&apos;m Aizel
            </Typography>
            <Typography variant="body1" color="initial" lineHeight={"1.5"}>
              As an adept UI/UX designer, I specialize in creating intuitive and
              visually compelling digital interfaces to elevate user
              experiences. My expertise extends to Graphic Design, where I
              leverage creativity to bring visual concepts to life. I work
              seamlessly with my daily-driver design tools such as Figma for UI
              designs and collaborative prototyping, Adobe Photoshop for
              creating engaging visuals, and Canva for precise graphic design.
            </Typography>
            <Typography variant="body1" marginTop={"40px"} lineHeight={"1.5"}>
              I bring hands-on experience from a dynamic role where I
              contributed significantly to the design development of building AI
              applications, and in creating Web3 website with integration of
              blockchain technology.
            </Typography>
          </Box>
          <Box
            sx={{
              width: {
                sm: "346px",
                md: "420px",
              },
              padding: {
                xs: "24px 0 0 0",
                sm: "90px 0 0 0",
                md: "0 89px 0 0",
              },
            }}
          >
            <img style={{ width: "100%" }} src={Personal_Photo} />
          </Box>
        </Box>
      </Box>
    </div>
  );
});

TheDesigner.displayName = "TheDesigner";

export default TheDesigner;

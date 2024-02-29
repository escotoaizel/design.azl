import My_Portrait from "@/assets/My_Portrait.png";
import { Box, Typography } from "@mui/material";

const TheDesigner = () => {
  return (
    <>
      <Box
        sx={{
          padding: "0 100px 212px 100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <Box display={"flex"} gap={"134px"} alignItems={"end"} width={"100%"}>
          <Box>
            <Typography
              fontSize={"60px"}
              fontFamily={"Monument Extended"}
              lineHeight={"1"}
              color="secondary"
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "black",
              }}
            >
              THE
            </Typography>
            <Typography
              fontSize={"80px"}
              lineHeight={"1"}
              color="initial"
              fontFamily={"Monument Extended"}
            >
              DESIGNER
            </Typography>
          </Box>
          <Box
            height={"38px"}
            width={"100%"}
            marginRight={"-100px"}
            marginBottom={"18px"}
            sx={{
              backgroundColor: "#212121",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            padding: "100px 0",
            display: "flex",
            justifyContent: "space-between",
            gap: "15%",
            width: "100%",
          }}
        >
          <Box
            sx={{
              paddingY: "111px",
              width: "50%",
            }}
          >
            <Typography variant="body1" color="initial" lineHeight={"1.5"}>
              As an adept <strong>UI/UX designer</strong>, I specialize in
              creating intuitive and visually compelling digital interfaces to
              elevate user experiences. Alongside, my expertise extends to
              <strong> social media graphic design</strong>, where I leverage
              creativity to bring visual concepts to life. I work seamlessly
              with my daily-driver design tools such as Figma for collaborative
              prototyping, Adobe Illustrator for precise graphic design, and
              Canva for creating engaging visuals.
            </Typography>
            <Typography variant="body1" marginTop={"40px"} lineHeight={"1.5"}>
              I bring hands-on experience from a dynamic role where I
              contributed significantly to the design development of building AI
              video-generating website, and in creating Web3 website with
              seamless integration of blockchain technology.
            </Typography>
          </Box>
          <Box
            sx={{
              height: "100%",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={My_Portrait}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TheDesigner;

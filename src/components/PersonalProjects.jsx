import { Box, Typography } from "@mui/material";
import EDC_Thumbnail from "../assets/EDC_Thumbnail.png";
import LCC_Thumbnail from "../assets/LCC_Thumbnail.png";
import Veritru_Thumbnail from "../assets/Veritru_Thumbnail.png";

const PersonalProjects = () => {
  // const projects = [
  //   {
  //     image: EDC_Thumbnail,
  //     title: "Every Decant Counts",
  //     tags: ["UI/UX Design", "E-commerce"],
  //     description:
  //       "Every Decant Counts is an ecommerce platform specializing in the sale of 100% authentic perfumes, offering a unique twist by offering them in convenient decant sizes.",
  //     link: "https://everydecantcounts.vercel.app/",
  //     background: "radial-gradient(circle, #843678 0%, #000000 100%)",
  //   },

  //   {
  //     image: Lacalle_Thumbnail,
  //     title: "La’ Calle Café",
  //     tags: ["UI/UX Design", "E-commerce"],
  //     description:
  //       "La Calle Café's ecommerce hub brings the charm of our local coffee shop online, offering a variety of espresso-based drinks (available in hot, iced and frappe), and an assortment of non-caffeinated beverages, as well as breads and pastries. This website serves as a virtual gateway on what La Calle Café has to offer.",
  //     background: "radial-gradient(circle, #5d3c28 0%, #000000 100%)",
  //   },
  //   {
  //     image: Veritru_Thumbnail,
  //     title: "Veritru",
  //     tags: ["UI/UX Design", "Web3", "Blockchain"],
  //     description:
  //       "Veritru A Web3 fact-checking application utilizing blockchain's decentralization, security, and immutability to combat fake news by storing and retaining fact-checked articles.",
  //     link: "https://veritru.vercel.app/",
  //     background: "radial-gradient(circle, #325175 0%, #000000 100%)",
  //   },
  // ];

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
          <Box
            height={"38px"}
            width={"100%"}
            marginLeft={"-100px"}
            marginBottom={"18px"}
            sx={{
              backgroundColor: "#212121",
            }}
          ></Box>
          <Box textAlign={"right"}>
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
              PERSONAL
            </Typography>
            <Typography
              fontSize={"80px"}
              lineHeight={"1"}
              color="initial"
              fontFamily={"Monument Extended"}
            >
              PROJECTS
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "60px",
          }}
          width={"100%"}
        >
          <img
            src={EDC_Thumbnail}
            style={{ width: "100%" }}
            alt="EDC Thumbnail"
          />
          <img
            src={LCC_Thumbnail}
            style={{ width: "100%" }}
            alt="EDC Thumbnail"
          />
          <img
            src={Veritru_Thumbnail}
            style={{ width: "100%" }}
            alt="Veritru Thumbnail"
          />
        </Box>
      </Box>
    </>
  );
};

export default PersonalProjects;

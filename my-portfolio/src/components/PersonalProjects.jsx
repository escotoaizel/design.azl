import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Catventures_Thumbnail from "../assets/Catventures_Thumbnail.png";
import EDC_Thumbnail from "../assets/EDC_Thumbnail.png";
import Veritru_Thumbnail from "../assets/Veritru_Thumbnail.png";

const PersonalProjects = () => {
  const projects = [
    {
      image: Veritru_Thumbnail,
      title: "Veritru",
      tags: ["UI/UX Design", "Web3", "Blockchain"],
      description:
        "Veritru A Web3 fact-checking application utilizing blockchain's decentralization, security, and immutability to combat fake news by storing and retaining fact-checked articles.",
      link: "https://veritru.vercel.app/",
    },
    {
      image: EDC_Thumbnail,
      title: "Every Decant Counts",
      tags: ["UI/UX Design", "E-commerce"],
      description:
        "Every Decant Counts is an ecommerce platform specializing in the sale of 100% authentic perfumes, offering a unique twist by offering them in convenient decant sizes.",
      link: "https://everydecantcounts.vercel.app/",
    },
    {
      image: Catventures_Thumbnail,
      title: "Catventures",
      tags: ["UI/UX Design", "E-commerce"],
      description:
        "Catventures is a brand that encourages people to embark on the journey of adopting and fostering cats while embracing the curiosity, playfulness, and wonder that comes with it.",
    },
  ];

  return (
    <>
      <Box
        sx={{
          padding: "212px 100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <Box display={"flex"} justifyContent={"center"} gap={"20px"}>
          <Typography
            fontSize={"80px"}
            fontFamily={"Monument Extended"}
            color="secondary"
            style={{
              "-webkit-text-stroke-width": "2px",
              "-webkit-text-stroke-color": "black",
            }}
          >
            PERSONAL
          </Typography>
          <Typography
            fontSize={"80px"}
            color="initial"
            fontFamily={"Monument Extended"}
          >
            PROJECTS
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "33px",
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 384,
                "&.MuiCard-root": {
                  boxShadow: "none",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100%"
                  image={project.image}
                  alt="veritru"
                />
                <CardContent
                  sx={{ gap: "16px", display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    gutterBottom
                    fontSize={"20px"}
                    fontFamily={"Monument Extended"}
                    component="div"
                  >
                    {project.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    {project.tags.map((tag, index) => (
                      <Box
                        key={index}
                        sx={{
                          border: "1px solid black",
                          padding: "4px 11px",
                          borderRadius: "3.5px",
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          {tag}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "231px",
                    fontSize: "16px",
                    borderRadius: "8px",
                    padding: "12px 48px",
                    backgroundColor: "black",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  View Case Study
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default PersonalProjects;

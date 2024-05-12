import Shooting_Star1 from "@/assets/Shooting_Star1.svg";
import Shooting_Star2 from "@/assets/Shooting_Star2.svg";
import star from "@/assets/Star1.svg";
import canva_icon from "@/assets/canva_icon.svg";
import figma_icon from "@/assets/figma_icon.svg";
import kitt_icon from "@/assets/kitt_icon.svg";
import photoshop_icon from "@/assets/photoshop_icon.svg";
import xd_icon from "@/assets/xd_icon.svg";
import { Box, Button, Typography } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <Box
        sx={{
          height: {
            xs: "127px",
            md: "150px",
          },
          position: "absolute",
          top: {
            xs: "90px",
            sm: "120px",
          },
          left: {
            xs: "-40px",
          },
        }}
      >
        <img src={Shooting_Star1} height={"100%"} alt="star" />
      </Box>
      <Box
        sx={{
          padding: {
            xs: "52px 24px 60px 24px",
            sm: "92px 80px 96px 80px",
            md: "71px 100px 96px 100px",
          },
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Box
          width={{
            xs: "100%",
            sm: "fit-content",
            md: "fit-content",
          }}
          display={"flex"}
          flexDirection={"column"}
          gap={{
            xs: "60px",
            sm: "60px",
            md: "72px",
          }}
        >
          <Typography
            fontSize={{
              xs: "22px",
              sm: "36px",
              md: "48px",
            }}
            textAlign={"center"}
            fontWeight={600}
            color="initial"
          >
            Transforming Digital Spaces:{" "}
            <Box
              display={{
                xs: "none",
                sm: "none",
                md: "inline",
              }}
            >
              <br />
            </Box>{" "}
            Crafting Engaging UI & Social Media Graphics{" "}
            <Box
              display={{
                xs: "none",
                sm: "none",
                md: "inline",
              }}
            >
              <br />
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "inline",
                },
              }}
            >
              <span>
                <img src={star} height={"25px"} />{" "}
              </span>
            </Box>
            with{" "}
            <Box
              sx={{
                display: {
                  xs: "inline",
                  sm: "none",
                },
              }}
            >
              <span>
                <img
                  src={star}
                  style={{
                    height: "14px",
                  }}
                />{" "}
              </span>
            </Box>{" "}
            2+ Years of{" "}
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "inline",
                  md: "none",
                },
              }}
            >
              <span>
                <br />
                <img src={star} height={"25px"} />
              </span>
            </Box>
            Figma & Canva Expertise{" "}
            <Box
              sx={{
                display: { xs: "inline-block", sm: "none", md: "inline-block" },
                height: {
                  xs: "14px",
                  md: "25px",
                },
              }}
            >
              <span>
                <img src={star} height={"100%"} />
              </span>
            </Box>
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: {
                  sm: "150px",
                  md: "180px",
                },
                height: {
                  xs: "40px",
                  sm: "44px",
                  md: "48px",
                },
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                },
                borderRadius: "8px",
                padding: {
                  xs: "12px 48px",
                  sm: "12px 44px",
                  md: "12px 48px",
                },
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
              }}
              disableElevation
            >
              Projects
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: {
                  sm: "150px",
                  md: "180px",
                },
                height: {
                  xs: "40px",
                  sm: "44px",
                  md: "48px",
                },
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                },
                border: "1px solid #212121",
                borderRadius: "8px",
                padding: {
                  xs: "12px 48px",
                  sm: "12px 44px",
                  md: "12px 48px",
                },
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
              }}
              disableElevation
            >
              Contact
            </Button>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              marginTop: {
                xs: "-24px",
                sm: "0px",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  sm: "14px",
                  md: "20px",
                },
              }}
              color="initial"
            >
              <a
                style={{
                  color: "black",
                }}
                href="https://www.linkedin.com/in/aizel-escoto/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  sm: "14px",
                  md: "20px",
                },
              }}
              color="initial"
            >
              <a
                style={{
                  color: "black",
                }}
                href="https://www.instagram.com/design.azl/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  sm: "14px",
                  md: "20px",
                },
              }}
              color="initial"
            >
              <a
                style={{
                  color: "black",
                }}
                href="https://www.instagram.com/design.azl/"
                target="_blank"
                rel="noreferrer"
              >
                Dribble
              </a>
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "36px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    sm: "20px",
                    md: "24px",
                  },
                }}
                color="initial"
                fontWeight={600}
              >
                Tools
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: {
                  xs: "25px",
                  sm: "60px",
                  md: "130px",
                },
                width: "100%",
                justifyContent: {
                  xs: "center",
                  sm: "space-between",
                  md: "center",
                },
                flexWrap: "wrap",
                marginTop: {
                  sm: "0px",
                  md: "36px",
                },
              }}
            >
              <Box
                sx={{
                  height: {
                    xs: "27px",
                    sm: "40px",
                    md: "42px",
                  },
                }}
              >
                <img height={"100%"} src={figma_icon} />
              </Box>
              <Box
                sx={{
                  height: {
                    xs: "27px",
                    sm: "40px",
                    md: "42px",
                  },
                }}
              >
                <img height={"100%"} src={xd_icon} />
              </Box>
              <Box
                sx={{
                  height: {
                    xs: "27px",
                    sm: "40px",
                    md: "42px",
                  },
                }}
              >
                <img height={"100%"} src={photoshop_icon} />
              </Box>
              <Box
                sx={{
                  height: {
                    xs: "27px",
                    sm: "40px",
                    md: "42px",
                  },
                }}
              >
                <img height={"100%"} src={canva_icon} />
              </Box>
              <Box
                sx={{
                  height: {
                    xs: "27px",
                    sm: "40px",
                    md: "42px",
                  },
                }}
              >
                <img height={"100%"} src={kitt_icon} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: {
              xs: "-50px",
              sm: "-20px",
              md: "20px",
            },
            height: {
              xs: "127px",
              md: "150px",
            },
            top: {
              xs: "160px",
              sm: "300px",
              md: "350px",
            },
          }}
        >
          <img src={Shooting_Star2} height={"100%"} alt="star" />
        </Box>
      </Box>
    </>
  );
};

export default Homepage;

import dribbble_icon from "@/assets/dribbble_icon.svg";
import email_icon from "@/assets/email_icon.svg";
import instagram_icon from "@/assets/instagram_icon.svg";
import internet_icon from "@/assets/internet_icon.svg";
import linkedIn_icon from "@/assets/linkedIn_icon.svg";
import Star2 from "@/assets/Star2.svg";
import { Box, Hidden, Typography } from "@mui/material";
import { forwardRef } from "react";

const ContactMe = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Box
        sx={{
          padding: {
            xs: "48px 24px 106px 24px",
            sm: "72px 32px 116px 32px",
            md: "96px 100px 195px 100px",
          },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: {
              xs: "24px",
              sm: "24px",
              md: "13px",
            },
          }}
        >
          <Typography
            fontSize={{
              xs: "20px",
              sm: "24px",
              md: "30px",
            }}
            fontWeight={600}
            color="initial"
          >
            Contact
          </Typography>
          <Box
            sx={{
              display: {
                xs: "flex",
                sm: "none",
              },
              height: {
                xs: "27px",
              },
              marginTop: {
                sm: "64px",
              },
              marginRight: "20px",
            }}
          >
            <img src={Star2} height={"100%"} alt="star" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            gap: {
              sm: "58px",
              md: "30%",
            },
          }}
        >
          <Box
            sx={{
              width: {
                sm: "55%",
                md: "50%",
              },
            }}
          >
            <Box>
              <Typography variant="body1" color="initial">
                I&apos;m eager to delve into fresh opportunities and connect{" "}
                <Hidden mdDown>
                  <br />
                </Hidden>
                with fellow professionals in this creative industry.{" "}
                <Hidden mdDown>
                  <br />
                </Hidden>
                Let&apos;s chat and collaborate!
              </Typography>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
                height: {
                  sm: "42px",
                  md: "62px",
                },
                marginTop: {
                  sm: "64px",
                  md: "116px",
                },
                marginLeft: {
                  sm: "0px",
                  md: "-20px",
                },
              }}
            >
              <img src={Star2} height={"100%"} alt="star" />
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                sm: "45%",
                md: "50%",
              },
              gap: {
                xs: "30px",
                sm: "22px",
              },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              width={"100%"}
              marginTop={{
                xs: "60px",
                sm: "52px",
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ display: "flex", gap: "10px", marginBottom: "8px" }}
                >
                  <img src={email_icon} alt="email icon" /> Email
                </Typography>
                <a
                  href="mailto:amarie.escoto@gmail.com"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Typography variant="body1" color="initial">
                    amarie.escoto@gmail.com
                  </Typography>
                </a>
              </Box>
              <Box
                sx={{
                  height: {
                    xs: "16px",
                    sm: "37px",
                  },
                  marginTop: "-15px",
                  marginRight: "115px",
                }}
              >
                <img src={Star2} alt="star" height={"100%"} />
              </Box>
            </Box>
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ display: "flex", gap: "10px", marginBottom: "14px" }}
              >
                <img src={internet_icon} alt="email icon" /> Socials
              </Typography>

              <Box sx={{ display: "flex", gap: "10px" }}>
                <a
                  href="https://www.linkedin.com/in/aizel-escoto/"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img src={linkedIn_icon} alt="email icon" />
                </a>
                <a
                  href="https://www.instagram.com/design.azl/"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img src={instagram_icon} alt="email icon" />
                </a>
                <a
                  href="https://dribbble.com/aizelescoto"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <img src={dribbble_icon} alt="email icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
});

ContactMe.displayName = "ContactMe";

export default ContactMe;

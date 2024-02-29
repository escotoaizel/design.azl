import dribble_icon from "@/assets/dribble_icon.svg";
import email_icon from "@/assets/email_icon.svg";
import instagram_icon from "@/assets/instagram_icon.svg";
import internet_icon from "@/assets/internet_icon.svg";
import linkedIn_icon from "@/assets/linkedIn_icon.svg";
import location_icon from "@/assets/location_icon.svg";
import send_icon from "@/assets/send_icon.svg";
import { ValidationError, useForm } from "@formspree/react";
import { Box, Button, TextField, Typography } from "@mui/material";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("xzblnydb");

  const contactInfo = [
    {
      icon: email_icon,
      title: "Email",
      description: "amarie.escoto@gmail.com",
    },
    {
      icon: location_icon,
      title: "Location",
      description: "Pampanga, Philippines",
    },
    {
      icon: internet_icon,
      title: "Socials",
      socials: [
        {
          icon: linkedIn_icon,
          url: "https://www.linkedin.com/in/aizel-escoto/",
        },
        {
          icon: instagram_icon,
          url: "https://www.instagram.com/design.azl/",
        },
        {
          icon: dribble_icon,
          url: "https://dribbble.com/aizelescoto",
        },
      ],
    },
  ];
  return (
    <>
      <Box
        sx={{
          padding: "0 100px 212px 100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "100px",
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
              GET IN
            </Typography>
            <Typography
              fontSize={"80px"}
              lineHeight={"1"}
              color="initial"
              fontFamily={"Monument Extended"}
            >
              TOUCH
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "22px",
              }}
            >
              {contactInfo.map((info) => (
                <Box
                  key={info.title}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"10px"}
                >
                  <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                    <img
                      src={info.icon}
                      alt={info.title}
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                    />
                    <Box>
                      <Typography fontSize={"20px"} lineHeight={"1"}>
                        {info.title}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography fontSize={"16px"} lineHeight={"1"}>
                    {info.description}
                  </Typography>
                  {info?.socials && (
                    <Box display={"flex"} gap={"15px"}>
                      {info.socials.map((social) => (
                        <img
                          key={social.icon}
                          src={social.icon}
                          alt={info.title}
                          style={{
                            width: "30px",
                            height: "30px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            window.open(social.url, "_blank");
                          }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
            }}
          >
            {state.succeeded ? (
              "Thank you for your submission!"
            ) : (
              <>
                <form onSubmit={handleSubmit}>
                  <Box display={"flex"} flexDirection={"column"} gap={"22px"}>
                    <TextField
                      id="email"
                      type="email"
                      name="Email"
                      label="Email"
                      placeholder="Enter your name"
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#212121",
                          },
                          "&:hover fieldset": {
                            borderColor: "#212121",
                          },
                        },
                      }}
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    <TextField
                      id="name"
                      type="text"
                      name="Name"
                      label="Name"
                      placeholder="Enter your email"
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#212121",
                          },
                          "&:hover fieldset": {
                            borderColor: "#212121",
                          },
                        },
                      }}
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                    <TextField
                      id="message"
                      type="text"
                      name="Message"
                      label="Message"
                      placeholder="Enter your message"
                      multiline
                      rows={4}
                      rowsmax={6}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#212121",
                          },
                          "&:hover fieldset": {
                            borderColor: "#212121",
                          },
                        },
                      }}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{
                        width: "230px",
                        height: "60px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        padding: "12px 48px",
                        backgroundColor: "black",
                        display: "inline-flex",
                        justifyContent: "space-between",
                      }}
                      disabled={state.submitting}
                    >
                      <img
                        src={send_icon}
                        style={{
                          width: "16px",
                          height: "16px",
                          marginRight: "10px",
                        }}
                      />
                      Send Message
                    </Button>
                  </Box>
                </form>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactMe;

import Personal_Photo from "@/assets/Personal_Photo.png";
import handwave from "@/assets/handwave.svg";
import { Box, Typography } from "@mui/material";
import { forwardRef } from "react";

const TheDesigner = forwardRef((props, ref) => {
    return (
        <div ref={ref} data-aos="fade-up" data-aos-duration="700">
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
                <Box
                    display={"flex"}
                    alignItems={"end"}
                    width={"100%"}
                    zIndex={"1"}
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
                        <Typography
                            variant="body1"
                            color="initial"
                            marginBottom={"24px"}
                        >
                            Hi <img src={handwave} />, I&apos;m Aizel
                        </Typography>
                        <Typography
                            variant="body1"
                            color="initial"
                            lineHeight={"1.5"}
                        >
                            I’m a UI/UX Designer specializing in modern web
                            applications, SaaS platforms, and mobile interfaces
                            using Figma. I help startups, businesses, and
                            product teams turn ideas into intuitive and visually
                            engaging digital experiences. My focus is designing
                            user-centered interfaces that improve usability,
                            simplify complex workflows, and create products that
                            users actually enjoy using.
                        </Typography>
                        <Typography
                            variant="body1"
                            marginTop={"24px"}
                            lineHeight={"1.5"}
                        >
                            If you’re building a new product, redesigning an
                            existing platform, or improving your website’s user
                            experience, I would be happy to collaborate!
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

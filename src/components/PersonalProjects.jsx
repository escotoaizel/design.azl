import Cat_Ventures_Thumbnail from "@/assets/Cat_Ventures_Thumbnail.png";
import Cat_Ventures_Thumbnail_Mobile from "@/assets/Cat_Ventures_Thumbnail_Mobile.png";
import EDC_Mockup_Mobile from "@/assets/EDC_Mockup_Mobile.png";
import EDC_Mockup_PC from "@/assets/EDC_Mockup_PC.png";
import EDC_Thumbnail from "@/assets/EDC_Thumbnail.png";
import EDC_Thumbnail_Mobile from "@/assets/EDC_Thumbnail_Mobile.png";
import La_Calle_Thumbnail from "@/assets/La_Calle_Thumbnail.png";
import La_Calle_Thumbnail_Mobile from "@/assets/La_Calle_Thumbnail_Mobile.png";
import star from "@/assets/Star1.svg";
import VS_Mockup_Mobile from "@/assets/VS_Mockup_Mobile.png";
import VS_Mockup_PC from "@/assets/VS_Mockup_PC.png";
import VS_Thumbnail from "@/assets/VS_Thumbnail.png";
import VS_Thumbnail_Mobile from "@/assets/VS_Thumbnail_Mobile.png";
import TD_Thumbnail from "@/assets/TD_Thumbnail_Main.png";
import TD_Thumbnail_Mobile from "@/assets/TD_Mockup_Mobile.png";
import TD_Thumbnail_Mobile_2 from "@/assets/TD_Mockup_Mobile_2.png";
// import Veritru_Mockup_Mobile from "@/assets/Veritru_Mockup_Mobile.png";
// import Veritru_Mockup_PC from "@/assets/Veritru_Mockup_PC.png";
// import Veritru_Thumbnail from "@/assets/Veritru_Thumbnail.png";
// import Veritru_Thumbnail_Mobile from "@/assets/Veritru_Thumbnail_Mobile.png";
import ai_icon from "@/assets/ai_icon.svg";
import canva_small_icon from "@/assets/canva_small_icon.svg";
import figma_icon from "@/assets/figma_icon.svg";
import photoshop_icon from "@/assets/photoshop_icon.svg";
import { Box, Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import { forwardRef, useEffect, useState } from "react";
import ExternalLink from "./ExternalLink";
import AOS from "aos";

const PersonalProjects = forwardRef((props, ref) => {
    const uiDesigns = [
        {
            id: 1,
            title: "TradeDock",
            type: "(Work Project)",
            tags: ["UI/UX Design", "Marketplace", "Construction"],
            role: "Lead UI/UX Designer",
            tools: [figma_icon, canva_small_icon, photoshop_icon],
            description:
                "TradeDock is a marketplace platform designed to connect contractors with skilled workers for short-term and long-term construction jobs. The goal was to simplify how contractors discover, book, and manage tradespeople while helping workers find reliable opportunities.\n\nThe platform combines profile verification, job listings, and direct communication in one place. Contractors can post jobs and shortlist workers based on skills, availability, and ratings, while workers can browse opportunities and accept projects that match their expertise.\n\nBy bringing hiring, scheduling, and communication into a single system, TradeDock aims to make workforce coordination faster and more transparent for both contractors and tradespeople.",
            link: "https://www.figma.com/proto/ZitJpl1uxJtAAqrPhCW8Cz/TradeDock---Master-Design-File?node-id=452-5302&viewport=-9479%2C-2213%2C0.63&t=ulu7kvNP1u3wL3W9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=457%3A4892&show-proto-sidebar=1&page-id=1%3A4",
            mainImage: TD_Thumbnail,
            mobileImage: TD_Thumbnail,
            supportingImage: [TD_Thumbnail_Mobile_2, TD_Thumbnail_Mobile],
        },
        {
            id: 2,
            title: "VisionSidekick",
            type: "(Work Project)",
            tags: ["UI/UX Design", "Vision Board", "AI"],
            role: "Lead UI/UX Designer",
            tools: [figma_icon, canva_small_icon, photoshop_icon],
            description:
                "VisionSidekick is an AI-powered platform that helps people turn their goals into visual vision boards. Instead of manually searching for images, users select goal categories, answer a few guided questions, and the system generates personalized visuals using AI.\n\nThe user experience focuses on reducing friction in the goal-setting process. Within a few steps, users can generate images, choose art styles, and arrange them into a board through a simple drag-and-drop interface. By combining structured prompts with AI-generated imagery, the platform transforms abstract goals into visual reminders users can revisit and refine over time.\n\nThe design centers on simplicity and clarity, allowing users to focus on their aspirations while the system handles the creative generation in the background.",
            link: "https://visionsidekick.com/",
            mainImage: VS_Thumbnail,
            mobileImage: VS_Thumbnail_Mobile,
            supportingImage: [VS_Mockup_PC, VS_Mockup_Mobile],
        },
        {
            id: 3,
            title: "Every Decant Counts",
            type: "(Side Project)",
            tags: ["UI/UX Design", "Ecommerce"],
            role: "Lead UI/UX Designer",
            tools: [figma_icon, canva_small_icon, photoshop_icon],
            description:
                "Every Decant Counts is a small in-house fragrance business that specializes in selling decant-sized perfumes. The challenge was expanding beyond a limited local presence and creating a way for customers to easily explore and purchase authentic fragrances online.\n\nI designed an ecommerce platform that allows users to browse and purchase perfumes in smaller decant sizes. The goal was to create a straightforward shopping experience where fragrance enthusiasts could discover new scents without committing to full bottles.\n\nThe platform organizes products clearly, highlights authenticity, and simplifies the purchasing process, making it easier for customers to explore a wide variety of fragrances in accessible sizes.",
            link: "https://www.figma.com/proto/chRMV0BAOKq6U71JJSFaWn/Every-Decant-Counts?page-id=0%3A1&type=design&node-id=63-70&viewport=201%2C175%2C0.13&t=BnAl2qKBycaIdOta-1&scaling=min-zoom&starting-point-node-id=63%3A70&mode=design",
            mainImage: EDC_Thumbnail,
            mobileImage: EDC_Thumbnail_Mobile,
            supportingImage: [EDC_Mockup_PC, EDC_Mockup_Mobile],
        },
        // {
        //   id: 3,
        //   title: "Veritru",
        //   type: "(Capstone Project)",
        //   tags: ["UI/UX Design", "Blockchain", "Web3"],
        //   role: "UI/UX Designer & Researcher",
        //   tools: [figma_icon, canva_small_icon],
        //   description:
        //     "Veritru emerges as a Web3 fact-checking application harnessing the power of blockchain's decentralization, security, and immutability to combat the pervasive spread of misinformation. Through blockchain technology, Veritru establishes a secure, tamper-proof ecosystem for storing and preserving fact-checked articles, ensuring users unprecedented transparency and trust in the information they access.",
        //   link: "https://veritru.vercel.app/",
        //   mainImage: Veritru_Thumbnail,
        //   mobileImage: Veritru_Thumbnail_Mobile,
        //   supportingImage: [Veritru_Mockup_PC, Veritru_Mockup_Mobile],
        // },
    ];
    const graphics = [
        {
            id: 4,
            title: "La Calle Café",
            type: "(Work Project)",
            tags: ["Social Media Graphic Design"],
            role: "Graphic Designer",
            tools: [canva_small_icon],
            description:
                "La Calle Café's ecommerce hub brings the charm of our local coffee shop online, offering a variety of espresso-based drinks (available in hot, iced and frappe), and an assortment of non-caffeinated beverages, as well as breads, pastries, and snacks.",
            mainImage: La_Calle_Thumbnail,
            mobileImage: La_Calle_Thumbnail_Mobile,
        },
        {
            id: 5,
            title: "Catventures",
            type: "(Side Project)",
            tags: ["Social Media Graphic Design"],
            role: "Graphic Designer",
            tools: [figma_icon, ai_icon, photoshop_icon],
            description:
                "Catventures promotes cat adoption and fostering by infusing the spirit of exploration and adventure. We inspire people to embark on the journey of adopting and fostering cats, embracing the curiosity, playfulness, and wonder that accompany it.",
            mainImage: Cat_Ventures_Thumbnail,
            mobileImage: Cat_Ventures_Thumbnail_Mobile,
        },
    ];

    const [tabContent, setTabContent] = useState(uiDesigns);
    const [tabValue, setTabValue] = useState("uiDesigns");

    // Re-run AOS when project list is in DOM so card positions are observed
    useEffect(() => {
        const t = setTimeout(() => {
            if (typeof AOS?.refresh === "function") AOS.refresh();
        }, 100);
        return () => clearTimeout(t);
    }, [tabContent]);

    const handleTabChange = (event, newValue) => {
        if (newValue === "graphics") {
            setTabContent(graphics);
        } else {
            setTabContent(uiDesigns);
        }
        setTabValue(newValue);
    };

    return (
        <div ref={ref}>
            <Box
                key={"projects"}
                sx={{
                    padding: {
                        xs: "48px 24px 0px 24px",
                        sm: "60px 20px 0px 20px",
                        md: "96px 100px 96px 100px",
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        display: {
                            xs: "none",
                            sm: "none",
                            md: "block",
                        },
                        position: "absolute",
                        right: "200px",
                        top: "1020px",
                        height: "50px",
                    }}
                >
                    <img src={star} height={"100%"} alt="star" />
                </Box>
                <Box width={"100%"}>
                    <Box>
                        <Typography
                            fontSize={{
                                xs: "20px",
                                sm: "24px",
                                md: "30px",
                            }}
                            fontWeight={600}
                            color="initial"
                        >
                            Projects
                        </Typography>
                    </Box>
                    <Box
                        marginTop={{
                            xs: "24px",
                            sm: "52px",
                        }}
                    >
                        <Tabs
                            sx={{
                                ".MuiTabs-flexContainer": {
                                    justifyContent: {
                                        xs: "center",
                                        sm: "flex-start",
                                    },
                                },
                            }}
                            value={tabValue}
                            onChange={handleTabChange}
                        >
                            <Tab
                                value={"uiDesigns"}
                                sx={{
                                    fontSize: {
                                        sm: "18px",
                                        md: "20px",
                                    },
                                    fontWeight: 500,
                                    "&.Mui-selected": {
                                        fontWeight: 700,
                                    },
                                }}
                                label="UI Designs"
                            />
                            <Tab
                                value={"graphics"}
                                sx={{
                                    fontSize: {
                                        sm: "18px",
                                        md: "20px",
                                    },
                                    fontWeight: 500,
                                    "&.Mui-selected": {
                                        fontWeight: 700,
                                    },
                                }}
                                label="Graphic Designs"
                            />
                        </Tabs>
                    </Box>
                </Box>
                {tabContent.map((project, index) => (
                    <div
                        key={project.id}
                        data-aos="fade-up"
                        data-aos-offset="120"
                        data-aos-delay={index * 100}
                        data-aos-duration="600"
                        data-aos-once="false"
                    >
                        <Grid
                            container
                            spacing={2}
                            padding={{
                                xs: "36px 24px 35px 0px",
                                sm: "48px 273px 48px 0px",
                                md: "90px 83px",
                            }}
                        >
                            <Grid item xs={12} sm={12} md={6}>
                                <Box>
                                    <Box
                                        display={"flex"}
                                        gap={"5px"}
                                        alignItems={"end"}
                                    >
                                        <Typography
                                            color="initial"
                                            sx={{
                                                fontSize: {
                                                    sm: "18px",
                                                    md: "24px",
                                                },
                                                fontWeight: 600,
                                            }}
                                        >
                                            {project.title}{" "}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    xs: "14px",
                                                    sm: "14px",
                                                    md: "16px",
                                                },
                                                fontWeight: 500,
                                            }}
                                        >
                                            {project.type}
                                        </Typography>
                                    </Box>
                                    <Box
                                        marginTop={"16px"}
                                        display={"flex"}
                                        gap={"8px"}
                                    >
                                        {/* iterate over all the tags array */}
                                        {project.tags.map((tag) => (
                                            <Box
                                                key={tag}
                                                sx={{
                                                    border: "1px solid #212121",
                                                    width: "fit-content",
                                                    padding: "6px 10px",
                                                    borderRadius: "5px",
                                                }}
                                            >
                                                <Typography
                                                    fontSize={{
                                                        xs: "12px",
                                                        sm: "12px",
                                                        md: "14px",
                                                    }}
                                                    color="initial"
                                                >
                                                    {tag}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                    <Box
                                        marginTop={{
                                            xs: "24px",
                                            sm: "36px",
                                            md: "24px",
                                        }}
                                    >
                                        <Typography
                                            color="initial"
                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: 600,
                                                lineHeight: "35px",
                                            }}
                                        >
                                            Role <br />
                                            <span
                                                style={{
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {project.role}
                                            </span>
                                        </Typography>
                                    </Box>
                                    <Box
                                        marginTop={{
                                            xs: "24px",
                                            sm: "36px",
                                            md: "24px",
                                        }}
                                    >
                                        <Typography
                                            color="initial"
                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Tools
                                        </Typography>
                                        <Box
                                            marginTop={"16px"}
                                            display={"flex"}
                                            gap={"20px"}
                                        >
                                            {project.tools.map((tool) => (
                                                <img
                                                    key={tool}
                                                    src={tool}
                                                    style={{ height: "24px" }}
                                                    alt="tool"
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={6}
                                sx={{
                                    "&.MuiGrid-item": {
                                        paddingTop: {
                                            xs: "34px",
                                            sm: "36px",
                                            md: "0px",
                                        },
                                    },
                                }}
                            >
                                <Box>
                                    <Typography
                                        fontSize={"16px"}
                                        color="initial"
                                        sx={{ whiteSpace: "pre-line" }}
                                    >
                                        {project.description}
                                    </Typography>
                                </Box>
                                {tabValue === "uiDesigns" && (
                                    <Box
                                        marginTop={{
                                            xs: "27px",
                                            sm: "34px",
                                            md: "26px",
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            color="initial"
                                            component="span"
                                        >
                                            <ExternalLink
                                                href={project.link}
                                                sx={{
                                                    color: "#5a5a5a",
                                                    "&:hover": {
                                                        color: "#000",
                                                        textDecoration:
                                                            "underline",
                                                        textUnderlineOffset:
                                                            "3px",
                                                    },
                                                }}
                                            >
                                                {project.title ===
                                                    "TradeDock" ||
                                                project.title ===
                                                    "Every Decant Counts"
                                                    ? "View Prototype"
                                                    : "View Website"}
                                            </ExternalLink>
                                        </Typography>
                                    </Box>
                                )}
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            gap={{
                                xs: "16px",
                                sm: "25px",
                            }}
                            paddingBottom={{
                                xs: "60px",
                                md: "96px",
                            }}
                        >
                            <Grid
                                item
                                xs={12}
                                display={{
                                    xs: "none",
                                    sm: "flex",
                                }}
                            >
                                <img
                                    src={project.mainImage}
                                    style={{ width: "100%" }}
                                />{" "}
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                display={{
                                    xs: "flex",
                                    sm: "none",
                                }}
                            >
                                <img
                                    src={project.mobileImage}
                                    style={{ width: "100%" }}
                                />{" "}
                            </Grid>
                            {tabValue === "uiDesigns" && (
                                <Box
                                    display={{
                                        xs: "flex",
                                        sm: "flex",
                                    }}
                                    flexDirection={{
                                        xs: "column",
                                        sm: "row",
                                    }}
                                    gap={{
                                        xs: "16px",
                                        sm: "13px",
                                        md: "25px",
                                    }}
                                >
                                    {project.supportingImage.map((image) => (
                                        <Box
                                            key={image}
                                            width={{
                                                xs: "100%",
                                                sm: "50%",
                                            }}
                                        >
                                            <img
                                                src={image}
                                                style={{ width: "100%" }}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            )}
                        </Grid>
                        {index !== tabContent.length - 1 && (
                            <Divider
                                sx={{
                                    width: "100%",
                                    borderBottomWidth: "2px",
                                }}
                            />
                        )}
                    </div>
                ))}
            </Box>
        </div>
    );
});

PersonalProjects.displayName = "PersonalProjects";

export default PersonalProjects;

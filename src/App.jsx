import "@/App.css";
import ContactMe from "@/components/ContactMe";
import Homepage from "@/components/Homepage";
import Menu from "@/components/Menu";
import PersonalProjects from "@/components/PersonalProjects";
import TheDesigner from "@/components/TheDesigner";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { Divider } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function App() {
  const sectionRefs = {
    home: useRef(null),
    projects: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  const [openMenu, setOpenMenu] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const handleButtonClick = (sectionIndex) => {
    const sectionRef = sectionRefs[sectionIndex];
    if (sectionRef && sectionRef.current) {
      const scrollPosition = sectionRef.current.offsetTop - 75;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleDownloadResume = () => {
    const resumeUrl = "/Escoto_Aizel_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Escoto_Aizel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    const sectionEntries = Object.entries(sectionRefs);
    for (const [section, ref] of sectionEntries) {
      if (
        ref.current &&
        ref.current.offsetTop <= scrollPosition &&
        ref.current.offsetTop + ref.current.offsetHeight > scrollPosition
      ) {
        setCurrentSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Menu
        openMenu={openMenu}
        handleOpenMenu={handleOpenMenu}
        handleDownloadResume={handleDownloadResume}
        handleButtonClick={handleButtonClick}
        currentSection={currentSection}
      />
      <Header
        handleDownloadResume={handleDownloadResume}
        handleButtonClick={handleButtonClick}
        handleOpenMenu={handleOpenMenu}
        currentSection={currentSection}
      />
      <Homepage ref={sectionRefs.home} id={"home"} />
      <Divider
        sx={{
          borderBottomWidth: "2px",
          width: "95%",
          margin: "auto",
        }}
      />
      <PersonalProjects ref={sectionRefs.projects} id={"projects"} />
      <Divider
        sx={{
          borderBottomWidth: "2px",
          width: "95%",
          margin: "auto",
        }}
      />
      <TheDesigner ref={sectionRefs.about} id={"about"} />
      <Divider
        sx={{
          borderBottomWidth: "2px",
          width: "95%",
          margin: "auto",
        }}
      />
      <ContactMe ref={sectionRefs.contact} id={"contact"} />
      <Footer />
    </>
  );
}

export default App;

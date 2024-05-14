// import { Divider } from "@mui/material";
import "@/App.css";
import ContactMe from "@/components/ContactMe";
import Homepage from "@/components/Homepage";
import Menu from "@/components/Menu";
import PersonalProjects from "@/components/PersonalProjects";
import TheDesigner from "@/components/TheDesigner";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { Divider } from "@mui/material";
import { useRef, useState } from "react";

function App() {
  const sectionRefs = {
    home: useRef(null),
    projects: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };
  const [openMenu, setOpenMenu] = useState(false);

  const handleButtonClick = (sectionIndex) => {
    console.log(sectionIndex);
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
    const resumeUrl = "/public/Escoto_Aizel_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Escoto_Aizel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Menu
        openMenu={openMenu}
        handleOpenMenu={handleOpenMenu}
        handleDownloadResume={handleDownloadResume}
        handleButtonClick={handleButtonClick}
      />
      <Header
        handleDownloadResume={handleDownloadResume}
        handleButtonClick={handleButtonClick}
        handleOpenMenu={handleOpenMenu}
      />
      <Homepage
        ref={sectionRefs.home}
        id={"home"}
        handleButtonClick={handleButtonClick}
      />
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

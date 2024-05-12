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
  const sectionRefs = useRef([]);
  const [openMenu, setOpenMenu] = useState(false);

  const handleButtonClick = (sectionIndex) => {
    sectionRefs.current[sectionIndex]?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {/* put the header and footer */}
      <Menu openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
      <Header
        handleButtonClick={handleButtonClick}
        handleOpenMenu={handleOpenMenu}
      />
      <Homepage ref={(el) => (sectionRefs.current[0] = el)} />
      <Divider
        sx={{
          borderBottomWidth: "2px",
        }}
      />
      <PersonalProjects ref={(el) => (sectionRefs.current[1] = el)} />
      <TheDesigner ref={(el) => (sectionRefs.current[2] = el)} />
      <Divider
        sx={{
          borderBottomWidth: "2px",
        }}
      />
      <ContactMe ref={(el) => (sectionRefs.current[3] = el)} />
      <Footer />
    </>
  );
}

export default App;

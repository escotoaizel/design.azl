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
import AOS from "aos";
import "aos/dist/aos.css";

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

  // Prevent scroll restoration on refresh so the page stays at top when home animation plays
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    const raf = requestAnimationFrame(() => window.scrollTo(0, 0));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      throttleDelay: 50,
    });
  }, []);

  // On mobile, scroll events are often delayed; refresh AOS when scroll ends so animations trigger
  useEffect(() => {
    let scrollEndTimer;
    const onScroll = () => {
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(() => {
        if (typeof AOS?.refresh === "function") AOS.refresh();
      }, 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(scrollEndTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // After load, refresh AOS once so mobile viewport (e.g. address bar) is settled
  useEffect(() => {
    const t = setTimeout(() => {
      if (typeof AOS?.refresh === "function") AOS.refresh();
    }, 400);
    return () => clearTimeout(t);
  }, []);

  // When mobile browser chrome (address bar) shows/hides, refresh so trigger positions are correct
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const onResize = () => {
      if (typeof AOS?.refresh === "function") AOS.refresh();
    };
    vv.addEventListener("resize", onResize);
    vv.addEventListener("scroll", onResize);
    return () => {
      vv.removeEventListener("resize", onResize);
      vv.removeEventListener("scroll", onResize);
    };
  }, []);

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
      <Homepage
        ref={sectionRefs.home}
        handleButtonClick={handleButtonClick}
        id={"home"}
      />
      <Divider
        data-aos="fade"
        data-aos-duration="400"
        sx={{
          borderBottomWidth: "2px",
          width: "95%",
          margin: "auto",
        }}
      />
      <PersonalProjects ref={sectionRefs.projects} id={"projects"} />
      <Divider
        data-aos="fade"
        data-aos-duration="400"
        sx={{
          borderBottomWidth: "2px",
          width: "95%",
          margin: "auto",
        }}
      />
      <TheDesigner ref={sectionRefs.about} id={"about"} />
      <Divider
        data-aos="fade"
        data-aos-duration="400"
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

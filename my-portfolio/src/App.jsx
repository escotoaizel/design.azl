// import { Divider } from "@mui/material";
import "./App.css";
import ContactMe from "./components/ContactMe";
import Homepage from "./components/Homepage";
import PersonalProjects from "./components/PersonalProjects";
import TheDesigner from "./components/TheDesigner";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      {/* put the header and footer */}
      <Header />
      <Homepage />
      <PersonalProjects />
      <TheDesigner />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;

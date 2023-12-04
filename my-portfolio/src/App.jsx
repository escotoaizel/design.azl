import { Divider } from "@mui/material";
import "./App.css";
import Homepage from "./components/Homepage";
import PersonalProjects from "./components/PersonalProjects";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      {/* put the header and footer */}
      <Header />
      <Homepage />
      <Divider
        sx={{
          height: ".2px",
          backgroundColor: "gray",
        }}
      />
      <PersonalProjects />
      <Footer />
    </>
  );
}

export default App;

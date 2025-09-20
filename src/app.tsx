import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Achievements,
  Contact,
  Cursor,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Banner from "./components/banner";
import Breadcrumb from "./components/breadcrumb";
import Footer from "./components/footer";
import PersonalInterests from "./components/personal-interests";
import ProgressIndicator from "./components/progress-indicator";

// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <Cursor />
      <ProgressIndicator />
      <Breadcrumb />
      <Banner hide={hide} setHide={setHide} />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Hero />
        </div>
                <About />
                <Experience />
                <Achievements />
                <Tech />
                <Works />
                <PersonalInterests />

        {/* Contact */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

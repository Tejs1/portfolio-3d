import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>
        </div>
        <About />
        <Experience />
        <ErrorBoundary>
          <Tech />
        </ErrorBoundary>
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <ErrorBoundary>
            <StarsCanvas />
          </ErrorBoundary>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

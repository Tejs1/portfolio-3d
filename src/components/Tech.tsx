import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";

const Tech = () => {
  const [techWithValidIcons, setTechWithValidIcons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Filter out technologies with missing or invalid icons
    const validTech = technologies.filter((tech) => tech && tech.icon);
    setTechWithValidIcons(validTech);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        Loading technologies...
      </div>
    );
  }

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {techWithValidIcons.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <ErrorBoundary
            fallback={
              <div className="w-28 h-28 flex justify-center items-center bg-tertiary rounded-full">
                <p className="text-xs text-center">{technology.name}</p>
              </div>
            }
          >
            <BallCanvas icon={technology.icon} />
          </ErrorBoundary>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

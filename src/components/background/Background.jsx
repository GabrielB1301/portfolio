import { useEffect, useState, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Background = memo(
  ({ theme = "dark" }) => {
    const [init, setInit] = useState(false);
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);

    const particlesOptions = {
      background: {
        color: {
          value: theme === "dark" ? "#0d1117" : "#f9f9f9",
        },
      },
      fpsLimit: 120,
      particles: {
        move: {
          bounce: false,
          direction: "none",
          enable: true,
          outModes: "out",
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 400 },
        opacity: {
          value: { min: 0.1, max: 1 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.1, max: 4 },
        },
        color: theme === "dark" ? "#f9f9f9" : "#0d1117",
      },
    };

    return (
      <>
        {init && (
          <Particles
            className="z-[-1] relative"
            id="tsparticles"
            options={particlesOptions}
          />
        )}
      </>
    );
  },
  (prevProps, nextProps) => prevProps.theme === nextProps.theme
);

export default Background;

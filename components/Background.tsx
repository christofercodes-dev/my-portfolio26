"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function Background() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, 
          fpsLimit: 120,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#0a0a0a" },
            links: {
              enable: true,
              distance: 150,
              color: "#3b82f6",
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 1.5 },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
          },
        }}
      />
    </div>
  );
}
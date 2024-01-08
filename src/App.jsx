import styles from "./app.module.css";
import { Experience } from "./Components/Experience";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Interface } from "./Components/Interface";
import { SimpleCameraRig } from "./Components/SimpleCameraRig";

import {
  OrbitControls,
  ScrollControls,
  Scroll,
  PerspectiveCamera,
} from "@react-three/drei";
import { ScrollManager } from "./Components/ScrollManager";

export default function App() {
  const [section, setSection] = useState(0);

  const skillsPageBackgroundRef = useRef();

  const [scrollOffset, setScrollOffset] = useState(0);

  const [scrollData, setScrollData] = useState(0);

  const [device, setDevice] = useState("web");
  const [backVideoX, setBackVideoX] = useState(0);
  const cameraRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;

      const distanceModifier = innerWidth < 768 ? 4 : 0; // Adjust this condition based on your design
      const newZPosition = 4.5 + distanceModifier;

      // Update the camera position if the ref is defined
      if (cameraRef.current) {
        cameraRef.current.position.set(3.2, 2.7, newZPosition);
      }

      // Your existing logic for handling other resize-related changes
      setDevice(innerWidth > innerHeight ? "web" : "mobile");
      console.log((960 - innerWidth / 2) * -1);
      setBackVideoX(innerWidth > innerHeight ? 0 : (960 - innerWidth / 2) * -1);
    };
    // Initial setup
    handleResize();
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this effect runs once on mount

  const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  let x;

  useEffect(() => {
    if (scrollData) {
      x = mapNumRange(
        scrollOffset,
        0,
        1 / (scrollData.pages - 1),
        0,
        scrollData.el.clientHeight,
      );
      // console.log(scrollData.offset)
    }
    const landingPage = skillsPageBackgroundRef.current;
    landingPage.style.transform = `translateY(-${x}px)`;
  }, [scrollOffset]);

  return (
    <main className={`${styles.main} ${device}`}>
      <div className={styles.skillsPage} ref={skillsPageBackgroundRef}>
        <video
          className="back-video"
          autoPlay
          muted
          loop
          style={{ transform: `translateX(${backVideoX}px)` }}
        >
          <source
            src="/stock-market-2023-11-27-05-36-31-utc_compressed.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[3.2, 2.7, 4.5]} // Set the position of the camera
          fov={25} // Field of view
          near={0.1}
          far={1000}
          ref={cameraRef}
        />

        {/* <OrbitControls enableZoom={false} /> */}

        <SimpleCameraRig></SimpleCameraRig>

        <ScrollControls pages={4} damping={0.1} maxSpeed={0.5}>
          <ScrollManager
            section={section}
            onSectionChange={setSection}
            setScrollOffset={setScrollOffset}
            setScrollData={setScrollData}
          />
          <Scroll>
            <Experience
              device={device}
              section={section}
              cameraRef={cameraRef}
            />
          </Scroll>
          <Scroll html>
            <Interface device={device} section={section} />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  );
}

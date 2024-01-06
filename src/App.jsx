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

      // Your existing logic
      setDevice(innerWidth > innerHeight ? "web" : "mobile");
      setBackVideoX(innerWidth > innerHeight ? 0 : (960 - innerWidth / 2) * -1);

      // Camera movement logic
      if (innerWidth < 500) {
        cameraRef.current.position.x += 2; // Move camera on mobile
      } else {
        cameraRef.current.position.x = 3.2; // Reset to default position on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.updateWorldMatrix(); // Update world matrix on each frame
    }
  });
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

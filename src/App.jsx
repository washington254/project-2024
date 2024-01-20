import styles from "./app.module.css";
import { Experience } from "./Components/Experience";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Interface } from "./Components/Interface";
import { SimpleCameraRig } from "./Components/SimpleCameraRig";
import HandleResize from "./Components/HandleResize";

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
  // const [backVideoX, setBackVideoX] = useState(0);
  const cameraRef = useRef();

  const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  let x;

  useEffect(() => {
    const landingPage = skillsPageBackgroundRef.current;
    const newY =
      -scrollOffset * (scrollData.el.clientHeight / (scrollData.pages - 1));
    landingPage.style.transform = `translateY(${newY}px)`;
  }, [scrollOffset, scrollData]);
  return (
    <main className={`${styles.main} ${device}`}>
      <div className={styles.skillsPage} ref={skillsPageBackgroundRef}>
        <video
          className="back-video"
          autoPlay
          muted
          loop
          style={{
            width: device === "web" ? "100%" : "auto",
            height: "100%",
            // transform:`translateX(${backVideoX}px)`
          }}
        >
          <source src="/bACKGROUND.mp4" type="video/mp4" />
          {/* stock-market-2023-11-27-05-36-31-utc_compressed */}
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
        <HandleResize cameraRef={cameraRef} setDevice={setDevice} />

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

import React, { useEffect, useRef } from 'react';

const HandleResize = ({ cameraRef, setDevice, setBackVideoX }) => {
  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;

      const distanceModifier = innerWidth < 768 ? 4 : 0; // Adjust condition as needed
      const newZPosition = 4.5 + distanceModifier;

      if (cameraRef.current) {
        cameraRef.current.position.set(
          cameraRef.current.position.x, // Keep current X position
          cameraRef.current.position.y, // Keep current Y position
          newZPosition
        );
      }

      setDevice(innerWidth > innerHeight ? "web" : "mobile");
      setBackVideoX(innerWidth > innerHeight ? 0 : (960 - innerWidth / 2) * -1);
    };

    // Set initial position if not already set
    if (cameraRef.current && !cameraRef.current.position.length) {
      cameraRef.current.position.set(3.2, 2.7, 4.5); // Initial position (adjust as needed)
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [cameraRef, setDevice, setBackVideoX]); // Add dependencies for props
};

export default HandleResize;

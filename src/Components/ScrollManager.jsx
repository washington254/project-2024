import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import anime from 'animejs';

export const ScrollManager = (props) => {
  const { section, onSectionChange, setScrollOffset, setScrollData } = props;
  
  const data = useScroll();
  setScrollData(data);

  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  const SCROLL_THRESHOLD = 0.5;  // Define the threshold according to your requirements
  const TOLERANCE = 0.05; // Define the tolerance according to your requirements

  useEffect(() => {
    if (data.el) {
      anime({
        targets: data.el,
        scrollTop: section * data.el.clientHeight,
        duration: 1000,
        begin: () => {
          isAnimating.current = true;
        },
        complete: () => {
          isAnimating.current = false;
        },
      });
    }
  }, [section, data.el]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);
    const diff = data.scroll.current - lastScroll.current;

    if (section === 0 && data.scroll.current > SCROLL_THRESHOLD + TOLERANCE && diff > 0) {
      onSectionChange(1);
    } else if (section === 1 && data.scroll.current < SCROLL_THRESHOLD - TOLERANCE && diff < 0) {
      onSectionChange(0);
    }

    lastScroll.current = data.scroll.current;
    setScrollOffset(data.offset);
  });

  return null;
};

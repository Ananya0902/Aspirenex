"use client";

import { useEffect, useRef, useState } from 'react';
import './CustomCursorCSS.css'; // Import the CSS file

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const moveCursor = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });

      // Update trail
      setTrail((prevTrail) => [...prevTrail, { x: clientX, y: clientY }]);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  useEffect(() => {
    const cursorElement = cursorRef.current;
    if (!cursorElement) return;

    const updateTrail = () => {
      if (trail.length === 0) return;

      const lastPos = trail[0];
      const dx = position.x - lastPos.x;
      const dy = position.y - lastPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 10) {
        setTrail((prevTrail) => prevTrail.slice(1));
      }
    };

    const interval = setInterval(updateTrail, 7);

    return () => clearInterval(interval);
  }, [position, trail]);

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <div className="cursor-neon" style={{ left: `${position.x}px`, top: `${position.y}px` }} />
      {trail.map((trailPos, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{ left: `${trailPos.x}px`, top: `${trailPos.y}px`, opacity: 1 - index / trail.length }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;

// src/components/BackgroundEffects.tsx
import React from 'react';
import '../styles/style.scss';
import InteractiveBubble from './interactive-bubble';

interface BackgroundEffectsProps {
  children: React.ReactNode;
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ children }) => {
  return (
    <div className="background-container">
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <InteractiveBubble />
        </div>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default BackgroundEffects;

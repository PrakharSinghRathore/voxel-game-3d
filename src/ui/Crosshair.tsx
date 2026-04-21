import React from 'react';

export const Crosshair: React.FC = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
      <svg width="16" height="16" viewBox="0 0 16 16">
        <line x1="8" y1="2" x2="8" y2="6" stroke="white" strokeWidth="1.5" opacity="0.8" />
        <line x1="8" y1="10" x2="8" y2="14" stroke="white" strokeWidth="1.5" opacity="0.8" />
        <line x1="2" y1="8" x2="6" y2="8" stroke="white" strokeWidth="1.5" opacity="0.8" />
        <line x1="10" y1="8" x2="14" y2="8" stroke="white" strokeWidth="1.5" opacity="0.8" />
      </svg>
    </div>
  );
};

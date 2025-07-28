import React from 'react';

interface LogoEIBMProps {
  className?: string;
  width?: number;
  height?: number;
}

const LogoEIBM: React.FC<LogoEIBMProps> = ({ className = "", width = 200, height = 60 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          {`
            .fil7 {fill:#023155}
            .fil17 {fill:#043A68}
            .fil21 {fill:#1169B5}
            .fil3 {fill:#1886EF}
            .fil6 {fill:#2E4905}
            .fil16 {fill:#48710B}
            .fil18 {fill:#558D0D}
            .fil14 {fill:#564704}
            .fil9 {fill:#570C01}
            .fil12 {fill:#685609}
            .fil19 {fill:#6D1102}
            .fil2 {fill:#75BB17}
            .fil10 {fill:#86BCED}
            .fil24 {fill:#8A730C}
            .fil22 {fill:#8F1502}
            .fil26 {fill:#A6961B}
            .fil13 {fill:#A7CD66}
            .fil25 {fill:#AF1A01}
            .fil8 {fill:#B2D479}
            .fil23 {fill:#CA2307}
            .fil5 {fill:#EECC25}
            .fil20 {fill:#EEDB75}
            .fil4 {fill:#F1401B}
            .fil15 {fill:#F1836A}
            .fil11 {fill:#F49783}
            .fil27 {fill:whitesmoke}
            .fil28 {fill:#373435;fill-rule:nonzero}
            .fil0 {fill:#4967AF;fill-opacity:0.501961}
            .fil1 {fill:#4967AF;fill-rule:nonzero;fill-opacity:0.501961}
          `}
        </style>
      </defs>
      
      {/* Simplified EIBM logo representation */}
      <g>
        {/* Background circle */}
        <circle cx="60" cy="60" r="50" className="fil3" />
        
        {/* EIBM text */}
        <text x="130" y="45" fontSize="24" fontWeight="bold" className="fil7">EIBM</text>
        <text x="130" y="65" fontSize="12" className="fil17">Especialidades Integradas</text>
        <text x="130" y="80" fontSize="12" className="fil17">e Bem-estar Multidisciplinar</text>
        
        {/* Icon elements */}
        <circle cx="45" cy="45" r="8" className="fil2" />
        <circle cx="75" cy="45" r="8" className="fil5" />
        <circle cx="45" cy="75" r="8" className="fil4" />
        <circle cx="75" cy="75" r="8" className="fil8" />
        
        {/* Center connecting element */}
        <circle cx="60" cy="60" r="6" className="fil27" />
      </g>
    </svg>
  );
};

export default LogoEIBM;